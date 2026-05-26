# Multiple GitHub Accounts Setup

This portfolio now supports combining **accurate lifetime GitHub statistics** from multiple accounts using GitHub's GraphQL API!

## 🎯 Features

- **Accurate Lifetime Contributions**: Uses GitHub GraphQL API to fetch total contributions (not just recent events)
- **Combined Stats**: Automatically aggregates commits, repos, stars, followers from all your GitHub accounts
- **Public + Private Contributions**: Includes private repository contributions when token has proper scopes
- **Fallback Support**: If GraphQL fails, falls back to REST API; if secondary account fails, shows primary stats
- **Smart Caching**: Reduces API calls with 1-hour cache duration
- **Easy Configuration**: Just add environment variables

## 📝 Setup Instructions

### Step 1: Generate GitHub Token (Required!)

The GraphQL API requires authentication. Generate a token:

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Stats")
4. **Select scopes:**
   - ✅ `read:user` - Required for user profile data
   - ✅ `repo` (optional) - Include private repository contributions
5. Click "Generate token"
6. Copy the token (you'll only see it once!)

### Step 2: Update Environment Variables

Add to your `.env.local` file:

```env
# Primary GitHub account (required)
GITHUB_USERNAME=lakshay7093

# Secondary GitHub account (optional)
GITHUB_USERNAME_SECONDARY=your-second-github-username

# GitHub Token (REQUIRED for accurate counts!)
GITHUB_TOKEN=ghp_your_generated_token_here
```

⚠️ **Without a token, you won't get accurate contribution counts!**

### Step 3: Restart Development Server

```bash
npm run dev
```

## 🔧 How It Works

### GraphQL API (Primary Method)

Fetches accurate lifetime contributions:
- `contributionCalendar.totalContributions` - All public contributions
- `restrictedContributionsCount` - Private repository contributions
- **Total = public + private contributions**

Includes:
- Commits (public + private repos)
- Pull requests
- Issues opened
- Code reviews
- All activity shown in GitHub contribution graph

### REST API (Fallback)

If GraphQL fails:
- Fetches last 1000 events
- Counts commits from PushEvents
- Less accurate but better than nothing

### Combination Logic

1. **Primary Account**: Always fetched and displayed
2. **Secondary Account**: If configured, stats are fetched and combined with primary
3. **Combined Metrics**:
   - **Total Contributions** = Primary lifetime contributions + Secondary lifetime contributions
   - Public Repos = Primary + Secondary
   - Total Stars = Primary + Secondary
   - Total Forks = Primary + Secondary
   - Followers = Primary + Secondary
   - Years Active = Maximum of both accounts (older account)

## 📊 What Gets Combined

| Metric | Combination Logic | Data Source |
|--------|------------------|-------------|
| Total Contributions | Sum of **all lifetime contributions** from both accounts | GraphQL API |
| Public Repositories | Sum of all public repos | REST API |
| Total Stars | Sum of stars across all repos | REST API |
| Total Forks | Sum of forks across all repos | REST API |
| Followers | Sum of followers from both accounts | REST API |
| Years Active | Maximum years (older account) | Calculated |

### What Counts as Contributions?

- ✅ Commits (public + private with `repo` scope)
- ✅ Pull requests opened
- ✅ Issues opened
- ✅ Code reviews
- ✅ All activity in GitHub contribution graph

## 🚀 GitHub Token Setup

### Why is a token required?

- GraphQL API requires authentication
- Provides accurate lifetime contribution counts
- Increases rate limits (60 → 5000 requests/hour)
- Can include private repository contributions

### Token Scopes

**Minimum (Public contributions only):**
```
read:user
```

**Recommended (Include private contributions):**
```
read:user
repo
```

### How to Generate

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes as shown above
4. Copy token and add to `.env.local`:

```env
GITHUB_TOKEN=ghp_your_token_here
```

## 🔍 Troubleshooting

### Stats showing 0 or not displaying

1. ✅ Check if `GITHUB_TOKEN` is set in `.env.local`
2. ✅ Verify token has `read:user` scope minimum
3. ✅ Restart development server
4. ✅ Check browser console for API errors
5. ✅ Verify usernames are correct (case-sensitive)

### Secondary Account Not Showing

1. Check if `GITHUB_USERNAME_SECONDARY` is set in `.env.local`
2. Verify the username is correct (case-sensitive)
3. Check browser console for any API errors
4. Wait for cache to expire (1 hour) or restart server
5. Ensure account is public

### Contribution Count Seems Low

1. Add `repo` scope to token for private contributions
2. Clear cache by restarting server
3. Manually verify on GitHub profile
4. Check if GraphQL API is working (console logs)

### GraphQL API Errors

- Verify token is valid and not expired
- Check token has proper scopes
- System will automatically fallback to REST API (less accurate)
- Check GitHub API status: https://www.githubstatus.com/

### Rate Limit Issues

- Add a `GITHUB_TOKEN` to increase rate limits from 60 to 5000 requests/hour
- Stats are cached for 1 hour to minimize API calls
- Multiple accounts use more API calls

## 📁 Files Modified

- `lib/github.ts` - GraphQL API integration for accurate lifetime contributions
- `.env.local.example` - Updated with new environment variables
- `sections/GitHubStats.tsx` - No changes needed (automatically uses combined stats)

## 🎨 Display

The GitHub Stats section will automatically show combined statistics without any visual changes. The stats are seamlessly aggregated behind the scenes!

## 💡 Tips

- **Use GitHub Token**: Required for GraphQL API and accurate counts
- **Token Scopes**: Add `repo` scope to include private contributions
- **Keep Primary Account**: Use your main/professional account as primary
- **Secondary Account**: Can be personal, work, or any other GitHub profile
- **Stats Update**: Every hour (cached for performance)
- **Public Accounts**: Both accounts must be public for stats to be fetched
- **Private Contributions**: Require `repo` scope in token

## 📈 Example

**Account 1 (lakshay7093):**
- Lifetime Contributions: 1,247
- Public Repos: 20
- Followers: 50

**Account 2 (work-account):**
- Lifetime Contributions: 856
- Public Repos: 15
- Followers: 30

**Combined Display:**
- **Total Contributions: 2,103+** ✨
- Public Repositories: 35+
- Followers: 80+

---

**Note**: This feature respects GitHub's API rate limits and uses caching to minimize API calls.
