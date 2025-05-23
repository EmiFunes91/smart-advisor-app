import { Box, useStyleConfig, BoxProps } from '@chakra-ui/react';

interface CardProps extends BoxProps {
  variant?: string;
}

export function Card({ variant = 'filled', ...rest }: CardProps) {
  const styles = useStyleConfig('Card', { variant });

  return <Box __css={styles} {...rest} />;
}