import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import ActionButton from '../ui/Button';

const MotionBox = motion(Box);

export const Hero = () => {
  const router = useRouter();
  const bgGradient = useColorModeValue(
    'linear(to-r, brand.50, white)',
    'linear(to-r, gray.800, gray.900)'
  );

  return (
    <Box bgGradient={bgGradient} py={{ base: 16, md: 24 }} px={4} textAlign="center">
      <Container maxW="container.lg">
        <Stack spacing={8}>
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.500, brand.700)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Smart Advisor
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl" mx="auto">
              An intelligent assistant designed to help you get answers and track insights — instantly.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ActionButton
              size="lg"
              variant="primary"
              rightIcon={<ArrowForwardIcon />}
              onClick={() => router.push('/ask')}
            >
              Ask a question
            </ActionButton>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
};