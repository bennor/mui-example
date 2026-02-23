# Surface Components

Surface components provide visual depth and structure to organize content.

## Paper

**Import**:
```typescript
import { Paper } from '@mui/material';
```

**Purpose**: Container with elevation (shadow) to create depth and hierarchy.

### Examples

```typescript
'use client';
import { Paper, Stack, Typography } from '@mui/material';

export default function PaperExamples() {
  return (
    <Stack spacing={2}>
      {/* Different elevations */}
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography>Elevation 0 (no shadow)</Typography>
      </Paper>
      
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography>Elevation 1</Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography>Elevation 3 (default)</Typography>
      </Paper>
      
      <Paper elevation={8} sx={{ p: 2 }}>
        <Typography>Elevation 8</Typography>
      </Paper>
      
      {/* Outlined variant */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography>Outlined Paper (no shadow, border instead)</Typography>
      </Paper>
      
      {/* Square corners */}
      <Paper square elevation={3} sx={{ p: 2 }}>
        <Typography>Square Paper (no border radius)</Typography>
      </Paper>
    </Stack>
  );
}

// Custom styled paper
<Paper
  elevation={3}
  sx={{
    p: 3,
    bgcolor: 'primary.light',
    color: 'primary.contrastText',
    borderRadius: 2,
  }}
>
  <Typography>Custom styled Paper</Typography>
</Paper>
```

### Common Use Cases

```typescript
'use client';
import { Paper, Typography, Box } from '@mui/material';

// Content section
export function ContentSection() {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        Section Title
      </Typography>
      <Typography>
        Content goes here...
      </Typography>
    </Paper>
  );
}

// Dashboard widget
export function DashboardWidget() {
  return (
    <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Widget Title
      </Typography>
      <Typography variant="h3" color="primary">
        1,234
      </Typography>
      <Typography variant="body2" color="text.secondary">
        +12% from last month
      </Typography>
    </Paper>
  );
}
```

---

## Accordion

**Import**:
```typescript
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
```

**Purpose**: Expandable panels for hiding/showing content.

### Examples

```typescript
'use client';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for accordion 1. This can be any JSX content.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for accordion 2.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for accordion 3.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

### Controlled Accordion

```typescript
'use client';
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

### Accordion Props

```typescript
// Disabled accordion
<Accordion disabled>
  <AccordionSummary>
    <Typography>Disabled Accordion</Typography>
  </AccordionSummary>
</Accordion>

// Default expanded
<Accordion defaultExpanded>
  <AccordionSummary>
    <Typography>Default Expanded</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>This accordion is expanded by default</Typography>
  </AccordionDetails>
</Accordion>

// Squared corners
<Accordion square>
  <AccordionSummary>
    <Typography>Square Accordion</Typography>
  </AccordionSummary>
</Accordion>
```

---

## Card (as Surface)

**Import**:
```typescript
import { Card } from '@mui/material';
```

**Purpose**: Elevated surface for grouping related content (also covered in Data Display).

### Example

```typescript
'use client';
import { Card, CardContent, Typography } from '@mui/material';

export default function SurfaceCard() {
  return (
    <Card elevation={4} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5">Card as Surface</Typography>
        <Typography variant="body2" color="text.secondary">
          Cards are Paper components with specific styling for content containers.
        </Typography>
      </CardContent>
    </Card>
  );
}
```

---

## AppBar (as Surface)

**Import**:
```typescript
import { AppBar } from '@mui/material';
```

**Purpose**: Top application surface (also covered in Navigation).

### Example

```typescript
'use client';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function SurfaceAppBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6">
          AppBar Surface
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
```

---

## Complete Example: FAQ Accordion

```typescript
'use client';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Material-UI?',
      answer: 'Material-UI is a popular React UI framework that implements Google\'s Material Design.',
    },
    {
      question: 'How do I install MUI?',
      answer: 'You can install MUI using npm: npm install @mui/material @emotion/react @emotion/styled',
    },
    {
      question: 'Is MUI free to use?',
      answer: 'Yes, MUI is open-source and free to use under the MIT license.',
    },
    {
      question: 'Does MUI support TypeScript?',
      answer: 'Yes, MUI is written in TypeScript and has excellent TypeScript support.',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      
      <Typography variant="body1" paragraph align="center" color="text.secondary">
        Find answers to common questions about Material-UI
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
```

---

## Complete Example: Dashboard with Paper

```typescript
'use client';
import { Box, Paper, Typography, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function Dashboard() {
  const stats = [
    { title: 'Total Users', value: '12,345', change: '+12%', positive: true },
    { title: 'Revenue', value: '$54,321', change: '+8%', positive: true },
    { title: 'Orders', value: '1,234', change: '-3%', positive: false },
    { title: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography variant="h4" component="div">
                {stat.value}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 1,
                  color: stat.positive ? 'success.main' : 'error.main',
                }}
              >
                {stat.positive ? (
                  <TrendingUpIcon fontSize="small" />
                ) : (
                  <TrendingDownIcon fontSize="small" />
                )}
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  {stat.change}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
```

---

## Best Practices

1. **Use appropriate elevation** - Higher elevation = more prominent
2. **Be consistent with elevation** - Same types of content should have same elevation
3. **Use Paper for sections** - Group related content
4. **Accordion for FAQs** - Perfect for expandable Q&A
5. **Accordion for settings** - Group configuration options
6. **Don't nest high elevations** - Avoid Paper elevation={8} inside Paper elevation={8}
7. **Use outlined variant** - When you need borders instead of shadows
8. **Consider dark mode** - Elevations work differently in dark theme

---

## Elevation Scale

MUI supports elevations from 0 to 24:
- `0`: No shadow (flat)
- `1`: Subtle shadow (cards in list)
- `2-3`: Standard elevation (cards, panels)
- `4-6`: Raised elements (app bar, buttons)
- `8-12`: Dialogs, modals
- `16-24`: Reserved for special cases (rarely used)

---

[← Back to Components](../../COMPONENTS.md)
