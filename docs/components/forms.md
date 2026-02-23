# Form Components

Form components collect user input with validation and accessibility built-in.

## TextField

**Import**:
```typescript
import { TextField } from '@mui/material';
```

**Purpose**: The most commonly used input component for text, email, password, number, etc.

### Basic Usage

```typescript
'use client';
import { useState } from 'react';
import { TextField } from '@mui/material';

export default function BasicForm() {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      fullWidth
    />
  );
}
```

### Variants

```typescript
<TextField label="Outlined" variant="outlined" />
<TextField label="Filled" variant="filled" />
<TextField label="Standard" variant="standard" />
```

### Input Types

```typescript
<TextField type="text" label="Text" />
<TextField type="email" label="Email" />
<TextField type="password" label="Password" />
<TextField type="number" label="Number" />
<TextField type="tel" label="Phone" />
<TextField type="url" label="Website" />
<TextField type="date" label="Date" InputLabelProps={{ shrink: true }} />
<TextField type="time" label="Time" InputLabelProps={{ shrink: true }} />
```

### Props & Examples

```typescript
'use client';
import { TextField } from '@mui/material';

// Required field
<TextField label="Email" required />

// With helper text
<TextField
  label="Username"
  helperText="Must be 3-20 characters"
/>

// Error state
<TextField
  label="Email"
  error
  helperText="Invalid email address"
/>

// Disabled
<TextField label="Disabled" disabled />

// Multiline / Textarea
<TextField
  label="Description"
  multiline
  rows={4}
  fullWidth
/>

// With default value
<TextField label="Name" defaultValue="John Doe" />

// Full width
<TextField label="Address" fullWidth />

// Custom size
<TextField label="Small" size="small" />
<TextField label="Medium" size="medium" />
```

---

## Select

**Import**:
```typescript
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
```

### Basic Usage

```typescript
'use client';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function SelectExample() {
  const [value, setValue] = useState('');

  return (
    <FormControl fullWidth>
      <InputLabel>Age</InputLabel>
      <Select
        value={value}
        label="Age"
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
```

### Examples

```typescript
'use client';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// Multiple selection
<FormControl fullWidth>
  <InputLabel>Tags</InputLabel>
  <Select
    multiple
    value={selectedTags}
    label="Tags"
    onChange={handleChange}
  >
    <MenuItem value="react">React</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
    <MenuItem value="angular">Angular</MenuItem>
  </Select>
</FormControl>

// With helper text
<FormControl fullWidth>
  <InputLabel>Country</InputLabel>
  <Select value={country} label="Country" onChange={handleChange}>
    <MenuItem value="us">United States</MenuItem>
    <MenuItem value="uk">United Kingdom</MenuItem>
    <MenuItem value="ca">Canada</MenuItem>
  </Select>
  <FormHelperText>Select your country</FormHelperText>
</FormControl>

// Native select (better for mobile)
<FormControl fullWidth>
  <InputLabel>Native Select</InputLabel>
  <Select native value={value} label="Native Select" onChange={handleChange}>
    <option value=""></option>
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
  </Select>
</FormControl>
```

---

## Checkbox

**Import**:
```typescript
import { Checkbox, FormControlLabel } from '@mui/material';
```

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* Basic checkbox */}
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      {/* With label */}
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
        label="I agree to the terms"
      />

      {/* Multiple checkboxes */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      </FormGroup>

      {/* With colors */}
      <Checkbox color="primary" />
      <Checkbox color="secondary" />
      <Checkbox color="success" />
      <Checkbox color="error" />
    </>
  );
}
```

---

## Radio

**Import**:
```typescript
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
```

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export default function RadioExample() {
  const [value, setValue] = useState('female');

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  );
}

// Horizontal radio group
<RadioGroup row value={value} onChange={handleChange}>
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
```

---

## Switch

**Import**:
```typescript
import { Switch, FormControlLabel } from '@mui/material';
```

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Switch, FormControlLabel, Stack } from '@mui/material';

export default function SwitchExample() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* Basic switch */}
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      {/* With label */}
      <FormControlLabel
        control={<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
        label="Enable notifications"
      />

      {/* Different colors */}
      <Stack direction="row">
        <Switch defaultChecked color="primary" />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="success" />
        <Switch defaultChecked color="error" />
        <Switch defaultChecked color="warning" />
      </Stack>

      {/* Disabled */}
      <Switch disabled />
      <Switch checked disabled />
    </>
  );
}
```

---

## Autocomplete

**Import**:
```typescript
import { Autocomplete, TextField } from '@mui/material';
```

### Examples

```typescript
'use client';
import { Autocomplete, TextField } from '@mui/material';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function AutocompleteExample() {
  return (
    <>
      {/* Basic autocomplete */}
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Choose an option" />}
      />

      {/* With object options */}
      <Autocomplete
        options={[
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Python', value: 'py' },
        ]}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Language" />}
      />

      {/* Multiple selection */}
      <Autocomplete
        multiple
        options={options}
        renderInput={(params) => <TextField {...params} label="Tags" />}
      />

      {/* Free solo (allow custom values) */}
      <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => <TextField {...params} label="Free solo" />}
      />
    </>
  );
}
```

---

## Slider

**Import**:
```typescript
import { Slider } from '@mui/material';
```

### Examples

```typescript
'use client';
import { useState } from 'react';
import { Slider, Typography, Box } from '@mui/material';

export default function SliderExample() {
  const [value, setValue] = useState(30);

  return (
    <Box sx={{ width: 300 }}>
      {/* Basic slider */}
      <Slider
        value={value}
        onChange={(e, newValue) => setValue(newValue as number)}
      />

      {/* With marks */}
      <Slider
        defaultValue={50}
        marks
        min={0}
        max={100}
        step={10}
      />

      {/* Range slider */}
      <Slider
        defaultValue={[20, 37]}
        valueLabelDisplay="auto"
      />

      {/* Disabled */}
      <Slider defaultValue={30} disabled />

      {/* Different colors */}
      <Slider defaultValue={30} color="secondary" />
    </Box>
  );
}
```

---

## Complete Form Example

```typescript
'use client';
import { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
  Stack,
  Typography,
} from '@mui/material';

export default function CompleteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    subscribe: false,
    gender: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Registration Form
      </Typography>

      <Stack spacing={3}>
        {/* Text Input */}
        <TextField
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          fullWidth
        />

        {/* Email Input */}
        <TextField
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          fullWidth
        />

        {/* Select */}
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={formData.country}
            label="Country"
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          >
            <MenuItem value="us">United States</MenuItem>
            <MenuItem value="uk">United Kingdom</MenuItem>
            <MenuItem value="ca">Canada</MenuItem>
          </Select>
        </FormControl>

        {/* Radio Group */}
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Textarea */}
        <TextField
          label="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          multiline
          rows={4}
          fullWidth
        />

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.subscribe}
              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
            />
          }
          label="Subscribe to newsletter"
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
```

---

## Form Validation Example

```typescript
'use client';
import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function ValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setError(isValid ? '' : 'Please enter a valid email');
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log('Email is valid:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          error={!!error}
          helperText={error}
          required
          fullWidth
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
```

---

## Best Practices

1. **Always use labels** - Every input should have a label
2. **Provide helper text** - Guide users with format examples
3. **Show validation errors** - Use error prop and helperText
4. **Use appropriate input types** - email, tel, number, etc.
5. **Make forms accessible** - Use FormControl, FormLabel, etc.
6. **Use fullWidth for mobile** - Forms look better full width
7. **Group related fields** - Use FormControl and FormGroup
8. **Provide visual feedback** - Loading states, success messages

---

[← Back to Components](../../COMPONENTS.md)
