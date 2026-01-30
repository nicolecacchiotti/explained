# 🔧 Maintenance Guide

How to keep your explained newsletter site up-to-date and running smoothly.

## 📅 Regular Tasks

### Every 2 Months (When Publishing New Issue)

**Task: Add New Newsletter Issue**

Time: ~5 minutes

1. **Capture Screenshot**
   - Open your Figma prototype
   - Hide UI with Cmd/Ctrl + \\
   - Take full-page screenshot
   - Crop to 1200x900px (4:3 ratio)
   - Save as `issue-X.png`

2. **Add to Site**
   ```bash
   # Copy image to public folder
   cp ~/Downloads/issue-4.png public/images/
   
   # Open data file
   code data/issues.ts
   ```

3. **Update Data File**
   Add new entry to `data/issues.ts`:
   ```typescript
   {
     id: 4,
     title: "explained",
     volume: "Issue 4",
     date: "March 2026",
     featuredTool: "Your Tool Name Here",
     description: "Brief description of what this issue covers...",
     imageUrl: "/images/issue-4.png",
     figmaLink: "https://www.figma.com/proto/your-link",
   }
   ```

4. **Test & Deploy**
   ```bash
   npm run dev  # Test locally
   git add .
   git commit -m "Add Issue 4: [Tool Name]"
   git push     # Auto-deploys on Vercel/Netlify
   ```

### Monthly

**Task: Check Site Performance**

1. Run Lighthouse audit
   - Open site in Chrome
   - DevTools → Lighthouse → Run audit
   - Ensure all scores are 90+

2. Test on devices
   - iPhone/iPad
   - Android phone
   - Desktop browsers (Chrome, Safari, Firefox)

3. Verify all links work
   - Click through each newsletter card
   - Ensure Figma prototypes load

### Quarterly

**Task: Update Dependencies**

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Test site still works
npm run dev
npm run build

# If everything works, commit
git add package*.json
git commit -m "Update dependencies"
git push
```

**Task: Review Analytics**

If you've added analytics:
- Check which issues get most views
- Review traffic sources
- Monitor load times
- Check for 404 errors

## 🔄 Common Updates

### Update Issue Description

1. Open `data/issues.ts`
2. Find the issue
3. Update the `description` field
4. Save and push

### Change Issue Date Format

```typescript
// Before
date: "September 2025",

// After (with more detail)
date: "Sept 15, 2025",
```

### Replace Newsletter Image

1. Add new image to `public/images/`
2. Update or keep same filename in `data/issues.ts`
3. Delete old image (optional)

### Update Figma Link

If you republish a prototype:
1. Open `data/issues.ts`
2. Update the `figmaLink` URL
3. Test the new link
4. Push changes

## 🐛 Troubleshooting

### Issue: New Image Not Showing

**Solution 1: Clear Cache**
```bash
# Development
rm -rf .next
npm run dev

# Production
# Trigger new deployment on Vercel/Netlify
```

**Solution 2: Check Image Path**
- Verify file is in `public/images/`
- Check filename matches exactly (case-sensitive)
- Try different image format (PNG vs JPG)

### Issue: Site Build Failing

**Check 1: TypeScript Errors**
```bash
npm run build
# Read error messages carefully
# Fix any type errors in code
```

**Check 2: Missing Dependencies**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Check 3: Image Issues**
- Ensure all images referenced in `data/issues.ts` exist
- Check for special characters in filenames
- Verify image file sizes aren't too large (> 10MB)

### Issue: Slow Page Load

**Solution 1: Optimize Images**
```bash
# Use online tools:
# - TinyPNG: https://tinypng.com
# - Squoosh: https://squoosh.app

# Or install sharp for automatic optimization
npm install sharp
```

**Solution 2: Check Image Sizes**
```bash
# List image sizes
ls -lh public/images/

# Ideally each image should be < 500KB
```

### Issue: Deployment Failed

**Vercel:**
1. Check deployment logs in Vercel dashboard
2. Look for build errors
3. Ensure all environment variables are set (if any)

**Netlify:**
1. Check build logs in Netlify dashboard
2. Verify build command is `npm run build`
3. Verify publish directory is `.next`

## 🔐 Security Maintenance

### Monthly Security Check

```bash
# Check for security vulnerabilities
npm audit

# Fix automatically if possible
npm audit fix

# Test after fixing
npm run dev
npm run build
```

### Update Next.js

```bash
# Check current version
npm list next

# Update to latest
npm install next@latest react@latest react-dom@latest

# Test thoroughly
npm run dev
npm run build
```

## 📊 Performance Optimization

### Optimize Images Before Upload

1. **Resize to optimal dimensions**
   - Target: 1200x900px
   - Max: 1600x1200px for Retina

2. **Compress with TinyPNG**
   - Upload to [tinypng.com](https://tinypng.com)
   - Download compressed version
   - Use for website

3. **Convert to WebP** (optional, for advanced users)
   ```bash
   # Install cwebp (Mac)
   brew install webp
   
   # Convert image
   cwebp -q 80 issue-4.png -o issue-4.webp
   ```

### Monitor Performance

Use these tools:
- **Google Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: [webpagetest.org](https://www.webpagetest.org)
- **Vercel Analytics**: Free with Vercel deployment

Target metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📝 Content Best Practices

### Writing Issue Descriptions

**Good:**
```
We're exploring the tool every designer is talking about—Cursor. 
Learn how teams are using it to accelerate their design workflows 
with AI-powered features.
```

**Too Short:**
```
About Cursor.
```

**Too Long:**
```
We're back again with another issue of explained, our comprehensive 
design newsletter that's dedicated to exploring and explaining various 
AI tools that are currently available in the market for designers and 
design teams who want to... [continues for 5 more lines]
```

### Naming Conventions

**Images:**
- Use lowercase: `issue-4.png` not `Issue-4.PNG`
- Use hyphens: `issue-4.png` not `issue_4.png`
- Include issue number: `issue-4.png` not `march-newsletter.png`

**Git Commits:**
- Use clear messages: `Add Issue 4: Figma AI`
- Not: `update stuff` or `asdf`

## 🔄 Backup Strategy

### What to Backup

1. **Newsletter Images**
   - Keep originals in separate folder
   - Don't rely on Git alone for large files

2. **Data File**
   - Already backed up in Git
   - Consider keeping copy in Google Drive

3. **Figma Files**
   - Already backed up in Figma
   - Export as PDF occasionally for archival

### Backup Workflow

```bash
# Create backups folder
mkdir ~/explained-backups

# Copy current images
cp -r public/images/* ~/explained-backups/images-$(date +%Y%m%d)/

# Copy data file
cp data/issues.ts ~/explained-backups/issues-$(date +%Y%m%d).ts
```

## 📈 Growth & Scaling

### As Your Newsletter Grows

**At 10 issues:**
- Consider adding search/filter
- Group by year or topic
- Add pagination

**At 20 issues:**
- Consider a CMS integration (Contentful, Sanity)
- Add categories/tags
- Build an archive page

**At 50+ issues:**
- Implement full-text search
- Add newsletter signup
- Consider adding previews/excerpts
- Build a recommendation system

## 🤝 Team Collaboration

### Multiple Editors

If multiple people will update the site:

1. **Use branches**
   ```bash
   git checkout -b add-issue-4
   # Make changes
   git push origin add-issue-4
   # Create PR on GitHub
   ```

2. **Document who's responsible**
   - Create `CONTRIBUTING.md`
   - List who can add issues
   - Define approval process

3. **Set up staging environment**
   - Use Vercel preview deployments
   - Test changes before merging to main

## 📞 Getting Help

### Before Asking for Help

1. Check this maintenance guide
2. Review error messages carefully
3. Search the error on Google
4. Check Next.js documentation

### When Asking for Help

Provide:
- What you were trying to do
- What you expected to happen
- What actually happened
- Full error message (copy/paste, not screenshot)
- What you've already tried

### Resources

- **Next.js Discord**: [nextjs.org/discord](https://nextjs.org/discord)
- **Stack Overflow**: Tag with `next.js`, `tailwindcss`, `typescript`
- **GitHub Issues**: For bugs in dependencies

## ✅ Monthly Checklist

Copy this checklist for your monthly maintenance:

```
Monthly Maintenance - [Month Year]
[ ] Check all Figma links still work
[ ] Test site on mobile device
[ ] Run npm audit for security
[ ] Check Vercel/Netlify for errors
[ ] Review analytics (if enabled)
[ ] Verify all images load properly
[ ] Test site speed with Lighthouse
[ ] Update dependencies if needed
[ ] Backup images to external drive
[ ] Check for broken links
```

## 🎯 Long-term Considerations

### After 1 Year

Consider:
- Redesigning to refresh the look
- Adding more interactive features
- Integrating with email newsletter
- Adding user comments/feedback
- Building an RSS feed
- Adding newsletter previews

### Migrating to a CMS

When manual updates become tedious:
- **Contentful**: Great for teams
- **Sanity**: Developer-friendly
- **Notion**: Simple and visual
- **Airtable**: Spreadsheet-like interface

This keeps the same frontend, just changes how you add content.

---

**Remember:** Your site is built on solid, modern tech. It should require minimal maintenance and just work. This guide is here for when you need it!
