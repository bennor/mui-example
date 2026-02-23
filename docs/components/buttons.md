# Button Components

Button components trigger actions and enable user interaction.

## Button

**Import**:
```typescript
import { Button } from '@mui/material';
```

### Variants

```typescript
'use client';
import { Button } from '@mui/material';

// Contained - high emphasis
<Button variant="contained">Contained</Button>

// Outlined - medium emphasis
<Button variant="outlined">Outlined</Button>

// Text - low emphasis
<Button variant="text">Text</Button>
```

### Colors

```typescript
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="warning">Warning</Button>
<Button variant="contained" color="info">Info</Button>
```

### Sizes

```typescript
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Props

```typescript
interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;          // Renders as link
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
```

### Examples

```typescript
'use client';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

// With icons
<Button variant="contained" startIcon={<SendIcon />}>
  Send
</Button>

<Button variant="outlined" endIcon={<DeleteIcon />}>
  Delete
</Button>

// Full width
<Button variant="contained" fullWidth>
  Full Width Button
</Button>

// Disabled
<Button variant="contained" disabled>
  Disabled
</Button>

// As link
<Button href="/about" variant="contained">
  Go to About
</Button>

// Form submit
<Button type="submit" variant="contained">
  Submit Form
</Button>
```

### Custom Styling

```typescript
'use client';
import { Button } from '@mui/material';

<Button
  variant="contained"
  sx={{
    borderRadius: 20,
    textTransform: 'none',
    px: 4,
    py: 1.5,
    fontSize: '1rem',
    fontWeight: 600,
  }}
>
  Custom Button
</Button>

// Gradient button
<Button
  variant="contained"
  sx={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }}
>
  Gradient
</Button>
```

---

## IconButton

**Import**:
```typescript
import { IconButton } from '@mui/material';
```

**Purpose**: Buttons that contain only an icon, commonly used in toolbars and action menus.

### Examples

```typescript
'use client';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Basic icon button
<IconButton>
  <DeleteIcon />
</IconButton>

// With color
<IconButton color="primary">
  <FavoriteIcon />
</IconButton>

<IconButton color="error">
  <DeleteIcon />
</IconButton>

// With size
<IconButton size="small">
  <EditIcon fontSize="small" />
</IconButton>

<IconButton size="large">
  <EditIcon fontSize="large" />
</IconButton>

// Disabled
<IconButton disabled>
  <DeleteIcon />
</IconButton>

// With aria-label for accessibility
<IconButton aria-label="delete" onClick={handleDelete}>
  <DeleteIcon />
</IconButton>
```

---

## ButtonGroup

**Import**:
```typescript
import { ButtonGroup, Button } from '@mui/material';
```

**Purpose**: Group related buttons together.

### Examples

```typescript
'use client';
import { ButtonGroup, Button } from '@mui/material';

// Basic group
<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

// Outlined group
<ButtonGroup variant="outlined">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>

// Vertical group
<ButtonGroup orientation="vertical" variant="contained">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>

// With different sizes
<ButtonGroup size="small" variant="outlined">
  <Button>Small</Button>
  <Button>Buttons</Button>
</ButtonGroup>
```

---

## Fab (Floating Action Button)

**Import**:
```typescript
import { Fab } from '@mui/material';
```

**Purpose**: Prominent circular button for primary actions.

### Examples

```typescript
'use client';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Basic FAB
<Fab color="primary">
  <AddIcon />
</Fab>

// Extended FAB with text
<Fab variant="extended" color="primary">
  <AddIcon sx={{ mr: 1 }} />
  Add Item
</Fab>

// Different sizes
<Fab size="small" color="secondary">
  <EditIcon />
</Fab>

<Fab size="medium" color="primary">
  <AddIcon />
</Fab>

<Fab size="large" color="primary">
  <AddIcon />
</Fab>

// Positioned in bottom right
<Fab
  color="primary"
  sx={{
    position: 'fixed',
    bottom: 16,
    right: 16,
  }}
>
  <AddIcon />
</Fab>
```

---

## Common Patterns

### Action Buttons Row

```typescript
'use client';
import { Stack, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ActionButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        startIcon={<CancelIcon />}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Stack>
  );
}
```

### Card Actions

```typescript
'use client';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

export default function ActionCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2">Card content</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small" color="primary">
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
}
```

### Loading Button (requires @mui/lab)

```typescript
// First install: pnpm add @mui/lab
'use client';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingExample() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="contained"
      onClick={handleClick}
    >
      Save
    </LoadingButton>
  );
}
```

### Icon Button with Tooltip

```typescript
'use client';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TooltipButton() {
  return (
    <Tooltip title="Delete">
      <IconButton color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
```

### Button with Next.js Link

For Next.js v16, you need to create a wrapper component:

```typescript
// src/components/Link.tsx
'use client';
import Link, { LinkProps } from 'next/link';

export default Link;
```

Then use it with Button:

```typescript
'use client';
import { Button } from '@mui/material';
import Link from '../components/Link';

<Button component={Link} href="/about" variant="contained">
  Go to About
</Button>
```

---

## Best Practices

1. **Choose the right variant**:
   - `contained` for primary actions
   - `outlined` for secondary actions
   - `text` for tertiary/low-priority actions

2. **Use appropriate colors**:
   - `primary` for main actions
   - `secondary` for alternative actions
   - `error` for destructive actions
   - `success` for positive confirmations

3. **Add icons to clarify purpose**:
   - Use `startIcon` for leading icons
   - Use `endIcon` for trailing icons

4. **Provide aria-label for icon-only buttons**:
   ```typescript
   <IconButton aria-label="delete">
     <DeleteIcon />
   </IconButton>
   ```

5. **Use disabled state for unavailable actions**:
   ```typescript
   <Button disabled={!formValid}>Submit</Button>
   ```

6. **Group related buttons** with ButtonGroup

7. **Consider mobile tap targets** - Minimum 48x48px touch target

8. **Use loading states** for async operations

---

## Accessibility

- Always provide `aria-label` for IconButtons
- Use proper `type` prop for form buttons (`submit`, `reset`, `button`)
- Ensure sufficient color contrast (WCAG AA: 4.5:1)
- Maintain minimum touch target size (48x48px)
- Use `disabled` prop instead of just visual styling
- Provide keyboard navigation support (built-in)

---

[← Back to Components](../../COMPONENTS.md)
