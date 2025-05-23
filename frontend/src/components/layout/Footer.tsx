import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="footer" bg={bg} borderTop="1px" borderColor={borderColor} py={4} mt="auto">
      <Container maxW="container.xl">
        <Text textAlign="center" fontSize="sm" color={textColor}>
          © {new Date().getFullYear()} Smart Advisor. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
}