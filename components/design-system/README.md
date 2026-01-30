# Design System Components

A collection of reusable, composable components for building consistent card-based interfaces.

## Card Component System

The card system is built with composable components that can be mixed and matched to create different card variations.

### Components

- **Card** - The container component
- **CardImage** - Image container with aspect ratio control
- **CardBadge** - Floating badge/tag element
- **CardContent** - Content wrapper with padding
- **CardMeta** - Metadata display (date, category, etc.)
- **CardTitle** - Heading component
- **CardDescription** - Body text with line clamping
- **CardAction** - Call-to-action link/button

### Basic Usage

```tsx
import {
  Card,
  CardImage,
  CardBadge,
  CardContent,
  CardMeta,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/design-system";

function ExampleCard() {
  return (
    <Card href="#" variant="interactive">
      <CardImage src="/image.jpg" alt="Description">
        <CardBadge position="top-right">Featured</CardBadge>
      </CardImage>
      
      <CardContent>
        <CardMeta items={["Issue 1", "January 2026"]} />
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description that will be clamped to 3 lines by default.
        </CardDescription>
        <CardAction>Read More</CardAction>
      </CardContent>
    </Card>
  );
}
```

### Props

#### Card
- `href?: string` - Makes the card a link
- `variant?: "default" | "interactive"` - Styling variant (interactive adds hover scale)
- `className?: string` - Additional CSS classes

#### CardImage
- `src: string` - Image source URL
- `alt: string` - Alt text
- `aspectRatio?: "4/3" | "16/9" | "1/1"` - Image aspect ratio
- `placeholder?: ReactNode` - Fallback content when image fails
- `children?: ReactNode` - Overlay content (badges, etc.)

#### CardBadge
- `children: ReactNode` - Badge content
- `position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"` - Badge position
- `variant?: "default" | "glass"` - Badge style

#### CardContent
- `children: ReactNode` - Content
- `padding?: "small" | "medium" | "large"` - Padding size

#### CardMeta
- `items: string[]` - Array of metadata items
- `separator?: string` - Separator between items (default: "•")

#### CardTitle
- `children: ReactNode` - Title text
- `as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` - HTML heading tag
- `size?: "small" | "medium" | "large"` - Text size

#### CardDescription
- `children: ReactNode` - Description text
- `clamp?: number` - Number of lines to clamp (default: 3)

#### CardAction
- `children: ReactNode` - Action text
- `icon?: ReactNode` - Custom icon (defaults to right arrow)

### Examples

#### Newsletter Card (Current Implementation)

```tsx
<Card href={issue.figmaLink} variant="interactive" target="_blank" rel="noopener noreferrer">
  <CardImage src={issue.imageUrl} alt={issue.title}>
    <CardBadge>Featured Tool</CardBadge>
  </CardImage>
  
  <CardContent>
    <CardMeta items={[issue.volume, issue.date]} />
    <CardTitle>{issue.featuredTool}</CardTitle>
    <CardDescription>{issue.description}</CardDescription>
    <CardAction>Read Issue</CardAction>
  </CardContent>
</Card>
```

#### Simple Link Card

```tsx
<Card href="/link" variant="default">
  <CardContent>
    <CardTitle size="small">Card Title</CardTitle>
    <CardDescription clamp={2}>
      Short description here.
    </CardDescription>
    <CardAction>Learn More</CardAction>
  </CardContent>
</Card>
```

#### Feature Card (No Image)

```tsx
<Card variant="default">
  <CardContent padding="large">
    <CardTitle>Feature Name</CardTitle>
    <CardDescription>
      Description of the feature and its benefits.
    </CardDescription>
  </CardContent>
</Card>
```

### Design Tokens

The components use the following design tokens:

**Colors:**
- Background: `zinc-900/50` with backdrop blur
- Border: `white/10` (hover: `white/20`)
- Text: `white`, `zinc-400`, `white/70`
- Badge: `black/60` with `white/20` border

**Spacing:**
- Card border radius: `rounded-2xl` (16px)
- Padding: small (16px), medium (24px), large (32px)
- Content gaps: 8px (gap-2)

**Typography:**
- Meta: `text-sm` (14px)
- Title: small (18px), medium (20px), large (24px)
- Description: `text-sm` (14px)
- Action: `text-sm` (14px)

**Effects:**
- Transition: `duration-300`
- Hover scale: `scale-[1.02]` (interactive variant)
- Image zoom: `scale-105` on hover
- Backdrop blur: `backdrop-blur-sm`

### Accessibility

- All interactive cards use semantic HTML (`<a>` tags for links)
- Images include alt text
- Proper heading hierarchy with `as` prop on CardTitle
- Color contrast meets WCAG AA standards

### Best Practices

1. **Always provide alt text** for CardImage
2. **Use semantic heading levels** with CardTitle `as` prop
3. **Keep descriptions concise** - use line clamping
4. **External links** should include `target="_blank"` and `rel="noopener noreferrer"`
5. **Consistent spacing** - use predefined padding sizes
6. **Hover states** - use `variant="interactive"` for clickable cards
