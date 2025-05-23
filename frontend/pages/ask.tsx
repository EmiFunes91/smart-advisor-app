import { useState } from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { Layout } from '../src/components/layout';
import { AskForm } from '../src/components/ask/AskForm';
import { AnswerCard } from '../src/components/ask/AnswerCard';

export default function AskPage() {
  const [answer, setAnswer] = useState('');

  return (
    <Layout>
      <Container maxW="container.md" py={10}>
        <Stack spacing={8}>
          <Heading as="h1" size="xl" textAlign="center">
            Pregúntale a Smart Advisor
          </Heading>

          <AskForm onResponse={setAnswer} />

          {answer && <AnswerCard answer={answer} />}
        </Stack>
      </Container>
    </Layout>
  );
}