'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: true,
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
