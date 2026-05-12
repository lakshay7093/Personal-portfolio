# 🚀 Complete Deployment Guide

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Fill in details:
   - **Repository name:** `lakshay-portfolio` (or any name you want)
   - **Description:** "My professional portfolio website built with Next.js"
   - **Visibility:** Public ✅
   - **DO NOT** check:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
3. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you see the empty repository page

Copy your repository URL (it will look like):
```
https://github.com/lakshay7093/lakshay-portfolio.git
```

Then run these commands in your terminal:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/lakshay-portfolio.git

# Commit all changes
git commit -m "Initial commit: Complete portfolio with animations"

# Push to GitHub
git push -u origin master
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Option B: Quick Commands (Copy-Paste Ready)

```bash
# 1. Commit changes
git commit -m "Initial commit: Complete portfolio with animations"

# 2. Add your GitHub repo (CHANGE THE URL!)
git remote add origin https://github.com/lakshay7093/lakshay-portfolio.git

# 3. Push to GitHub
git push -u origin master
```

## Step 3: Deploy to Vercel

### Method 1: Using Vercel Website (Easiest)

1. **Go to:** https://vercel.com
2. **Sign up/Login** with GitHub account
3. Click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select your `lakshay-portfolio` repository
6. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
7. **Environment Variables** (Important!):
   Click "Environment Variables" and add:
   
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=lakshaysaini181@gmail.com
   ```
   
   *(Optional: Add GITHUB_TOKEN if you have one)*

8. Click **"Deploy"**
9. Wait 2-3 minutes ⏳
10. **Done!** 🎉 Your site is live!

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? lakshay-portfolio
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

## 🔧 Important Files to Check Before Deployment

### 1. Environment Variables (.env.local)

Make sure you have:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=lakshaysaini181@gmail.com
```

**⚠️ NEVER commit .env.local to GitHub!**

### 2. .gitignore

Make sure these are in `.gitignore`:
```
.env.local
.env*.local
node_modules/
.next/
```

### 3. package.json

Check scripts are correct:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 📊 After Deployment

### Your URLs:
- **Vercel URL:** `https://lakshay-portfolio.vercel.app`
- **Custom Domain:** (if configured)

### Test These:
- ✅ Homepage loads
- ✅ All sections visible
- ✅ Animations working
- ✅ Contact form working
- ✅ Resume download working
- ✅ GitHub links working
- ✅ Mobile responsive

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails
**Solution:** Check for TypeScript errors
```bash
npm run build
```
Fix any errors shown.

### Issue 2: Contact Form Not Working
**Solution:** Add environment variables in Vercel dashboard
- Go to Settings → Environment Variables
- Add all SMTP variables

### Issue 3: Images Not Loading
**Solution:** Check image paths are correct
- Use `/images/filename.jpg` (not `./images/`)
- Images should be in `public/` folder

### Issue 4: 404 on Routes
**Solution:** Next.js App Router issue
- Make sure all pages are in `app/` folder
- Check `page.tsx` files exist

## 🎉 Success Checklist

After deployment, verify:
- [ ] Site loads on Vercel URL
- [ ] All animations working
- [ ] Contact form sends emails
- [ ] All links working
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] No console errors
- [ ] SEO meta tags present

## 📝 Update Your Portfolio

To update after deployment:

```bash
# Make changes to your code
# Then:

git add .
git commit -m "Update: description of changes"
git push

# Vercel will auto-deploy! 🚀
```

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Repo:** (your repo URL)

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Check remote
git remote -v

# Pull latest changes
git pull
```

---

**Need Help?** Check:
1. Vercel deployment logs
2. Browser console for errors
3. Network tab for failed requests

**Good luck with deployment! 🚀**
