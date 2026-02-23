# Layout Components

Layout components help structure and organize page content with responsive, flexible layouts.

## Container

**Purpose**: Centers content horizontally and applies max-width constraints.

**Import**:
```typescript
import { Container } from '@mui/material';
```

**Props**:
- `maxWidth`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | false` - Maximum width breakpoint
- `disableGutters`: `boolean` - Remove default horizontal padding
- `fixed`: `boolean` - Use fixed width instead of fluid

**Examples**:

```typescript
'use client';
import { Container, Typography } from '@mui/material';

// Standard centered container
export default function Page() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Centered Content</Typography>
    </Container>
  );
}

// Full width container
<Container maxWidth={false}>
  {/* Full width content */}
</Container>

// Fixed width container without padding
<Container maxWidth="md" disableGutters fixed>
  {/* Content */}
</Container>
```

**Breakpoint Widths**:
- `xs`: 444px
- `sm`: 600px
- `md`: 900px
- `lg`: 1200px
- `xl`: 1536px

---

## Box

**Purpose**: Generic container component with powerful sx prop for styling. The most flexible layout component.

**Import**:
```typescript
import { Box } from '@mui/material';
```

**Props**:
- `component`: Change the rendered element (default: `'div'`)
- `sx`: Theme-aware styling object

**Examples**:

```typescript
'use client';
import { Box } from '@mui/material';

// Basic box with padding and background
<Box sx={{ p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
  Content
</Box>

// Flex container
<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>

// Responsive box
<Box
  sx={{
    width: { xs: '100%', md: '50%' },
    p: { xs: 1, md: 2 },
    bgcolor: 'background.paper',
  }}
>
  Responsive content
</Box>

// Box as different element
<Box component="section" sx={{ mb: 4 }}>
  <h2>Section Title</h2>
</Box>
```

**Common sx Properties**:
```typescript
{
  // Spacing
  p: 2,           // padding
  m: 1,           // margin
  px: 3,          // padding left & right
  py: 2,          // padding top & bottom
  mt: 1,          // margin top
  
  // Display & Layout
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  
  // Size
  width: '100%',
  height: 400,
  maxWidth: 600,
  
  // Colors (theme-aware)
  bgcolor: 'primary.main',
  color: 'text.primary',
  
  // Borders
  border: 1,
  borderColor: 'divider',
  borderRadius: 2,
  
  // Effects
  boxShadow: 3,
  opacity: 0.8,
}
```

---

## Grid

**Purpose**: Responsive 12-column grid system for complex layouts.

**Import**:
```typescript
import { Grid } from '@mui/material';
```

**Props**:
- `container`: Mark as grid container
- `item`: Mark as grid item
- `spacing`: Spacing between items (0-10)
- `xs`, `sm`, `md`, `lg`, `xl`: Column width at each breakpoint (1-12)

**Examples**:

```typescript
'use client';
import { Grid, Paper, Typography } from '@mui/material';

// Basic grid layout
export default function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography>Left Column</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography>Right Column</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

// Three columns on desktop, stack on mobile
<Grid container spacing={3}>
  <Grid item xs={12} md={4}>Column 1</Grid>
  <Grid item xs={12} md={4}>Column 2</Grid>
  <Grid item xs={12} md={4}>Column 3</Grid>
</Grid>

// Nested grids
<Grid container spacing={2}>
  <Grid item xs={12} md={8}>
    <Grid container spacing={1}>
      <Grid item xs={6}>Nested 1</Grid>
      <Grid item xs={6}>Nested 2</Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={4}>
    Sidebar
  </Grid>
</Grid>
```

**Common Patterns**:

```typescript
// Equal width columns
<Grid container spacing={2}>
  {[1, 2, 3, 4].map((item) => (
    <Grid item xs={12} sm={6} md={3} key={item}>
      Card {item}
    </Grid>
  ))}
</Grid>

// Hero + sidebar layout
<Grid container spacing={3}>
  <Grid item xs={12} md={8}>Main content</Grid>
  <Grid item xs={12} md={4}>Sidebar</Grid>
</Grid>
```

---

## Stack

**Purpose**: Flex container that makes it easy to space items vertically or horizontally.

**Import**:
```typescript
import { Stack } from '@mui/material';
```

**Props**:
- `direction`: `'row' | 'column'` - Stack direction
- `spacing`: Spacing between items (number or responsive object)
- `divider`: Element to place between items
- `alignItems`, `justifyContent`: Flex alignment

**Examples**:

```typescript
'use client';
import { Stack, Button, Divider } from '@mui/material';

// Vertical stack (default)
<Stack spacing={2}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>

// Horizontal stack
<Stack direction="row" spacing={1}>
  <Button variant="contained">Save</Button>
  <Button variant="outlined">Cancel</Button>
</Stack>

// Stack with divider
<Stack spacing={2} divider={<Divider />}>
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</Stack>

// Responsive stack
<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  alignItems="center"
>
  <Button>Item 1</Button>
  <Button>Item 2</Button>
</Stack>

// Stack with alignment
<Stack
  direction="row"
  spacing={2}
  justifyContent="space-between"
  alignItems="center"
>
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Stack>
```

**When to Use Stack vs Grid vs Box**:

- **Stack**: Linear layouts with consistent spacing (form fields, button groups, lists)
- **Grid**: Complex multi-column layouts that need to respond to breakpoints
- **Box**: Single container with custom styling or when you need full control

---

## Complete Layout Example

```typescript
'use client';
import { Container, Box, Grid, Stack, Typography, Button, Paper } from '@mui/material';

export default function LayoutExample() {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ py: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">Dashboard</Typography>
          <Button variant="contained">Add New</Button>
        </Stack>
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Main Column */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Main Content
              </Typography>
              <Typography variant="body1">
                This is the primary content area.
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Secondary Content
              </Typography>
              <Typography variant="body1">
                Additional information goes here.
              </Typography>
            </Paper>
          </Stack>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Quick Actions</Typography>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Button fullWidth variant="outlined">Action 1</Button>
                <Button fullWidth variant="outlined">Action 2</Button>
              </Stack>
            </Paper>
            
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Info Panel</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Additional information
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
```

---

## Best Practices

1. **Use Container for page-level layouts** - Provides consistent max-width
2. **Use Grid for complex multi-column layouts** - Especially when you need responsive breakpoints
3. **Use Stack for simple linear layouts** - Easier than Flexbox with Box
4. **Use Box for custom styling** - When you need full control with sx prop
5. **Combine components** - Container > Grid > Stack > Box is a common pattern
6. **Be responsive** - Always consider mobile, tablet, and desktop layouts
7. **Use theme spacing** - Prefer `spacing={2}` over hardcoded pixels

---

[← Back to Components](../../COMPONENTS.md)
