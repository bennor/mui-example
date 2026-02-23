# Icons

Material Design icons for visual communication and user interface enhancement.

## Installation

Icons are in a separate package that must be installed:

```bash
pnpm add @mui/icons-material
```

## Basic Usage

**Import**:
```typescript
import IconName from '@mui/icons-material/IconName';
```

### Examples

```typescript
'use client';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

export default function BasicIcons() {
  return (
    <>
      <HomeIcon />
      <DeleteIcon />
      <AddIcon />
      <SearchIcon />
      <SettingsIcon />
    </>
  );
}
```

---

## Icon Variants

MUI icons come in three variants:

### Filled (Default)

```typescript
import DeleteIcon from '@mui/icons-material/Delete';
<DeleteIcon />
```

### Outlined

```typescript
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
<DeleteOutlinedIcon />
```

### Rounded

```typescript
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
<DeleteRoundedIcon />
```

### Two Tone

```typescript
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
<DeleteTwoToneIcon />
```

### Sharp

```typescript
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
<DeleteSharpIcon />
```

---

## Icon Props

### Color

```typescript
'use client';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ColoredIcons() {
  return (
    <>
      <FavoriteIcon color="primary" />
      <FavoriteIcon color="secondary" />
      <FavoriteIcon color="success" />
      <FavoriteIcon color="error" />
      <FavoriteIcon color="info" />
      <FavoriteIcon color="warning" />
      <FavoriteIcon color="action" />
      <FavoriteIcon color="disabled" />
      <FavoriteIcon sx={{ color: 'pink' }} /> {/* Custom color */}
    </>
  );
}
```

### Size

```typescript
'use client';
import StarIcon from '@mui/icons-material/Star';

export default function SizedIcons() {
  return (
    <>
      <StarIcon fontSize="small" />      {/* 20px */}
      <StarIcon fontSize="medium" />     {/* 24px - default */}
      <StarIcon fontSize="large" />      {/* 35px */}
      <StarIcon fontSize="inherit" />    {/* Inherit from parent */}
      <StarIcon sx={{ fontSize: 40 }} /> {/* Custom size */}
    </>
  );
}
```

---

## Using Icons with Components

### With Buttons

```typescript
'use client';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

export default function ButtonIcons() {
  return (
    <>
      {/* Button with start icon */}
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
      {/* Button with end icon */}
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      
      {/* Icon button */}
      <IconButton color="primary">
        <SaveIcon />
      </IconButton>
    </>
  );
}
```

### With List Items

```typescript
'use client';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

export default function ListWithIcons() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
  );
}
```

### With Chips

```typescript
'use client';
import { Chip } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

export default function ChipWithIcon() {
  return (
    <>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip label="Deletable" onDelete={() => {}} deleteIcon={<DoneIcon />} />
    </>
  );
}
```

### With Input Fields

```typescript
'use client';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcons() {
  return (
    <>
      <TextField
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      
      <TextField
        label="Username"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
```

---

## Common Icons Reference

### Navigation
```typescript
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
```

### Actions
```typescript
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import RefreshIcon from '@mui/icons-material/Refresh';
```

### Status & Indicators
```typescript
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
```

### Communication
```typescript
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
```

### Social
```typescript
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
```

### Media
```typescript
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
```

### Content
```typescript
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
```

### Settings
```typescript
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
```

### Shopping
```typescript
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaymentIcon from '@mui/icons-material/Payment';
```

---

## Search for Icons

Find icons at: **[https://mui.com/material-ui/material-icons/](https://mui.com/material-ui/material-icons/)**

The search tool lets you:
- Browse all 2000+ icons
- Search by keyword
- See icon names
- Copy import statements
- Preview different variants

---

## Icon Components

### SvgIcon

For custom SVG icons:

```typescript
'use client';
import SvgIcon from '@mui/material/SvgIcon';

function CustomIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function CustomIcons() {
  return (
    <>
      <CustomIcon />
      <CustomIcon color="primary" />
      <CustomIcon fontSize="large" />
    </>
  );
}
```

### Icon (Font Icons)

For font-based icons (Material Icons font):

```typescript
'use client';
import Icon from '@mui/material/Icon';

export default function FontIcon() {
  return (
    <>
      <Icon>star</Icon>
      <Icon color="primary">home</Icon>
      <Icon fontSize="large">settings</Icon>
    </>
  );
}
```

---

## Performance Tips

### Tree Shaking

Import icons individually for better tree shaking:

```typescript
// ✅ Good - only imports one icon
import DeleteIcon from '@mui/icons-material/Delete';

// ❌ Bad - imports entire icon library
import { Delete } from '@mui/icons-material';
```

### Font vs SVG Icons

**SVG Icons** (default, @mui/icons-material):
- ✅ Better for tree shaking
- ✅ More customizable
- ✅ No external font dependency
- ❌ Larger bundle if using many icons

**Font Icons** (Material Icons font):
- ✅ Smaller bundle with many icons
- ✅ Can use any icon without importing
- ❌ Requires loading external font
- ❌ Less customizable

---

## Accessibility

Always provide labels for icon-only buttons:

```typescript
'use client';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// ✅ Good - has aria-label
<IconButton aria-label="delete" onClick={handleDelete}>
  <DeleteIcon />
</IconButton>

// ❌ Bad - no label for screen readers
<IconButton onClick={handleDelete}>
  <DeleteIcon />
</IconButton>
```

---

## Complete Example

```typescript
'use client';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PersonIcon from '@mui/icons-material/Person';

export default function IconShowcase() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Icon Examples
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Card with Icons"
          subheader="September 14, 2024"
        />
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button size="small" startIcon={<ShareIcon />}>
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
```

---

## Best Practices

1. **Import individually** - Better tree shaking and bundle size
2. **Provide aria-labels** - Essential for accessibility
3. **Use appropriate size** - Match icon size to context
4. **Choose right variant** - Filled, outlined, rounded based on design
5. **Consistent color usage** - Use theme colors (primary, secondary, etc.)
6. **Pair with text** - Icons alone can be ambiguous
7. **Test with screen readers** - Ensure icons don't confuse users
8. **Consider loading** - Icons add to bundle size

---

[← Back to Components](../../COMPONENTS.md)
