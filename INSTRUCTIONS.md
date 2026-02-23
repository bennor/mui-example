# Material-UI (MUI) Usage Instructions

This document provides comprehensive instructions for working with Material-UI in this Next.js v16 App Router project.

## Project Setup Overview

This project uses:
- **Next.js v16** with App Router
- **Material-UI v7.3.8** with Emotion styling engine
- **CSS Theme Variables** for improved SSR performance
- **Roboto Font** optimized with Next.js font loading

### Key Files
- `src/theme.ts` - Theme configuration with CSS variables enabled
- `app/layout.tsx` - Root layout with AppRouterCacheProvider and ThemeProvider
- `package.json` - Dependencies including @mui/material, @mui/material-nextjs, @emotion/*

### Documentation
- **[COMPONENTS.md](./COMPONENTS.md)** - Comprehensive component reference with detailed examples and best practices

## Design Guidelines

**Theme Configuration** (configured in `src/theme.ts`):
- **Color Mode**: Light theme only (unless explicitly requested otherwise)
- **Border Radius**: 0 (square borders for all components)

These design decisions are enforced at the theme level and apply to all MUI components automatically.

## Using MUI Components

### Basic Component Import

Import components from `@mui/material`:

```typescript
import { Button, Typography, Box, Container } from '@mui/material';
```

### Common Components

#### Layout Components
```typescript
import { Container, Box, Grid, Stack } from '@mui/material';

// Container - centers and constrains content width
<Container maxWidth="lg">
  {/* content */}
</Container>

// Box - generic container with sx prop for styling
<Box sx={{ p: 2, bgcolor: 'background.paper' }}>
  {/* content */}
</Box>

// Grid - responsive grid system
<Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    {/* content */}
  </Grid>
</Grid>

// Stack - flex container for spacing items
<Stack direction="row" spacing={2}>
  {/* items */}
</Stack>
```

#### Typography
```typescript
import { Typography } from '@mui/material';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="body1">Body text</Typography>
<Typography variant="caption">Small text</Typography>
```

#### Buttons
```typescript
import { Button, IconButton } from '@mui/material';

<Button variant="contained" color="primary">Contained</Button>
<Button variant="outlined" color="secondary">Outlined</Button>
<Button variant="text">Text Button</Button>
<Button disabled>Disabled</Button>
```

#### Forms
```typescript
import { TextField, Select, MenuItem, Checkbox, FormControl } from '@mui/material';

<TextField
  label="Name"
  variant="outlined"
  fullWidth
  value={value}
  onChange={handleChange}
/>

<Select value={selected} onChange={handleChange}>
  <MenuItem value={1}>Option 1</MenuItem>
  <MenuItem value={2}>Option 2</MenuItem>
</Select>
```

#### Cards
```typescript
import { Card, CardContent, CardActions } from '@mui/material';

<Card>
  <CardContent>
    <Typography variant="h5">Title</Typography>
    <Typography variant="body2">Content</Typography>
  </CardContent>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
```

## Styling with the sx Prop

MUI uses the `sx` prop for inline styling with theme-aware values:

```typescript
<Box
  sx={{
    p: 2,                    // padding: theme.spacing(2)
    m: 1,                    // margin: theme.spacing(1)
    bgcolor: 'primary.main', // background-color: theme.palette.primary.main
    color: 'text.primary',   // color: theme.palette.text.primary
    width: '100%',
    maxWidth: 600,
    borderRadius: 2,
    boxShadow: 3,
  }}
>
  Content
</Box>
```

### Responsive Values
```typescript
<Box
  sx={{
    width: { xs: '100%', sm: '50%', md: '33.33%' },
    fontSize: { xs: '0.875rem', md: '1rem' },
  }}
/>
```

## Theming

### Current Theme Configuration
The theme is configured in `src/theme.ts` with:
- CSS variables enabled (`cssVariables: true`)
- Roboto font family
- Default MUI color palette

### Customizing the Theme

To customize colors, typography, spacing, etc., edit `src/theme.ts`:

```typescript
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  spacing: 8, // default spacing unit
  shape: {
    borderRadius: 4,
  },
});

export default theme;
```

### Accessing Theme in Components

```typescript
import { useTheme } from '@mui/material/styles';

export default function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{ color: theme.palette.primary.main }}>
      {/* or use sx prop directly */}
      <Box sx={{ color: 'primary.main' }}>
        Theme-aware styling
      </Box>
    </Box>
  );
}
```

## Client vs Server Components

### Important Rules

1. **MUI components are client components** - any file importing MUI components must use `'use client';`

```typescript
'use client';

import { Button } from '@mui/material';

export default function MyComponent() {
  return <Button>Click me</Button>;
}
```

2. **The theme file uses 'use client'** - `src/theme.ts` already has this directive

3. **Layout files can remain server components** - The providers are already set up correctly in `app/layout.tsx`

## Common Patterns

### Creating a Custom Button Component

```typescript
'use client';

import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        ...props.sx,
      }}
      {...props}
    />
  );
}
```

### Creating a Page with MUI Components

```typescript
'use client';

import { Container, Typography, Button, Box } from '@mui/material';

export default function MyPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Page Title
        </Typography>
        <Typography variant="body1" paragraph>
          Page content goes here.
        </Typography>
        <Button variant="contained">
          Call to Action
        </Button>
      </Box>
    </Container>
  );
}
```

### Using Icons

First install icons package:
```bash
pnpm add @mui/icons-material
```

Then use:
```typescript
'use client';

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

<Button variant="contained" startIcon={<DeleteIcon />}>
  Delete
</Button>

<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
```

## Best Practices for Agents

### When Creating New Components

1. **Always add 'use client' directive** when using MUI components
2. **Import only what you need** to keep bundle size small
3. **Use TypeScript types** from MUI (e.g., `ButtonProps`, `TypographyProps`)
4. **Prefer sx prop over styled() API** for simple styling
5. **Use theme values** instead of hardcoded values (colors, spacing, etc.)

### Component Selection Guide

- **Layout**: Use `Container`, `Box`, `Stack`, `Grid`
- **Text**: Use `Typography` for all text content
- **Buttons**: Use `Button` or `IconButton`
- **Forms**: Use `TextField`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Navigation**: Use `AppBar`, `Drawer`, `Tabs`, `Breadcrumbs`
- **Feedback**: Use `Alert`, `Snackbar`, `Dialog`, `CircularProgress`
- **Data Display**: Use `Card`, `Table`, `List`, `Chip`, `Avatar`

### Responsive Design

Use breakpoint values in sx prop:
- `xs` - 0px+ (mobile)
- `sm` - 600px+ (tablet)
- `md` - 900px+ (small laptop)
- `lg` - 1200px+ (desktop)
- `xl` - 1536px+ (large desktop)

Example:
```typescript
<Box
  sx={{
    display: { xs: 'block', md: 'flex' },
    gap: { xs: 1, md: 2 },
  }}
/>
```

### Performance Tips

1. **CSS Variables are enabled** - This prevents SSR flickering and improves performance
2. **Font optimization is configured** - Roboto loads efficiently via Next.js
3. **AppRouterCacheProvider is set up** - Ensures proper CSS injection in `<head>`
4. **Use dynamic imports** for heavy components not needed on initial render:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <CircularProgress />,
});
```

## Troubleshooting

### Issue: Styles not appearing
- Ensure `'use client';` is at the top of the file
- Check that `AppRouterCacheProvider` is wrapping the app in `app/layout.tsx`

### Issue: TypeScript errors
- Install types: `@types/react` and `@types/react-dom` (already in devDependencies)
- Ensure imports are from `@mui/material` not `@material-ui/core` (old version)

### Issue: Hydration errors
- CSS variables should prevent this, but if it occurs, check that theme is consistent between server and client
- Ensure all MUI components are in client components with `'use client';`

## Additional Resources

### Project Documentation
- **[COMPONENTS.md](./COMPONENTS.md)** - Complete component reference with examples

### Official MUI Resources
- [MUI Documentation](https://mui.com/material-ui/getting-started/)
- [Component API Reference](https://mui.com/material-ui/api/button/)
- [Theming Guide](https://mui.com/material-ui/customization/theming/)
- [Next.js Integration Guide](https://mui.com/material-ui/integrations/nextjs/)

## Quick Reference

```typescript
// Common imports
import {
  // Layout
  Container, Box, Stack, Grid,
  // Typography
  Typography,
  // Buttons
  Button, IconButton,
  // Forms
  TextField, Select, MenuItem, Checkbox, Radio, Switch,
  // Feedback
  Alert, Snackbar, Dialog, CircularProgress,
  // Data Display
  Card, CardContent, CardActions, List, ListItem, Table,
  // Navigation
  AppBar, Toolbar, Drawer, Tabs, Tab,
} from '@mui/material';

// Theme utilities
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
```
