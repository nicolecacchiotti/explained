# explained Newsletter Landing Page

A modern, minimal dark-themed landing page to showcase past issues of the explained design newsletter.

Built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

**New here? Start with [QUICKSTART.md](QUICKSTART.md)** for step-by-step instructions!

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Adding Newsletter Issues

### 1. Add Images

Place your newsletter screenshot images in `public/images/`:
- `issue-1.png` - Cursor issue
- `issue-2.png` - Fuel iX issue  
- `issue-3.png` - Future issues...

**Recommended image specs:**
- Format: PNG or JPG
- Aspect ratio: 4:3 (e.g., 1200x900px)
- Size: Under 500KB for optimal loading

### 2. Update Issue Data

Edit `data/issues.ts` to add/modify newsletter issues:

```typescript
{
  id: 1,
  title: "explained",
  volume: "Issue 1",
  date: "September 2025",
  featuredTool: "Cursor",
  description: "Your description here...",
  imageUrl: "/images/issue-1.png",
  figmaLink: "https://www.figma.com/proto/your-link",
}
```

### 3. Update Figma Links

Replace the placeholder Figma links in `data/issues.ts` with your actual prototype links.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site will be live in ~1 minute!

### Alternative: Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to [netlify.com/drop](https://netlify.com/drop)

## Customization

### Colors

The site uses a dark minimal theme with lime accent color. To customize:

- **Background**: `bg-[#0a0a0a]` in `app/page.tsx`
- **Accent color**: `text-lime-400` (change to `pink`, `purple`, `blue`, etc.)
- **Card hover effects**: Modify `hover:` classes in the card component

### Typography

The logo uses the "explained" branding with italic "ai". To modify:

```tsx
expl<span className="italic">ai</span>ned
```

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment (recommended)

## Project Structure

```
explained-newsletter/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── data/
│   └── issues.ts         # Newsletter issue data
├── types/
│   └── newsletter.ts     # TypeScript types
└── public/
    └── images/           # Newsletter screenshots
```

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[Next.js Docs](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS](https://tailwindcss.com)** - Styling documentation

## 🎨 Design Features

- ✨ Dark minimal aesthetic (inspired by Cursor/Framer)
- 🎯 Responsive grid layout (1-3 columns based on screen size)
- 🖼️ Image hover effects and smooth transitions
- 🔗 Direct links to Figma prototypes
- 📱 Mobile-friendly and touch-optimized
- ⚡ Lightning-fast performance with Next.js
- 🎭 Graceful image loading with fallbacks

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with SSR |
| TypeScript | Type-safe code |
| Tailwind CSS | Utility-first styling |
| React 19 | UI components |
| Vercel | Deployment platform |

## Support

For questions or issues, reach out to the design team.
