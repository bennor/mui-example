# Navigation Components

Navigation components help users move through your application.

## AppBar

**Import**:
```typescript
import { AppBar, Toolbar } from '@mui/material';
```

**Purpose**: Top application bar for branding, navigation, and actions.

### Basic Example

```typescript
'use client';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function BasicAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
```

### Position Variants

```typescript
// Static - normal flow, scrolls with page
<AppBar position="static">

// Fixed - stays at top while scrolling
<AppBar position="fixed">

// Absolute - positioned relative to parent
<AppBar position="absolute">

// Sticky - normal flow until scroll, then fixed
<AppBar position="sticky">
```

### With Menu Items

```typescript
'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function AppBarWithMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 4 }}>
          Logo
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
```

---

## Drawer

**Import**:
```typescript
import { Drawer } from '@mui/material';
```

**Purpose**: Side navigation panel that can be permanent, persistent, or temporary.

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

// Permanent drawer (always visible)
<Drawer variant="permanent" anchor="left">
  {/* content */}
</Drawer>

// Different anchors
<Drawer anchor="left">    {/* Left side */}
<Drawer anchor="right">   {/* Right side */}
<Drawer anchor="top">     {/* Top */}
<Drawer anchor="bottom">  {/* Bottom */}
```

---

## Tabs

**Import**:
```typescript
import { Tabs, Tab } from '@mui/material';
```

**Purpose**: Organize content into separate views, showing one at a time.

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Content for Tab 1</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Content for Tab 2</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Content for Tab 3</Typography>
      </TabPanel>
    </Box>
  );
}

// Centered tabs
<Tabs value={value} onChange={handleChange} centered>
  <Tab label="One" />
  <Tab label="Two" />
</Tabs>

// Scrollable tabs
<Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
  <Tab label="Item Four" />
  <Tab label="Item Five" />
</Tabs>

// Vertical tabs
<Tabs value={value} onChange={handleChange} orientation="vertical">
  <Tab label="Item One" />
  <Tab label="Item Two" />
</Tabs>
```

---

## Menu

**Import**:
```typescript
import { Menu, MenuItem } from '@mui/material';
```

**Purpose**: Dropdown menu for additional options.

### Example

```typescript
'use client';
import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
```

---

## Breadcrumbs

**Import**:
```typescript
import { Breadcrumbs, Link, Typography } from '@mui/material';
```

**Purpose**: Show navigation hierarchy.

### Examples

```typescript
'use client';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/products">
        Products
      </Link>
      <Typography color="text.primary">Electronics</Typography>
    </Breadcrumbs>
  );
}

// With custom separator
<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
  <Link href="/">Home</Link>
  <Link href="/products">Products</Link>
  <Typography>Electronics</Typography>
</Breadcrumbs>

// With max items
<Breadcrumbs maxItems={2}>
  <Link href="/">Home</Link>
  <Link href="/catalog">Catalog</Link>
  <Link href="/products">Products</Link>
  <Link href="/electronics">Electronics</Link>
  <Typography>Laptop</Typography>
</Breadcrumbs>
```

---

## BottomNavigation

**Import**:
```typescript
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
```

**Purpose**: Mobile bottom navigation bar.

### Example

```typescript
'use client';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
```

---

## Pagination

**Import**:
```typescript
import { Pagination } from '@mui/material';
```

**Purpose**: Navigate through pages of content.

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Pagination, Stack } from '@mui/material';

export default function BasicPagination() {
  const [page, setPage] = useState(1);

  return (
    <Stack spacing={2}>
      <Pagination 
        count={10} 
        page={page} 
        onChange={(e, value) => setPage(value)} 
      />
      
      {/* Different variants */}
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      
      {/* Different sizes */}
      <Pagination count={10} size="small" />
      <Pagination count={10} size="large" />
      
      {/* Show first/last buttons */}
      <Pagination count={10} showFirstButton showLastButton />
    </Stack>
  );
}
```

---

## Complete Navigation Example

```typescript
'use client';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function CompleteNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'About', icon: <InfoIcon />, href: '/about' },
    { text: 'Contact', icon: <ContactMailIcon />, href: '/contact' },
  ];

  return (
    <>
      {/* App Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Application
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Toolbar /> {/* Spacer for fixed AppBar */}
      <Container sx={{ mt: 4 }}>
        {/* Your page content */}
      </Container>
    </>
  );
}
```

---

## Best Practices

1. **Use AppBar for primary navigation** - Should be consistent across app
2. **Drawer for mobile menus** - Better UX than dropdown menus
3. **Tabs for view switching** - When content is related
4. **Breadcrumbs for hierarchy** - Help users understand location
5. **BottomNavigation for mobile** - Easy thumb access
6. **Provide active state indicators** - Show current location
7. **Keep navigation accessible** - Keyboard navigation, aria-labels
8. **Be consistent** - Same navigation across all pages

---

[← Back to Components](../../COMPONENTS.md)
