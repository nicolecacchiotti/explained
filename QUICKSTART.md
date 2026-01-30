# 🚀 Quick Start Guide

Get your explained newsletter site running in 5 minutes!

## Step 1: Add Your Newsletter Images

1. Take screenshots of your newsletter issues from Figma
2. Save them as:
   - `issue-1.png` (Cursor issue)
   - `issue-2.png` (Fuel iX issue)
   - `issue-3.png` (upcoming issues)

3. Add them to `public/images/` folder

**Image Tips:**
- Recommended size: 1200x900px (4:3 ratio)
- Format: PNG or JPG
- File size: Keep under 500KB for fast loading
- Capture: Take full-page screenshots of your Figma prototypes

## Step 2: Update Figma Links

Open `data/issues.ts` and replace the placeholder links with your actual Figma prototype URLs:

```typescript
figmaLink: "https://www.figma.com/proto/YOUR-ACTUAL-LINK",
```

To get the link:
1. Open your newsletter in Figma
2. Click "Share" → "Get prototype link"
3. Copy and paste into `data/issues.ts`

## Step 3: Run Locally

```bash
cd explained-newsletter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## Step 4: Customize Content (Optional)

Edit `data/issues.ts` to update:
- Issue titles and dates
- Tool names
- Descriptions
- Add new issues as they're published

## Step 5: Deploy

When you're happy with how it looks:

```bash
# Option 1: Deploy to Vercel (Recommended)
# Push to GitHub, then import to vercel.com
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then push

# Option 2: See DEPLOYMENT.md for detailed instructions
```

## Adding Future Issues

When you publish a new newsletter issue:

1. **Add the image**: Save screenshot to `public/images/issue-4.png`

2. **Update data**: Add to `data/issues.ts`:
   ```typescript
   {
     id: 4,
     title: "explained",
     volume: "Issue 4",
     date: "March 2026",
     featuredTool: "Your Tool Name",
     description: "Your description here...",
     imageUrl: "/images/issue-4.png",
     figmaLink: "https://www.figma.com/proto/...",
   }
   ```

3. **Deploy**: Just push to GitHub if using Vercel - it auto-deploys!

## Customization Ideas

### Change the accent color
Replace `lime-400` with any Tailwind color:
- `purple-400` - Purple accent
- `pink-400` - Pink accent  
- `blue-400` - Blue accent
- `emerald-400` - Emerald accent

### Update the header
Edit the header text in `app/page.tsx`:
```tsx
<h1>Your Custom Title</h1>
<p>Your custom subtitle</p>
```

### Add your team's branding
- Update colors in Tailwind classes
- Add your logo to `public/`
- Import and display it in the header

## Need Help?

- 📖 See `README.md` for full documentation
- 🚀 See `DEPLOYMENT.md` for deployment guides
- 🐛 Check for errors in the browser console
- 💬 Ask your dev team if you get stuck!

## Common Issues

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify images are in `public/images/` folder
- Check file extension (.png vs .PNG)

**Figma links not working?**
- Make sure prototype link sharing is enabled in Figma
- Test the link in an incognito window
- Use the prototype link, not the design file link

**Site won't start?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

That's it! You're all set! 🎉
