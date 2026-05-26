# दो GitHub Accounts का Setup - हिंदी गाइड

अब आपका portfolio दोनों GitHub accounts के **सभी lifetime commits** को combine करके दिखाएगा! 🎉

## ✅ क्या Changes हुए हैं?

### 1. **Accurate Commit Counting**
अब **GitHub GraphQL API** use करके **total lifetime contributions** fetch होते हैं:
- ✅ सभी commits (public + private repos में)
- ✅ Pull requests
- ✅ Issues
- ✅ Code reviews
- ✅ सभी contributions जो GitHub graph में दिखते हैं

### 2. **Environment Variables** (`.env.local`)
अब आप दो GitHub usernames add कर सकते हैं:

```env
# पहला (मुख्य) GitHub account
GITHUB_USERNAME=lakshay7093

# दूसरा GitHub account
GITHUB_USERNAME_SECONDARY=your-second-username

# GitHub Token (REQUIRED for accurate commit counts!)
GITHUB_TOKEN=your-token-here
```

⚠️ **Important**: GraphQL API के लिए `GITHUB_TOKEN` **जरूरी** है! बिना token के sirf limited data milेगा।

### 2. **Automatic Combination**
सभी stats automatically combine हो जाएंगे:
- ✅ **Total Contributions** = Account 1 की सभी lifetime contributions + Account 2 की सभी lifetime contributions
- ✅ Public Repos = Account 1 + Account 2  
- ✅ Stars = Account 1 + Account 2
- ✅ Followers = Account 1 + Account 2
- ✅ Years Active = दोनों में से जो ज्यादा पुराना account

**Note**: Total Contributions में शामिल हैं:
- Commits (public + private repos)
- Pull Requests
- Issues opened
- Code Reviews
- सभी GitHub activity जो contribution graph में दिखती है

### 3. **Smart Fallback**
अगर दूसरा account load नहीं होता, तो पहले account के stats दिखेंगे।

## 🚀 कैसे Use करें?

### Step 1: GitHub Token Generate करें (जरूरी!)

1. [GitHub Settings > Tokens](https://github.com/settings/tokens) पर जाएं
2. "Generate new token (classic)" पर click करें
3. Token को एक name दें (जैसे: "Portfolio Stats")
4. **Scopes select करें:**
   - ✅ `read:user` - User profile data के लिए
   - ✅ `repo` (optional) - Private repo contributions के लिए
5. "Generate token" पर click करें
6. Token को copy करें (⚠️ ये sirf एक बार दिखेगा!)

### Step 2: `.env.local` File Update करें

अपनी `.env.local` file में ये lines add करें:

```env
GITHUB_USERNAME=lakshay7093
GITHUB_USERNAME_SECONDARY=apna-dusra-username
GITHUB_TOKEN=ghp_your_generated_token_here
```

⚠️ **बिना token के accurate commit count नहीं मिलेगा!**

### Step 3: Development Server Restart करें

```bash
npm run dev
```

### Step 4: Check करें

Browser में `http://localhost:3000` खोलें और GitHub Stats section देखें। अब दोनों accounts के **सभी lifetime contributions** combined दिखेंगे!

## 📊 Example

**पहला Account (lakshay7093):**
- Total Contributions: 1,247 (lifetime)
- Repos: 20
- Followers: 50

**दूसरा Account (work-account):**
- Total Contributions: 856 (lifetime)
- Repos: 15
- Followers: 30

**Combined Result:**
- **Total Contributions: 2,103+** ✨ (सभी lifetime contributions!)
- Public Repositories: 35+
- Followers: 80+

## 🔧 Technical Details

### How It Works:

1. **GraphQL API (Primary Method)**:
   - Fetches `contributionCalendar.totalContributions` (सभी public contributions)
   - Fetches `restrictedContributionsCount` (private repo contributions)
   - **Total = public + private contributions**

2. **REST API (Fallback)**:
   - अगर GraphQL fail हो तो recent events से estimate करता है
   - Last 1000 events check करता है
   - Less accurate but better than nothing

### Modified Files:
1. **`lib/github.ts`** - GraphQL API integration for accurate commit counts
2. **`.env.local.example`** - Updated template
3. **`sections/GitHubStats.tsx`** - No changes needed!

### Key Features:
- ⚡ **Accurate lifetime contributions** using GraphQL API
- 🛡️ Fallback to REST API if GraphQL fails
- ⏱️ 1 hour caching (performance के लिए)
- 🔄 Automatic retry with primary account
- 📈 Real-time stats from GitHub API
- 🔐 Secure token handling

## 💡 Pro Tips

1. **GitHub Token जरूर Use करें**: 
   - Without token: GraphQL API काम नहीं करेगा
   - With token: सभी lifetime contributions accurately मिलेंगे
   - Token scopes: `read:user` (minimum), `repo` (private contributions के लिए)

2. **Public + Private Contributions**: 
   - Token में `repo` scope add करें तो private repo contributions भी count होंगे
   - बिना `repo` scope के sirf public contributions

3. **Rate Limits**:
   - Without token: 60 requests/hour
   - With token: 5000 requests/hour

4. **Cache**: Stats हर 1 घंटे में update होते हैं (GitHub API load कम करने के लिए)

## 🐛 Troubleshooting

### Stats नहीं दिख रहे या 0 दिख रहे?
1. ✅ `.env.local` में `GITHUB_TOKEN` add किया है?
2. ✅ Token में proper scopes हैं? (`read:user` minimum)
3. ✅ Server restart किया?
4. ✅ Browser console में errors check करें

### Sirf ek account के stats दिख रहे?
1. `GITHUB_USERNAME_SECONDARY` properly set है check करें
2. Username spelling correct है verify करें
3. Dono accounts public हैं confirm करें

### Contributions count kam dिख रहे?
1. Token में `repo` scope add करें (private contributions के लिए)
2. Cache clear करें (server restart)
3. GitHub पर manually check करें कि actual contributions kitne हैं

### GraphQL API Error?
- Token valid है check करें
- Token expire तो नहीं हो गया?
- Fallback automatically REST API use करेगा (less accurate)

## 📝 Notes

- Stats हर 1 घंटे में update होते हैं (caching की वजह से)
- GitHub API rate limits का ध्यान रखा गया है
- Automatic fallback है अगर कोई account fail हो

---

**बनाया गया**: Kiro AI के साथ ❤️

**Questions?** Documentation पढ़ें: `MULTI_GITHUB_ACCOUNTS.md`
