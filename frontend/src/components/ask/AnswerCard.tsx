import { Card } from '../ui/Card';
import { Text, Heading } from '@chakra-ui/react';

interface AnswerCardProps {
  answer: string;
}

export function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <Card>
      <Heading as="h2" size="md" mb={2}>
        Respuesta del asistente
      </Heading>
      <Text>{answer}</Text>
    </Card>
  );
}