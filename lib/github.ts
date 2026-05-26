// GitHub API utilities for fetching real stats

export interface GitHubStats {
  totalCommits: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  following: number;
  yearsActive: number;
  accountCreated: string;
}

interface GitHubUserResponse {
  created_at: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

interface GitHubRepoResponse {
  stargazers_count?: number;
  forks_count?: number;
  fork?: boolean; // Whether this repo is a fork
}

interface GitHubEventResponse {
  type: string;
  payload?: {
    commits?: unknown[];
  };
}

// Support multiple GitHub accounts
const PRIMARY_USERNAME = process.env.GITHUB_USERNAME || "lakshay7093";
const SECONDARY_USERNAME = process.env.GITHUB_USERNAME_SECONDARY || "";
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

let cachedStats: GitHubStats | null = null;
let lastFetchTime = 0;

/**
 * Fetch stats for a single GitHub account
 */
async function fetchSingleAccountStats(username: string): Promise<GitHubStats> {
  // Fetch user data
  const userResponse = await fetch(
    `https://api.github.com/users/${username}`,
    {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
        : {},
      next: { revalidate: 3600 },
    }
  );

  if (!userResponse.ok) {
    throw new Error(`Failed to fetch GitHub user data for ${username}`);
  }

  const userData = (await userResponse.json()) as GitHubUserResponse;

  // Calculate years active on GitHub
  const accountCreated = new Date(userData.created_at);
  const currentDate = new Date();
  const yearsActive = Math.max(1, Math.floor((currentDate.getTime() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 365)));

  // Fetch repositories
  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
        : {},
      next: { revalidate: 3600 },
    }
  );

  if (!reposResponse.ok) {
    throw new Error(`Failed to fetch GitHub repos for ${username}`);
  }

  const repos = (await reposResponse.json()) as GitHubRepoResponse[];

  // Calculate total stars received on all repos
  const totalStars = repos.reduce(
    (acc, repo) => acc + (repo.stargazers_count || 0),
    0
  );
  
  // Calculate total forks: count repos that are forks (repos you forked from others)
  const totalForks = repos.filter(repo => repo.fork === true).length;

  // Fetch total commits (public + private) using GitHub GraphQL API
  let totalCommits = 0;
  try {
    // GraphQL query to sum commits across ALL repos (public + private)
    // commitContributionsByRepository gives per-repo commit counts
    const graphqlQuery = {
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
    };

    const graphqlResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(graphqlQuery),
      next: { revalidate: 3600 },
    });

    if (graphqlResponse.ok) {
      const graphqlData = await graphqlResponse.json();
      const col = graphqlData?.data?.user?.contributionsCollection;
      if (col) {
        // totalCommitContributions = public commits
        // restrictedContributionsCount = private repo commits (needs token with repo scope)
        totalCommits =
          (col.totalCommitContributions || 0) +
          (col.restrictedContributionsCount || 0);
      }
    } else {
      // Fallback: count commits from recent push events
      console.warn(`GraphQL API failed for ${username}, falling back to events API`);
      for (let page = 1; page <= 10; page++) {
        const eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100&page=${page}`,
          {
            headers: process.env.GITHUB_TOKEN
              ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
              : {},
            next: { revalidate: 3600 },
          }
        );

        if (eventsResponse.ok) {
          const events = (await eventsResponse.json()) as GitHubEventResponse[];
          if (events.length === 0) break;
          const pushEvents = events.filter((e) => e.type === "PushEvent");
          totalCommits += pushEvents.reduce(
            (acc, e) => acc + (e.payload?.commits?.length || 0),
            0
          );
        }
      }
    }
  } catch (error) {
    console.error(`Error fetching commits for ${username}:`, error);
  }

  return {
    totalCommits,
    publicRepos: userData.public_repos || 0,
    totalStars,
    totalForks,
    followers: userData.followers || 0,
    following: userData.following || 0,
    yearsActive,
    accountCreated: userData.created_at,
  };
}

/**
 * Fetch GitHub user stats from GitHub API
 * Combines stats from multiple accounts if configured
 * Uses caching to avoid rate limits
 */
export async function fetchGitHubStats(): Promise<GitHubStats> {
  // Return cached data if still valid
  const now = Date.now();
  if (cachedStats && now - lastFetchTime < CACHE_DURATION) {
    return cachedStats;
  }

  try {
    // Fetch stats for primary account
    const primaryStats = await fetchSingleAccountStats(PRIMARY_USERNAME);

    // If secondary account is configured, fetch and combine stats
    if (SECONDARY_USERNAME && SECONDARY_USERNAME.trim() !== "") {
      try {
        const secondaryStats = await fetchSingleAccountStats(SECONDARY_USERNAME);

        // Combine stats from both accounts
        const combinedStats: GitHubStats = {
          totalCommits: primaryStats.totalCommits + secondaryStats.totalCommits,
          publicRepos: primaryStats.publicRepos + secondaryStats.publicRepos,
          totalStars: primaryStats.totalStars + secondaryStats.totalStars,
          totalForks: primaryStats.totalForks + secondaryStats.totalForks,
          followers: primaryStats.followers + secondaryStats.followers,
          following: primaryStats.following + secondaryStats.following,
          // Use the older account's years active (maximum of both)
          yearsActive: Math.max(primaryStats.yearsActive, secondaryStats.yearsActive),
          // Use primary account's creation date
          accountCreated: primaryStats.accountCreated,
        };

        // Cache the combined results
        cachedStats = combinedStats;
        lastFetchTime = now;

        return combinedStats;
      } catch (error) {
        console.error("Error fetching secondary account stats, using primary only:", error);
        // If secondary account fails, just use primary stats
        cachedStats = primaryStats;
        lastFetchTime = now;
        return primaryStats;
      }
    }

    // If no secondary account, just return primary stats
    cachedStats = primaryStats;
    lastFetchTime = now;
    return primaryStats;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);

    // Return cached data if available
    if (cachedStats) {
      return cachedStats;
    }

    // If no cached data and API fails, throw error
    throw new Error("Failed to fetch GitHub stats and no cached data available");
  }
}

/**
 * Format number with + suffix for display
 */
export function formatStatValue(value: number): string {
  if (value >= 1000) {
    return `${Math.floor(value / 100) / 10}k+`;
  }
  return `${value}+`;
}
