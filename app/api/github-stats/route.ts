import { NextResponse } from "next/server";

interface GitHubUserResponse {
  created_at: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

interface GitHubRepoResponse {
  stargazers_count?: number;
  forks_count?: number;
  fork?: boolean;
}

interface GitHubEventResponse {
  type: string;
  payload?: {
    commits?: unknown[];
  };
}

const CACHE_DURATION = 3600; // 1 hour

async function fetchSingleAccountStats(username: string, token: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  // Fetch user data
  const userRes = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    next: { revalidate: CACHE_DURATION },
  });
  if (!userRes.ok) throw new Error(`Failed to fetch user: ${username}`);
  const user = (await userRes.json()) as GitHubUserResponse;

  // Years active
  const yearsActive = Math.max(
    1,
    Math.floor(
      (Date.now() - new Date(user.created_at).getTime()) /
        (1000 * 60 * 60 * 24 * 365)
    )
  );

  // Fetch all repos (handle pagination)
  let allRepos: GitHubRepoResponse[] = [];
  for (let page = 1; page <= 5; page++) {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      { headers, next: { revalidate: CACHE_DURATION } }
    );
    if (!reposRes.ok) break;
    const repos = (await reposRes.json()) as GitHubRepoResponse[];
    if (repos.length === 0) break;
    allRepos = allRepos.concat(repos);
    if (repos.length < 100) break;
  }

  const totalStars = allRepos.reduce(
    (acc, r) => acc + (r.stargazers_count || 0),
    0
  );
  // Count repos that are forks (repos this user forked from others)
  const totalForks = allRepos.filter((r) => r.fork === true).length;
  const publicRepos = user.public_repos || 0;

  // Fetch commits via GraphQL (public + private)
  let totalCommits = 0;
  try {
    const gqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                totalCommitContributions
                restrictedContributionsCount
              }
            }
          }
        `,
        variables: { username },
      }),
      next: { revalidate: CACHE_DURATION },
    });

    if (gqlRes.ok) {
      const gqlData = await gqlRes.json();
      const col = gqlData?.data?.user?.contributionsCollection;
      if (col) {
        totalCommits =
          (col.totalCommitContributions || 0) +
          (col.restrictedContributionsCount || 0);
      }
    } else {
      // Fallback: events API
      for (let page = 1; page <= 10; page++) {
        const evRes = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100&page=${page}`,
          { headers, next: { revalidate: CACHE_DURATION } }
        );
        if (!evRes.ok) break;
        const events = (await evRes.json()) as GitHubEventResponse[];
        if (events.length === 0) break;
        totalCommits += events
          .filter((e) => e.type === "PushEvent")
          .reduce((acc, e) => acc + (e.payload?.commits?.length || 0), 0);
      }
    }
  } catch {
    // ignore commit fetch errors
  }

  return {
    totalCommits,
    publicRepos,
    totalStars,
    totalForks,
    followers: user.followers || 0,
    following: user.following || 0,
    yearsActive,
    accountCreated: user.created_at,
  };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN || "";
  const primary = process.env.GITHUB_USERNAME || "lakshay7093";
  const secondary = process.env.GITHUB_USERNAME_SECONDARY || "";

  try {
    const primaryStats = await fetchSingleAccountStats(primary, token);

    if (secondary.trim() !== "") {
      try {
        const secondaryStats = await fetchSingleAccountStats(secondary, token);

        const combined = {
          totalCommits: primaryStats.totalCommits + secondaryStats.totalCommits,
          publicRepos: primaryStats.publicRepos + secondaryStats.publicRepos,
          totalStars: primaryStats.totalStars + secondaryStats.totalStars,
          totalForks: primaryStats.totalForks + secondaryStats.totalForks,
          followers: primaryStats.followers + secondaryStats.followers,
          following: primaryStats.following + secondaryStats.following,
          yearsActive: Math.max(primaryStats.yearsActive, secondaryStats.yearsActive),
          accountCreated: primaryStats.accountCreated,
        };

        return NextResponse.json(combined, {
          headers: { "Cache-Control": `s-maxage=${CACHE_DURATION}, stale-while-revalidate` },
        });
      } catch {
        // secondary failed, return primary only
      }
    }

    return NextResponse.json(primaryStats, {
      headers: { "Cache-Control": `s-maxage=${CACHE_DURATION}, stale-while-revalidate` },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
