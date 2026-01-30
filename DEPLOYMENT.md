# Deployment Guide

## Prerequisites

Before deploying, make sure you:

1. ✅ Added all newsletter images to `public/images/`
2. ✅ Updated all Figma links in `data/issues.ts`
3. ✅ Tested the site locally (`npm run dev`)

## Deploy to Vercel (Recommended - 5 minutes)

Vercel is the easiest and fastest way to deploy Next.js apps. It's free for personal projects.

### Step 1: Create a GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: explained newsletter site"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/explained-newsletter.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your `explained-newsletter` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live at `your-project.vercel.app` in ~60 seconds!

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `explained.yourcompany.com`)
4. Follow DNS instructions
5. Vercel automatically handles HTTPS

## Deploy to Netlify (Alternative)

### Option 1: Drag & Drop

```bash
# Build the site
npm run build

# Drag the .next folder to netlify.com/drop
```

### Option 2: Git Integration

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy"

## Environment Variables

This project doesn't use environment variables yet, but if you add analytics or other services:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify
1. Go to Site Settings → Environment Variables
2. Add your variables
3. Trigger a new deploy

## Custom Domain Setup

### For Internal Company Site

If this is an internal site on your company domain:

1. Contact your IT/DevOps team
2. Provide them with the deployment URL (e.g., `explained.vercel.app`)
3. They'll set up a CNAME record pointing to your deployment
4. Add the custom domain in Vercel/Netlify settings

Example DNS record:
```
Type: CNAME
Name: explained (or newsletter.explained)
Value: explained.vercel.app
```

## Updating Content

To update newsletter issues or fix content:

```bash
# Make your changes locally
npm run dev  # Test changes

# Commit and push
git add .
git commit -m "Add Issue 4"
git push

# Vercel/Netlify auto-deploys from main branch
```

Your changes will be live in ~30 seconds!

## Performance Optimization

The site is already optimized, but for even better performance:

### 1. Optimize Images

```bash
# Install sharp for better image optimization
npm install sharp

# Images will be automatically optimized by Next.js
```

### 2. Add Analytics (Optional)

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to app/layout.tsx:
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
```

## Troubleshooting

### Images Not Loading

1. Check image paths are correct: `/images/issue-1.png`
2. Verify images exist in `public/images/`
3. Check file extensions match (PNG vs png)

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Slow Loading

1. Compress images before uploading (keep under 500KB)
2. Use PNG or JPG format
3. Enable image optimization in `next.config.ts`

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
