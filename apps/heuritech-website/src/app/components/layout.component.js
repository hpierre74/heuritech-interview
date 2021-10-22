import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { NavBar } from './navbar.component';

export const Layout = ({ children }) => (
  <>
    <header>
      <NavBar />
    </header>
    <Container disableGutters maxWidth={false}>
      <Box component="main" sx={{ bgcolor: 'grey.light', p: 4 }}>
        {children}
      </Box>
    </Container>
  </>
);
