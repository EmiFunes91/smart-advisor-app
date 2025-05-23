import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box
      as="header"
      bg={bg}
      px={4}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex h={16} align="center" justify="space-between">
        <Link href="/" passHref legacyBehavior>
          <ChakraLink fontSize="xl" fontWeight="bold" color={linkColor}>
            Smart Advisor
          </ChakraLink>
        </Link>

        <Stack direction="row" spacing={4} align="center">
          <Link href="/ask" passHref legacyBehavior>
            <ChakraLink color={linkColor}>Preguntar</ChakraLink>
          </Link>
          <Link href="/history" passHref legacyBehavior>
            <ChakraLink color={linkColor}>Historial</ChakraLink>
          </Link>
          <Button
            onClick={toggleColorMode}
            size="sm"
            aria-label="Alternar modo oscuro"
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}