# MUI Components Reference

This document provides a comprehensive reference of Material-UI components available in this project, organized by category. Each section links to detailed documentation files with examples and best practices.

## Quick Navigation

- [Layout Components](#layout-components) - Container, Box, Grid, Stack
- [Typography](#typography) - Text display and formatting
- [Buttons](#buttons) - Button variants and icon buttons
- [Form Components](#form-components) - TextField, Select, Checkbox, Radio, etc.
- [Navigation](#navigation) - AppBar, Drawer, Tabs, Breadcrumbs
- [Data Display](#data-display) - Card, Table, List, Chip, Avatar
- [Feedback](#feedback) - Alert, Snackbar, Dialog, Progress indicators
- [Surfaces](#surfaces) - Paper, Accordion, Card
- [Icons](#icons) - Material Design icons

---

## Layout Components

**Purpose**: Structure and organize page content with responsive layouts.

**Main Components**:
- `Container` - Centers content with max-width constraints
- `Box` - Generic container with powerful sx prop
- `Grid` - 12-column responsive grid system
- `Stack` - Flex container for spacing items

📖 **[Detailed Documentation](./docs/components/layout.md)**

**Quick Example**:
```typescript
'use client';
import { Container, Box, Stack } from '@mui/material';

<Container maxWidth="lg">
  <Stack spacing={2}>
    <Box sx={{ p: 2, bgcolor: 'primary.light' }}>Item 1</Box>
    <Box sx={{ p: 2, bgcolor: 'secondary.light' }}>Item 2</Box>
  </Stack>
</Container>
```

---

## Typography

**Purpose**: Display text with consistent styling and semantic HTML.

**Main Components**:
- `Typography` - All text content (h1-h6, body, captions, etc.)

**Variants**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `button`, `caption`, `overline`

📖 **[Detailed Documentation](./docs/components/typography.md)**

**Quick Example**:
```typescript
'use client';
import { Typography } from '@mui/material';

<Typography variant="h2" component="h1" gutterBottom>
  Page Title
</Typography>
<Typography variant="body1" color="text.secondary">
  Body text with secondary color
</Typography>
```

---

## Buttons

**Purpose**: Trigger actions and navigation.

**Main Components**:
- `Button` - Standard buttons with variants
- `IconButton` - Buttons with only icons
- `ButtonGroup` - Group related buttons
- `Fab` - Floating action button
- `LoadingButton` - Button with loading state (requires @mui/lab)

📖 **[Detailed Documentation](./docs/components/buttons.md)**

**Quick Example**:
```typescript
'use client';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

<Button variant="contained" color="primary">
  Primary Action
</Button>
<IconButton color="error">
  <DeleteIcon />
</IconButton>
```

---

## Form Components

**Purpose**: Collect user input with validation and accessibility.

**Main Components**:
- `TextField` - Text input with label and helper text
- `Select` - Dropdown selection
- `Checkbox` - Multiple selection
- `Radio` / `RadioGroup` - Single selection from options
- `Switch` - Toggle on/off
- `Slider` - Select value from range
- `Autocomplete` - Searchable dropdown with suggestions
- `FormControl`, `FormLabel`, `FormHelperText` - Form structure

📖 **[Detailed Documentation](./docs/components/forms.md)**

**Quick Example**:
```typescript
'use client';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

<TextField
  label="Email"
  type="email"
  fullWidth
  required
/>
<Select value={value} onChange={handleChange}>
  <MenuItem value={1}>Option 1</MenuItem>
  <MenuItem value={2}>Option 2</MenuItem>
</Select>
<FormControlLabel
  control={<Checkbox />}
  label="Accept terms"
/>
```

---

## Navigation

**Purpose**: Help users navigate through the application.

**Main Components**:
- `AppBar` - Top application bar
- `Toolbar` - Container for AppBar content
- `Drawer` - Side navigation panel
- `Tabs` / `Tab` - Tabbed navigation
- `BottomNavigation` - Mobile bottom navigation
- `Breadcrumbs` - Show navigation hierarchy
- `Link` - Styled links
- `Menu` / `MenuItem` - Dropdown menus
- `Pagination` - Page navigation

📖 **[Detailed Documentation](./docs/components/navigation.md)**

**Quick Example**:
```typescript
'use client';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">My App</Typography>
  </Toolbar>
  <Tabs value={value} onChange={handleChange}>
    <Tab label="Home" />
    <Tab label="About" />
    <Tab label="Contact" />
  </Tabs>
</AppBar>
```

---

## Data Display

**Purpose**: Present data in organized, readable formats.

**Main Components**:
- `Card` / `CardContent` / `CardActions` - Contained content cards
- `Table` / `TableHead` / `TableBody` / `TableRow` / `TableCell` - Data tables
- `List` / `ListItem` / `ListItemText` - Vertical lists
- `Chip` - Compact labeled elements
- `Avatar` - User profile images
- `Badge` - Notification badges
- `Tooltip` - Contextual information on hover
- `Divider` - Visual separators

📖 **[Detailed Documentation](./docs/components/data-display.md)**

**Quick Example**:
```typescript
'use client';
import { Card, CardContent, Typography, Chip, Avatar } from '@mui/material';

<Card>
  <CardContent>
    <Avatar>JD</Avatar>
    <Typography variant="h5">John Doe</Typography>
    <Chip label="Active" color="success" size="small" />
  </CardContent>
</Card>
```

---

## Feedback

**Purpose**: Provide feedback to users about actions and states.

**Main Components**:
- `Alert` - Important messages with severity levels
- `Snackbar` - Brief notifications
- `Dialog` / `DialogTitle` / `DialogContent` / `DialogActions` - Modal dialogs
- `CircularProgress` - Loading spinner
- `LinearProgress` - Loading bar
- `Backdrop` - Overlay background
- `Skeleton` - Loading placeholders

📖 **[Detailed Documentation](./docs/components/feedback.md)**

**Quick Example**:
```typescript
'use client';
import { Alert, Dialog, DialogTitle, DialogContent, CircularProgress } from '@mui/material';

<Alert severity="success">Operation completed successfully!</Alert>

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Confirm Action</DialogTitle>
  <DialogContent>Are you sure?</DialogContent>
</Dialog>

<CircularProgress />
```

---

## Surfaces

**Purpose**: Container components that provide depth and structure.

**Main Components**:
- `Paper` - Elevated surface
- `Accordion` / `AccordionSummary` / `AccordionDetails` - Expandable panels
- `Card` - Content container (also in Data Display)
- `AppBar` - App surface (also in Navigation)

📖 **[Detailed Documentation](./docs/components/surfaces.md)**

**Quick Example**:
```typescript
'use client';
import { Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

<Paper elevation={3} sx={{ p: 2 }}>
  <Typography>Elevated content</Typography>
</Paper>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Section Title</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>Section content</Typography>
  </AccordionDetails>
</Accordion>
```

---

## Icons

**Purpose**: Visual symbols for actions and concepts.

**Package**: `@mui/icons-material` (install separately)

**Installation**:
```bash
pnpm add @mui/icons-material
```

📖 **[Detailed Documentation](./docs/components/icons.md)**

**Quick Example**:
```typescript
'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

<DeleteIcon />
<AddIcon color="primary" fontSize="large" />
<MenuIcon sx={{ color: 'text.secondary' }} />
```

**Icon Search**: [MUI Icon Search](https://mui.com/material-ui/material-icons/)

---

## Component Categories Summary

| Category | Count | Primary Use Case |
|----------|-------|------------------|
| Layout | 4+ | Page structure and responsive design |
| Typography | 1 | Text display with variants |
| Buttons | 4+ | User actions and interactions |
| Forms | 10+ | Data input and collection |
| Navigation | 8+ | App navigation and routing |
| Data Display | 10+ | Presenting information |
| Feedback | 7+ | User feedback and loading states |
| Surfaces | 4+ | Visual hierarchy and depth |
| Icons | 2000+ | Visual communication |

---

## General Usage Notes

### All Components Require 'use client'
Since MUI components are client components, any file using them must include:
```typescript
'use client';
```

### Common Props Across Components

Most MUI components support:
- `sx` - Inline styling with theme access
- `className` - CSS class name
- `style` - Inline styles (prefer sx)
- `id` - Element ID
- `ref` - React ref

### Responsive Design
Many components support responsive values:
```typescript
<Box sx={{ width: { xs: '100%', md: '50%' } }} />
```

### Theme Integration
Components automatically use theme values:
```typescript
<Button color="primary" /> // Uses theme.palette.primary
```

---

## Next Steps

1. **Browse component docs** - Click on documentation links above
2. **Check official MUI docs** - [mui.com](https://mui.com/material-ui/all-components/)
3. **Review theme configuration** - See `src/theme.ts`
4. **Read usage instructions** - See [INSTRUCTIONS.md](./INSTRUCTIONS.md)

---

## Additional Resources

- [MUI Component API Reference](https://mui.com/material-ui/api/button/)
- [MUI All Components List](https://mui.com/material-ui/all-components/)
- [MUI Examples & Templates](https://mui.com/material-ui/getting-started/templates/)
- [Material Design Guidelines](https://m3.material.io/)
