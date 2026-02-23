# Feedback Components

Components that provide feedback to users about actions, states, and system status.

## Alert

**Import**:
```typescript
import { Alert } from '@mui/material';
```

**Purpose**: Display important messages with different severity levels.

### Examples

```typescript
'use client';
import { Alert, Stack } from '@mui/material';

export default function AlertExamples() {
  return (
    <Stack spacing={2}>
      {/* Severity variants */}
      <Alert severity="success">This is a success alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="error">This is an error alert</Alert>
      
      {/* Different variants */}
      <Alert variant="filled" severity="success">
        Filled success alert
      </Alert>
      <Alert variant="outlined" severity="error">
        Outlined error alert
      </Alert>
      <Alert variant="standard" severity="info">
        Standard info alert
      </Alert>
      
      {/* With close button */}
      <Alert 
        severity="warning" 
        onClose={() => console.log('Closed')}
      >
        Alert with close button
      </Alert>
      
      {/* With title */}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert with a title
      </Alert>
    </Stack>
  );
}
```

---

## Snackbar

**Import**:
```typescript
import { Snackbar } from '@mui/material';
```

**Purpose**: Brief notifications that appear temporarily at the bottom of the screen.

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Snackbar, Button, Alert } from '@mui/material';

export default function SnackbarExample() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleClick}>Show Snackbar</Button>
      
      {/* Basic snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="This is a snackbar message"
      />
      
      {/* Snackbar with Alert */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Operation completed successfully!
        </Alert>
      </Snackbar>
      
      {/* Different positions */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Top center snackbar"
      />
      
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message="Bottom right snackbar"
      />
    </>
  );
}

// Complete notification example
'use client';
import { useState } from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

export default function NotificationSystem() {
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'info' as 'success' | 'info' | 'warning' | 'error',
  });

  const showNotification = (message: string, severity: typeof notification.severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <>
      <Button onClick={() => showNotification('Success!', 'success')}>
        Show Success
      </Button>
      
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
}
```

---

## Dialog

**Import**:
```typescript
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
```

**Purpose**: Modal window for important decisions or information.

### Examples

```typescript
'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

export default function BasicDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is the dialog content. You can put any information here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// Confirmation dialog
export default function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    console.log('Confirmed');
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete
      </Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleConfirm} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// Full screen dialog
<Dialog fullScreen open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Full Screen Dialog</DialogTitle>
  <DialogContent>Content</DialogContent>
</Dialog>

// Max width dialog
<Dialog maxWidth="sm" fullWidth open={open}>
  {/* maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */}
</Dialog>
```

---

## CircularProgress

**Import**:
```typescript
import { CircularProgress } from '@mui/material';
```

**Purpose**: Indicate loading state with circular spinner.

### Examples

```typescript
'use client';
import { CircularProgress, Stack, Box } from '@mui/material';

export default function ProgressExamples() {
  return (
    <Stack spacing={2} alignItems="center">
      {/* Basic progress */}
      <CircularProgress />
      
      {/* Different colors */}
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
      
      {/* Different sizes */}
      <CircularProgress size={20} />
      <CircularProgress size={40} />
      <CircularProgress size={60} />
      
      {/* Determinate (with value) */}
      <CircularProgress variant="determinate" value={75} />
      
      {/* Centered in container */}
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    </Stack>
  );
}

// Loading overlay
'use client';
import { CircularProgress, Backdrop } from '@mui/material';

export default function LoadingOverlay({ open }: { open: boolean }) {
  return (
    <Backdrop
      open={open}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
```

---

## LinearProgress

**Import**:
```typescript
import { LinearProgress } from '@mui/material';
```

**Purpose**: Indicate loading progress with horizontal bar.

### Examples

```typescript
'use client';
import { LinearProgress, Stack, Box } from '@mui/material';

export default function LinearProgressExamples() {
  return (
    <Stack spacing={2}>
      {/* Indeterminate progress */}
      <LinearProgress />
      
      {/* Determinate progress */}
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} color="success" />
      
      {/* Buffer variant */}
      <LinearProgress variant="buffer" value={60} valueBuffer={80} />
      
      {/* Different colors */}
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
    </Stack>
  );
}

// File upload progress
'use client';
import { useState } from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

export default function UploadProgress() {
  const [progress, setProgress] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" color="text.secondary">
        Uploading... {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
```

---

## Skeleton

**Import**:
```typescript
import { Skeleton } from '@mui/material';
```

**Purpose**: Display loading placeholders that match content structure.

### Examples

```typescript
'use client';
import { Skeleton, Stack, Card, CardHeader, CardContent } from '@mui/material';

export default function SkeletonExamples() {
  return (
    <Stack spacing={2}>
      {/* Text skeleton */}
      <Skeleton />
      <Skeleton width="60%" />
      
      {/* Different variants */}
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rounded" width={210} height={60} />
      
      {/* Card skeleton */}
      <Card>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton width="60%" />}
          subheader={<Skeleton width="40%" />}
        />
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Skeleton />
          <Skeleton width="80%" />
        </CardContent>
      </Card>
    </Stack>
  );
}

// Loading state pattern
'use client';
import { useState, useEffect } from 'react';
import { Skeleton, Typography, Box } from '@mui/material';

export default function ContentWithLoading() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData('Loaded content');
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      {loading ? (
        <>
          <Skeleton variant="text" width="60%" height={40} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </>
      ) : (
        <>
          <Typography variant="h4">{data}</Typography>
          <Typography>Content has loaded successfully.</Typography>
        </>
      )}
    </Box>
  );
}
```

---

## Backdrop

**Import**:
```typescript
import { Backdrop } from '@mui/material';
```

**Purpose**: Overlay background to focus attention or indicate loading.

### Example

```typescript
'use client';
import { useState } from 'react';
import { Backdrop, CircularProgress, Button } from '@mui/material';

export default function BackdropExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
      
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
```

---

## Complete Feedback Example

```typescript
'use client';
import { useState } from 'react';
import {
  Button,
  Stack,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  LinearProgress,
  Box,
} from '@mui/material';

export default function FeedbackSystem() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' as any });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAction = async () => {
    setLoading(true);
    setProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setSnackbar({
            open: true,
            message: 'Action completed successfully!',
            severity: 'success',
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDelete = () => {
    setDialogOpen(true);
  };

  const confirmDelete = () => {
    setDialogOpen(false);
    setSnackbar({
      open: true,
      message: 'Item deleted',
      severity: 'success',
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Button variant="contained" onClick={handleAction} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Start Action'}
        </Button>
        
        {loading && <LinearProgress variant="determinate" value={progress} />}
        
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete Item
        </Button>
      </Stack>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Confirmation dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
```

---

## Best Practices

1. **Use appropriate severity** - Match color to message importance
2. **Auto-hide Snackbars** - Don't require manual dismissal for info messages
3. **Confirm destructive actions** - Use Dialog for delete/permanent changes
4. **Show progress for long operations** - Use CircularProgress or LinearProgress
5. **Use Skeleton for content loading** - Better UX than blank space
6. **Keep messages concise** - Snackbars should be brief
7. **Provide actions in Snackbar** - Undo, retry, etc.
8. **Use Backdrop for modal states** - Focus user attention

---

[← Back to Components](../../COMPONENTS.md)
