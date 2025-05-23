import { Container, Heading, Spinner, Text, VStack } from '@chakra-ui/react';
import { Layout } from '../src/components/layout';
import { useHistory } from '../src/hooks/useHistory';
import { HistoryCard } from '../src/components/history/HistoryCard';
import { HistoryItem } from '../src/types/history';

export default function HistoryPage() {
  const { data, isLoading, error } = useHistory();

  return (
    <Layout>
      <Container maxW="container.lg" py={10}>
        <Heading mb={6} as="h1" size="xl" textAlign="center">
          Historial de Preguntas
        </Heading>

        {isLoading && <Spinner size="xl" display="block" mx="auto" />}

        {error instanceof Error && (
          <Text color="red.500" textAlign="center">
            {error.message || 'Error al cargar el historial. Intenta nuevamente.'}
          </Text>
        )}

        {data && data.items.length === 0 && (
          <Text textAlign="center" color="gray.600">
            Aún no has realizado ninguna pregunta.
          </Text>
        )}

        {data && (
          <VStack spacing={5} align="stretch">
            {data.items.map((item: HistoryItem) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </VStack>
        )}
      </Container>
    </Layout>
  );
}