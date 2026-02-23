# Data Display Components

Components for presenting data in organized, readable formats.

## Card

**Import**:
```typescript
import { Card, CardContent, CardActions, CardHeader, CardMedia } from '@mui/material';
```

**Purpose**: Container for related content and actions.

### Examples

```typescript
'use client';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

// Basic card
export default function BasicCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Card description and content goes here.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// Card with media
import { CardMedia } from '@mui/material';

<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="140"
    image="/image.jpg"
    alt="Description"
  />
  <CardContent>
    <Typography variant="h5">Title</Typography>
    <Typography variant="body2" color="text.secondary">
      Content
    </Typography>
  </CardContent>
</Card>

// Card with header
import { CardHeader, Avatar } from '@mui/material';

<Card>
  <CardHeader
    avatar={<Avatar>R</Avatar>}
    title="Title"
    subheader="September 14, 2024"
  />
  <CardContent>
    <Typography variant="body2">Content</Typography>
  </CardContent>
</Card>
```

---

## List

**Import**:
```typescript
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
```

**Purpose**: Vertical list of items.

### Examples

```typescript
'use client';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function BasicList() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="5 new messages" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
}

// Clickable list items
import { ListItemButton } from '@mui/material';

<List>
  <ListItemButton onClick={() => console.log('clicked')}>
    <ListItemText primary="Clickable item" />
  </ListItemButton>
</List>

// Nested list
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const [open, setOpen] = useState(false);

<List>
  <ListItemButton onClick={() => setOpen(!open)}>
    <ListItemText primary="Expand" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open}>
    <List disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Nested item" />
      </ListItemButton>
    </List>
  </Collapse>
</List>
```

---

## Table

**Import**:
```typescript
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
```

**Purpose**: Display tabular data.

### Example

```typescript
'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function BasicTable() {
  const rows = [
    { id: 1, name: 'John Doe', age: 28, role: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 32, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', age: 45, role: 'Manager' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
```

---

## Chip

**Import**:
```typescript
import { Chip } from '@mui/material';
```

**Purpose**: Compact element representing an attribute, action, or filter.

### Examples

```typescript
'use client';
import { Chip, Stack } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

export default function ChipExamples() {
  return (
    <Stack direction="row" spacing={1}>
      {/* Basic chips */}
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      
      {/* Variants */}
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      
      {/* Clickable */}
      <Chip label="Clickable" onClick={() => console.log('clicked')} />
      
      {/* Deletable */}
      <Chip label="Deletable" onDelete={() => console.log('deleted')} />
      
      {/* With icon */}
      <Chip icon={<FaceIcon />} label="With Icon" />
      
      {/* Sizes */}
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  );
}
```

---

## Avatar

**Import**:
```typescript
import { Avatar } from '@mui/material';
```

**Purpose**: Display user profile images or initials.

### Examples

```typescript
'use client';
import { Avatar, Stack } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export default function AvatarExamples() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Image avatar */}
      <Avatar alt="John Doe" src="/avatar.jpg" />
      
      {/* Letter avatar */}
      <Avatar>JD</Avatar>
      
      {/* Icon avatar */}
      <Avatar>
        <FolderIcon />
      </Avatar>
      
      {/* Different sizes */}
      <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
      <Avatar>M</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
      
      {/* Different colors */}
      <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
    </Stack>
  );
}
```

---

## Badge

**Import**:
```typescript
import { Badge } from '@mui/material';
```

**Purpose**: Display notification counts or status.

### Examples

```typescript
'use client';
import { Badge, IconButton, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function BadgeExamples() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Basic badge */}
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      
      {/* Different colors */}
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      
      {/* Max value */}
      <Badge badgeContent={100} max={99} color="primary">
        <MailIcon />
      </Badge>
      
      {/* Dot badge */}
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      
      {/* With button */}
      <IconButton>
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
}
```

---

## Tooltip

**Import**:
```typescript
import { Tooltip } from '@mui/material';
```

**Purpose**: Display contextual information on hover.

### Examples

```typescript
'use client';
import { Tooltip, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TooltipExamples() {
  return (
    <>
      {/* Basic tooltip */}
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      
      {/* Tooltip on button */}
      <Tooltip title="This will save your changes">
        <Button variant="contained">Save</Button>
      </Tooltip>
      
      {/* Different placements */}
      <Tooltip title="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      
      <Tooltip title="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
      
      {/* Arrow tooltip */}
      <Tooltip title="With arrow" arrow>
        <Button>Arrow</Button>
      </Tooltip>
    </>
  );
}
```

---

## Divider

**Import**:
```typescript
import { Divider } from '@mui/material';
```

**Purpose**: Visual separator between content.

### Examples

```typescript
'use client';
import { Box, Divider, Typography } from '@mui/material';

export default function DividerExamples() {
  return (
    <Box>
      <Typography>Section 1</Typography>
      <Divider />
      <Typography>Section 2</Typography>
      
      {/* With text */}
      <Divider>OR</Divider>
      
      {/* Vertical divider */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography>Left</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>Right</Typography>
      </Box>
      
      {/* Different variants */}
      <Divider variant="fullWidth" />
      <Divider variant="middle" />
    </Box>
  );
}
```

---

## Complete Data Display Example

```typescript
'use client';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Chip,
  Stack,
  Button,
  Tooltip,
  Badge,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            P
          </Avatar>
        }
        action={
          <Tooltip title="More options">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        }
        title="Product Name"
        subheader="Posted on September 14, 2024"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" paragraph>
          This is a detailed description of the product with all its features
          and benefits explained clearly.
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="New" color="success" size="small" />
          <Chip label="Featured" color="primary" size="small" />
          <Chip label="Sale" color="error" size="small" />
        </Stack>
        <Typography variant="h5" color="primary">
          $99.99
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Add to favorites">
          <IconButton>
            <Badge badgeContent={4} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Share">
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Button variant="contained" sx={{ ml: 'auto' }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
```

---

## Best Practices

1. **Use Card for grouped content** - Related information belongs together
2. **Add alt text to images** - For accessibility
3. **Use proper table structure** - TableHead, TableBody for screen readers
4. **Provide tooltips for icons** - Help users understand actions
5. **Use Chip for tags/categories** - Quick visual identification
6. **Badge for notifications** - Draw attention to updates
7. **List for navigation** - Easy to scan vertically
8. **Divider for visual separation** - Don't overuse

---

[← Back to Components](../../COMPONENTS.md)
