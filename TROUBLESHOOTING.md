# Troubleshooting Guide

Common issues and their solutions for the portfolio project.

---

## ⚠️ Warning: metadataBase property not set

### Problem
```
⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images
```

### What it means
Next.js needs a base URL to generate absolute URLs for social media images (Open Graph, Twitter cards). Without it, images won't display properly when sharing on social media.

### Solution ✅
Added `metadataBase` in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  // ... rest of metadata
};
```

And added environment variable in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**For production**, update `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://lakshaysaini.vercel.app
```

---

## ⚠️ Blocked cross-origin request

### Problem
```
⚠ Blocked cross-origin request to Next.js dev resource /_next/webpack-hmr from "10.137.174.199"
```

### What it means
You're trying to access the development server from another device on your network (like your phone or another computer). Next.js blocks this by default for security.

### Solution ✅
Added `allowedDevOrigins` in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.137.174.199'],
  // ... rest of config
};
```

### How to find your device IP
If you want to access from another device:

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address"

**Mac/Linux:**
```bash
ifconfig
```
Look for "inet" address

Then add that IP to `allowedDevOrigins` array.

---

## 🚫 Error: Export 'Github' doesn't exist

### Problem
```
Export Github doesn't exist in target module
```

### What it means
Lucide React library doesn't have a `Github` icon. The correct icon name is different.

### Solution ✅
Changed import in `sections/GitHubStats.tsx`:

```typescript
// ❌ Wrong
import { Github } from "lucide-react";

// ✅ Correct
import { GitBranch } from "lucide-react";
```

---

## 🔧 Common Development Issues

### 1. Port Already in Use

**Problem:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

---

### 2. Module Not Found

**Problem:**
```
Module not found: Can't resolve '@/components/...'
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

---

### 3. TypeScript Errors

**Problem:**
```
Type error: Property 'X' does not exist on type 'Y'
```

**Solution:**
```bash
# Check TypeScript configuration
npm run build

# If needed, restart TypeScript server in VS Code
Ctrl+Shift+P -> "TypeScript: Restart TS Server"
```

---

### 4. Framer Motion Hydration Errors

**Problem:**
```
Warning: Prop `className` did not match
```

**Solution:**
Make sure all animated components have `"use client"` directive at the top of the file.

```typescript
"use client";

import { motion } from "framer-motion";
```

---

### 5. Environment Variables Not Working

**Problem:**
Environment variables are `undefined` in the code.

**Solution:**
1. Restart the development server after changing `.env.local`
2. Make sure client-side variables start with `NEXT_PUBLIC_`
3. Check `.env.local` is in the root directory

```bash
# Restart server
Ctrl+C
npm run dev
```

---

### 6. Images Not Loading

**Problem:**
Images show broken icon or 404 error.

**Solution:**
1. Check images are in `public/` folder
2. Use correct path (no `/public` in the path)

```typescript
// ❌ Wrong
<img src="/public/images/1.jpg" />

// ✅ Correct
<img src="/images/1.jpg" />
```

---

### 7. Contact Form Not Working

**Problem:**
Form submits but email doesn't send.

**Solution:**
1. Check `.env.local` has correct email credentials
2. For Gmail, use App Password (not regular password)
3. Check API route is working: `app/api/contact/route.ts`

**Generate Gmail App Password:**
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App passwords → Generate
4. Use that password in `.env.local`

---

### 8. Build Errors

**Problem:**
```
Error: Build failed
```

**Solution:**
```bash
# Clear everything and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

### 9. Vercel Deployment Issues

**Problem:**
Build succeeds locally but fails on Vercel.

**Solution:**
1. Check all environment variables are added in Vercel dashboard
2. Make sure `NEXT_PUBLIC_SITE_URL` is set to production URL
3. Check Node.js version matches (package.json engines)

**Add Environment Variables in Vercel:**
1. Go to Project Settings
2. Environment Variables
3. Add all variables from `.env.local`
4. Redeploy

---

### 10. Slow Performance

**Problem:**
Portfolio loads slowly or animations are laggy.

**Solution:**
1. Optimize images (use WebP format)
2. Check bundle size: `npm run build`
3. Use Next.js Image component
4. Lazy load sections

```typescript
// Use Next.js Image
import Image from 'next/image';

<Image 
  src="/images/1.jpg" 
  alt="Profile" 
  width={200} 
  height={200}
  priority // for above-the-fold images
/>
```

---

## 🔍 Debugging Tips

### Check Console Logs
Open browser DevTools (F12) and check:
- Console tab for JavaScript errors
- Network tab for failed requests
- Lighthouse tab for performance issues

### Check Server Logs
Look at terminal where `npm run dev` is running for:
- Build errors
- API route errors
- Warning messages

### Use React DevTools
Install React DevTools extension to:
- Inspect component tree
- Check props and state
- Profile performance

---

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Debugging
npm run build -- --debug    # Build with debug info
npm run dev -- --turbo      # Use Turbopack (faster)

# Cleanup
rm -rf .next               # Clear Next.js cache
rm -rf node_modules        # Remove dependencies
npm install                # Reinstall dependencies
```

---

## 🆘 Still Having Issues?

1. **Check Next.js Documentation:**
   https://nextjs.org/docs

2. **Check Framer Motion Docs:**
   https://www.framer.com/motion/

3. **Check Tailwind CSS Docs:**
   https://tailwindcss.com/docs

4. **Search GitHub Issues:**
   - Next.js: https://github.com/vercel/next.js/issues
   - Framer Motion: https://github.com/framer/motion/issues

5. **Contact Developer:**
   - Email: lakshaysaini181@gmail.com
   - GitHub: @lakshay7093
   - WhatsApp: +91 88375 78244

---

## ✅ Checklist Before Deployment

- [ ] All environment variables set
- [ ] `NEXT_PUBLIC_SITE_URL` updated to production URL
- [ ] Build succeeds locally (`npm run build`)
- [ ] All images optimized
- [ ] Contact form tested
- [ ] All links working
- [ ] Mobile responsive checked
- [ ] SEO metadata verified
- [ ] Performance tested (Lighthouse)
- [ ] No console errors

---

**Last Updated:** May 10, 2026
