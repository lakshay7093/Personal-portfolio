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

const GITHUB_USERNAME = "lakshay7093";
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

let cachedStats: GitHubStats | null = null;
let lastFetchTime = 0;

/**
 * Fetch GitHub user stats from GitHub API
 * Uses caching to avoid rate limits
 */
export async function fetchGitHubStats(): Promise<GitHubStats> {
  // Return cached data if still valid
  const now = Date.now();
  if (cachedStats && now - lastFetchTime < CACHE_DURATION) {
    return cachedStats;
  }

  try {
    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {},
        next: { revalidate: 3600 },
      }
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }

    const userData = await userResponse.json();

    // Calculate years active on GitHub
    const accountCreated = new Date(userData.created_at);
    const currentDate = new Date();
    const yearsActive = Math.max(1, Math.floor((currentDate.getTime() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 365)));

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {},
        next: { revalidate: 3600 },
      }
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos = await reposResponse.json();

    // Calculate total stars and forks
    const totalStars = repos.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce(
      (acc: number, repo: any) => acc + repo.forks_count,
      0
    );

    // Fetch commits from events
    let totalCommits = 0;
    try {
      for (let page = 1; page <= 3; page++) {
        const eventsResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100&page=${page}`,
          {
            headers: process.env.GITHUB_TOKEN
              ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
              : {},
            next: { revalidate: 3600 },
          }
        );

        if (eventsResponse.ok) {
          const events = await eventsResponse.json();
          if (events.length === 0) break;
          
          const pushEvents = events.filter((e: any) => e.type === "PushEvent");
          const commitsInPage = pushEvents.reduce(
            (acc: number, event: any) => acc + (event.payload?.commits?.length || 0),
            0
          );
          totalCommits += commitsInPage;
        }
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    }

    const stats: GitHubStats = {
      totalCommits,
      publicRepos: userData.public_repos || 0,
      totalStars,
      totalForks,
      followers: userData.followers || 0,
      following: userData.following || 0,
      yearsActive,
      accountCreated: userData.created_at,
    };

    // Cache the results
    cachedStats = stats;
    lastFetchTime = now;

    return stats;
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
