# Project Documentation for Agents

This Next.js v16 project uses Material-UI (MUI) v7.3.8 for UI components.

## Essential Documentation

**Read these files before working on this project:**

- **[INSTRUCTIONS.md](../INSTRUCTIONS.md)** - Complete MUI usage guide for this Next.js App Router project
- **[COMPONENTS.md](../COMPONENTS.md)** - Comprehensive MUI component reference with examples

## Project Stack

- **Framework**: Next.js v16 with App Router
- **UI Library**: Material-UI v7.3.8
- **Styling Engine**: Emotion
- **Theme**: CSS theme variables enabled, light mode only, square borders (borderRadius: 0)
- **Font**: Roboto (Next.js optimized)

## Key Configuration Files

- `src/theme.ts` - Theme configuration with CSS variables
- `app/layout.tsx` - Root layout with AppRouterCacheProvider and ThemeProvider
- `package.json` - Dependencies including @mui/material, @mui/material-nextjs, @emotion/*

## Component Documentation

Detailed documentation available for all component categories:
- Layout (Container, Box, Grid, Stack)
- Typography
- Buttons (Button, IconButton, Fab)
- Forms (TextField, Select, Checkbox, Radio, etc.)
- Navigation (AppBar, Drawer, Tabs, etc.)
- Data Display (Card, List, Table, etc.)
- Feedback (Alert, Snackbar, Dialog, Progress)
- Surfaces (Paper, Accordion)
- Icons (Material Icons)

See `docs/components/` for detailed examples and best practices.

## Critical Rules for MUI in Next.js App Router

1. **Client Components**: Any file using MUI components must include `'use client';` directive
2. **Imports**: Import from `@mui/material` (e.g., `import { Button } from '@mui/material'`)
3. **Styling**: Use `sx` prop for theme-aware styling
4. **Theme Access**: Theme values automatically available via `sx` prop or `useTheme()` hook
5. **Next.js Links**: Use wrapper component for Next.js Link with MUI Button (see INSTRUCTIONS.md)

## Where to Find Information

- **General MUI usage**: INSTRUCTIONS.md
- **Specific components**: COMPONENTS.md → detailed docs links
- **Code examples**: docs/components/*.md files
- **Theme customization**: src/theme.ts and INSTRUCTIONS.md theming section

## Git Commit Guidelines

**Always commit without attribution** - Do not include author information in commits.
