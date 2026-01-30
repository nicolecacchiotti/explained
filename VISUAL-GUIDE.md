# 🎨 Visual Design Guide

## Color Palette

The site uses a dark, minimal aesthetic inspired by Cursor and Framer branding:

### Background Colors
- **Primary Background**: `#0a0a0a` (Deep black)
- **Card Background**: `rgba(24, 24, 27, 0.5)` (Translucent dark gray)
- **Border**: `rgba(255, 255, 255, 0.1)` (Subtle white border)

### Text Colors
- **Headings**: `#ffffff` (Pure white)
- **Body Text**: `#a1a1aa` (Zinc-400)
- **Muted Text**: `#71717a` (Zinc-500)

### Accent Colors
- **Primary Accent**: `#a3e635` (Lime-400) - Used for CTAs and badges
- **Hover Accent**: `#bef264` (Lime-300)

### Gradients
Newsletter cards use subtle gradients:
- Purple/Pink/Blue gradient overlays on image containers
- Bottom-to-top gradient to fade images into card content

## Layout Structure

```
┌─────────────────────────────────────────────┐
│  Header                                      │
│  ┌──────────────────────────────────────┐  │
│  │ explained                            │  │
│  │ A design newsletter exploring AI     │  │
│  └──────────────────────────────────────┘  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Main Content                                │
│                                              │
│  Past Issues                                 │
│  Explore our collection of AI tool deep-dives│
│                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ Card 1  │  │ Card 2  │  │ Card 3  │    │
│  │         │  │         │  │         │    │
│  │ [Image] │  │ [Image] │  │ [Image] │    │
│  │         │  │         │  │         │    │
│  │ Cursor  │  │ Fuel iX │  │ Coming  │    │
│  └─────────┘  └─────────┘  └─────────┘    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Footer                                      │
│  explained • Published bimonthly • 2026     │
└─────────────────────────────────────────────┘
```

## Newsletter Card Anatomy

Each card has:

```
┌──────────────────────────────┐
│ [Newsletter Screenshot]       │ ← 4:3 aspect ratio
│                               │
│           [Featured Tool] ←───┼── Lime badge
│                               │
├───────────────────────────────┤
│ Issue 1 • September 2025      │ ← Meta info
│                               │
│ Cursor                        │ ← Tool name (H3)
│                               │
│ Description of the issue...   │ ← 3-line clamp
│                               │
│ Read Issue →                  │ ← CTA with arrow
└──────────────────────────────┘
```

## Interaction States

### Hover Effects
- **Card**: Scales up 2% (`scale-[1.02]`)
- **Border**: Brightens to 20% opacity
- **Background**: Increases opacity
- **Image**: Scales up 5% (zoom effect)
- **Arrow**: Translates right 4px

### Responsive Breakpoints
- **Mobile (< 768px)**: 1 column
- **Tablet (768px - 1024px)**: 2 columns
- **Desktop (> 1024px)**: 3 columns

## Typography

### Font Family
System font stack for optimal performance:
```css
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

### Font Sizes
- **Page Title**: `3xl` (30px)
- **Section Heading**: `2xl` (24px)
- **Card Heading**: `xl` (20px)
- **Body Text**: `sm` (14px)
- **Meta Text**: `sm` (14px)

### Font Weights
- **Bold**: 700 (headings)
- **Semibold**: 600 (card titles)
- **Medium**: 500 (CTAs, badges)
- **Regular**: 400 (body text)

## Spacing & Sizing

### Container
- **Max Width**: `1280px` (7xl)
- **Horizontal Padding**: `24px` (6)
- **Vertical Padding**: `64px` (16)

### Card Spacing
- **Grid Gap**: `32px` (8)
- **Card Padding**: `24px` (6)
- **Content Gap**: `8px` (2)

### Border Radius
- **Cards**: `16px` (2xl) - modern, soft corners
- **Badges**: `9999px` (full) - pill shape

## Image Guidelines

### Aspect Ratio
All newsletter screenshots should be **4:3** for consistency:
- 1200x900px (recommended)
- 1600x1200px (high-res displays)
- 800x600px (minimum)

### File Format
- **PNG**: Best for screenshots with text
- **JPG**: Alternative if file size is too large

### File Size
- Target: < 300KB per image
- Maximum: 500KB per image
- Use image compression tools like TinyPNG or Squoosh

### Screenshot Tips
1. Open Figma prototype in full screen
2. Hide Figma UI (Cmd/Ctrl + \)
3. Capture the full newsletter page
4. Crop to focus on key content
5. Ensure text is readable in thumbnail

## Accessibility

### Contrast Ratios
- White text on dark background: **16:1** (excellent)
- Zinc-400 on dark: **7:1** (good)
- Lime-400 accent: **8:1** (good)

### Interactive Elements
- All cards are keyboard accessible
- Links open in new tabs with proper `rel` attributes
- Images have descriptive alt text
- Hover states are clearly visible

## Dark Mode

The site is **dark mode only** to:
- Match your newsletter's modern aesthetic
- Reduce eye strain for users
- Make colorful newsletter images pop
- Align with design tool branding (Cursor, Framer)

No light mode toggle is needed since the audience is designers who typically prefer dark interfaces.

## Customization Examples

### Change Accent Color to Purple
Find and replace in `app/page.tsx` and `components/NewsletterCard.tsx`:
- `lime-400` → `purple-400`
- `lime-300` → `purple-300`

### Add Subtle Animation
Add to card wrapper:
```tsx
className="... animate-in fade-in duration-300"
```

### Increase Card Size
Change aspect ratio:
```tsx
className="aspect-[4/3]" → "aspect-[16/9]"
```

### Add Grain Texture
Add to background:
```tsx
<div className="fixed inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
```

## Performance

### Optimizations Included
- ✅ Next.js Image optimization
- ✅ Lazy loading for images
- ✅ Optimized font loading
- ✅ Minimal JavaScript bundle
- ✅ Static generation at build time
- ✅ Automatic code splitting

### Expected Performance
- **Lighthouse Score**: 95+ (all metrics)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: < 100KB (gzipped)

## Browser Support

Tested and working on:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android)

## Design Inspiration

This design draws inspiration from:
- **Cursor**: Dark minimal UI with vibrant accents
- **Framer**: Clean grid layouts and smooth animations
- **Linear**: Subtle borders and backdrop blur
- **Vercel**: Modern card-based layouts

The result is a professional, modern landing page that puts your newsletter content front and center while maintaining a cohesive brand aesthetic.
