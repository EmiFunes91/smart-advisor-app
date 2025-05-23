import { Button, ButtonProps } from '@chakra-ui/react';

interface ActionButtonProps extends ButtonProps {
  variant?: 'primary' | 'ghost' | 'solid' | 'outline'; // extensible
}

export default function ActionButton(props: ActionButtonProps) {
  return <Button variant={props.variant ?? 'primary'} {...props} />;
}