// Test GitHub API directly
// Usage: node test-github-api.mjs

// Load environment variables from .env.local
import { config } from 'dotenv';
config({ path: '.env.local' });

const token = process.env.GITHUB_TOKEN;
const username1 = process.env.GITHUB_USERNAME || 'lakshay7093';
const username2 = process.env.GITHUB_USERNAME_SECONDARY || 'lakshay9732saini';

if (!token) {
  console.error('❌ GITHUB_TOKEN not found in .env.local');
  process.exit(1);
}

async function testGraphQL(username) {
  console.log(`\n📊 Testing GraphQL for ${username}...`);
  
  const query = {
    query: `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
            restrictedContributionsCount
          }
        }
      }
    `,
    variables: { username }
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();
    
    if (data.errors) {
      console.log('❌ GraphQL Error:', data.errors);
      return null;
    }

    const contributions = data?.data?.user?.contributionsCollection;
    const totalContributions = 
      (contributions?.contributionCalendar?.totalContributions || 0) +
      (contributions?.restrictedContributionsCount || 0);

    console.log(`✅ ${username}: ${totalContributions} contributions`);
    return totalContributions;
  } catch (error) {
    console.log('❌ Error:', error.message);
    return null;
  }
}

async function testREST(username) {
  console.log(`\n👤 Testing REST API for ${username}...`);
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `token ${token}`,
      },
    });

    if (!response.ok) {
      console.log('❌ Error:', response.status);
      return null;
    }

    const data = await response.json();
    console.log(`✅ ${username}:`);
    console.log(`   - Repos: ${data.public_repos}`);
    console.log(`   - Followers: ${data.followers}`);
    return data;
  } catch (error) {
    console.log('❌ Error:', error.message);
    return null;
  }
}

async function main() {
  console.log('🔍 Testing GitHub API Connection...\n');
  
  const contrib1 = await testGraphQL(username1);
  const contrib2 = await testGraphQL(username2);
  
  await testREST(username1);
  await testREST(username2);
  
  if (contrib1 !== null && contrib2 !== null) {
    console.log(`\n✅ Combined Contributions: ${contrib1 + contrib2}`);
  }
}

main().catch(console.error);
