import { Container, Typography, Button, Box, Stack } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Material-UI with Next.js
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your MUI setup is complete!
        </Typography>
        <Typography variant="body1" paragraph>
          This page demonstrates that Material-UI is properly configured with Next.js App Router.
          The setup includes CSS theme variables for better SSR performance and Roboto font optimization.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary Button
          </Button>
          <Button variant="text">
            Text Button
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
