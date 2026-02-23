# Project Documentation

This Next.js v16 project uses Material-UI (MUI) v7.3.8 for UI components.

## Key Documentation

Please read these files to understand how to work with this project:

- **[INSTRUCTIONS.md](../INSTRUCTIONS.md)** - Complete MUI usage guide for this Next.js App Router project
- **[COMPONENTS.md](../COMPONENTS.md)** - Comprehensive MUI component reference with examples

## Quick Overview

- **Framework**: Next.js v16 with App Router
- **UI Library**: Material-UI v7.3.8
- **Styling**: Emotion with CSS theme variables
- **Font**: Roboto (optimized with Next.js font loading)

## Important Files

- `src/theme.ts` - Theme configuration
- `app/layout.tsx` - Root layout with MUI providers
- `INSTRUCTIONS.md` - Full usage guide
- `COMPONENTS.md` - Component reference
- `docs/components/` - Detailed component documentation

## Getting Started

When working with MUI components:
1. Always add `'use client';` directive to files using MUI components
2. Import components from `@mui/material`
3. Use the `sx` prop for theme-aware styling
4. Refer to INSTRUCTIONS.md for detailed patterns and best practices
