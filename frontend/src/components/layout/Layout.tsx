import { Box, Container } from '@chakra-ui/react';
import { Navbar, Footer } from '.';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1">
        <Container maxW="container.xl" py={8}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}