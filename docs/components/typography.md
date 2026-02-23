# Typography Component

The Typography component displays text with consistent styling and proper semantic HTML.

## Overview

**Import**:
```typescript
import { Typography } from '@mui/material';
```

**Purpose**: 
- Display all text content with theme-consistent styling
- Apply semantic HTML tags (h1-h6, p, span, etc.)
- Support responsive font sizes
- Provide text color, alignment, and decoration options

---

## Variants

### Headings

```typescript
'use client';
import { Typography } from '@mui/material';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
```

**Default Styles**:
- `h1`: 96px, light weight
- `h2`: 60px, light weight
- `h3`: 48px, regular weight
- `h4`: 34px, regular weight
- `h5`: 24px, regular weight
- `h6`: 20px, medium weight

### Body Text

```typescript
<Typography variant="body1">
  Primary body text. Used for most paragraph content.
</Typography>

<Typography variant="body2">
  Secondary body text. Slightly smaller, used for supporting content.
</Typography>
```

### Subtitles

```typescript
<Typography variant="subtitle1">
  Subtitle 1 - Larger subtitle
</Typography>

<Typography variant="subtitle2">
  Subtitle 2 - Smaller subtitle
</Typography>
```

### Other Variants

```typescript
<Typography variant="button">
  Button text
</Typography>

<Typography variant="caption">
  Caption text - small helper text
</Typography>

<Typography variant="overline">
  Overline text
</Typography>
```

---

## Props

### Core Props

```typescript
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
            'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 
            'button' | 'caption' | 'overline';
  component?: React.ElementType;  // HTML element to render
  color?: string;                  // Text color
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;          // Add margin-bottom
  noWrap?: boolean;                // Prevent text wrapping
  paragraph?: boolean;             // Apply paragraph margins
  sx?: object;                     // Custom styles
}
```

### Examples

```typescript
'use client';
import { Typography } from '@mui/material';

// Change HTML element while keeping h2 styling
<Typography variant="h2" component="h1">
  Page Title (renders as h1, styled as h2)
</Typography>

// Text colors
<Typography color="primary">Primary color text</Typography>
<Typography color="secondary">Secondary color text</Typography>
<Typography color="error">Error color text</Typography>
<Typography color="text.primary">Default text color</Typography>
<Typography color="text.secondary">Secondary text color</Typography>
<Typography color="text.disabled">Disabled text color</Typography>

// Alignment
<Typography align="center">Centered text</Typography>
<Typography align="right">Right-aligned text</Typography>

// Add bottom margin
<Typography variant="h4" gutterBottom>
  Heading with margin below
</Typography>

// Prevent wrapping
<Typography noWrap>
  This very long text will be truncated with ellipsis instead of wrapping to next line
</Typography>

// Paragraph margins
<Typography paragraph>
  This paragraph has proper spacing above and below.
</Typography>
```

---

## Common Patterns

### Page Header

```typescript
'use client';
import { Box, Typography } from '@mui/material';

export default function PageHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Page Title
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        A brief description of this page
      </Typography>
    </Box>
  );
}
```

### Card Content

```typescript
'use client';
import { Card, CardContent, Typography } from '@mui/material';

export default function InfoCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Supporting text and description for this card.
        </Typography>
        <Typography variant="caption" display="block">
          Last updated: 2 hours ago
        </Typography>
      </CardContent>
    </Card>
  );
}
```

### Text with Custom Styling

```typescript
'use client';
import { Typography } from '@mui/material';

<Typography
  variant="h4"
  sx={{
    fontWeight: 'bold',
    color: 'primary.main',
    textTransform: 'uppercase',
    letterSpacing: 2,
    mb: 2,
  }}
>
  Custom Styled Heading
</Typography>

// Gradient text
<Typography
  variant="h2"
  sx={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Gradient Text
</Typography>
```

### Responsive Typography

```typescript
'use client';
import { Typography } from '@mui/material';

// Responsive font size
<Typography
  variant="h3"
  sx={{
    fontSize: {
      xs: '1.5rem',  // 24px on mobile
      sm: '2rem',    // 32px on tablet
      md: '3rem',    // 48px on desktop
    },
  }}
>
  Responsive Heading
</Typography>

// Responsive alignment
<Typography
  sx={{
    textAlign: { xs: 'center', md: 'left' },
  }}
>
  Centered on mobile, left-aligned on desktop
</Typography>
```

### Truncated Text

```typescript
'use client';
import { Typography } from '@mui/material';

// Single line truncation
<Typography noWrap sx={{ maxWidth: 300 }}>
  This is a very long text that will be truncated with an ellipsis when it exceeds the maximum width
</Typography>

// Multi-line truncation
<Typography
  sx={{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  }}
>
  This text will be truncated after 3 lines with an ellipsis at the end. 
  Any content beyond three lines will be hidden.
</Typography>
```

---

## Semantic HTML Best Practices

### Proper Heading Hierarchy

```typescript
'use client';
import { Typography } from '@mui/material';

// ✅ Good: Proper heading hierarchy
<article>
  <Typography variant="h3" component="h1">
    Article Title (Main heading, styled as h3)
  </Typography>
  <Typography variant="h5" component="h2">
    Section Heading
  </Typography>
  <Typography variant="h6" component="h3">
    Subsection Heading
  </Typography>
</article>

// ❌ Bad: Skipping heading levels
<article>
  <Typography variant="h2" component="h1">Title</Typography>
  <Typography variant="h6" component="h4">Section</Typography> {/* Skipped h2, h3 */}
</article>
```

### When to Override Component

```typescript
// Page title: h1 element, but h2 styling
<Typography variant="h2" component="h1">
  Welcome to My Site
</Typography>

// Dialog title: div element for accessibility
<Typography variant="h6" component="div">
  Dialog Title
</Typography>

// Button-like text that isn't actually a button
<Typography variant="button" component="span">
  Label Text
</Typography>
```

---

## Theme Customization

To customize typography globally, edit `src/theme.ts`:

```typescript
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
    
    // Customize specific variants
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    
    // Add custom variant
    poster: {
      fontSize: '6rem',
      fontWeight: 900,
      color: 'primary.main',
    },
  },
});
```

---

## Accessibility

1. **Use proper semantic HTML** - Set `component` prop for correct heading levels
2. **Maintain heading hierarchy** - Don't skip heading levels (h1 → h2 → h3)
3. **Use sufficient color contrast** - Ensure text is readable
4. **Avoid text-only communication** - Don't rely solely on color for meaning
5. **Support text scaling** - Use relative units (rem) not fixed pixels

---

## Best Practices

1. **Always use Typography for text** - Don't use plain HTML text elements
2. **Match variant to semantic meaning** - Use heading variants for headings
3. **Use gutterBottom for spacing** - Instead of manual margin
4. **Leverage theme colors** - Use `color="primary"` instead of hardcoded values
5. **Be consistent** - Use the same variants for similar content across the app
6. **Consider mobile** - Use responsive font sizes for better mobile experience

---

[← Back to Components](../../COMPONENTS.md)
