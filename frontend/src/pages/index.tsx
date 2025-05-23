import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Home() {
  const { data, isLoading, error } = useQuery('health', async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/health`)
    return data
  })

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Smart Advisor
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Tu asistente inteligente personal
          </Text>
        </Box>

        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
          <Heading as="h2" size="md" mb={4}>
            Estado del Backend
          </Heading>
          {isLoading && <Text>Cargando...</Text>}
          {error && <Text color="red.500">Error al conectar con el backend</Text>}
          {data && (
            <Text color="green.500">
              Backend conectado: {data.status}
            </Text>
          )}
        </Box>
      </VStack>
    </Container>
  )
} 