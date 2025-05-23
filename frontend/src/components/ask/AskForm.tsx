import {
  FormControl,
  FormLabel,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

interface AskFormProps {
  onResponse: (answer: string) => void;
}

export function AskForm({ onResponse }: AskFormProps) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    if (!question.trim()) {
      toast({
        title: 'La pregunta no puede estar vacía.',
        status: 'warning',
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ask`, {
        question,
      });
      onResponse(res.data.answer);
    } catch (err) {
      toast({
        title: 'Error al obtener la respuesta.',
        description: 'Intenta nuevamente.',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormControl>
      <FormLabel>¿Cuál es tu pregunta?</FormLabel>
      <Textarea
        placeholder="Escribe tu pregunta aquí..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        mb={4}
      />
      <Button
        colorScheme="brand"
        onClick={handleSubmit}
        isLoading={loading}
        loadingText="Consultando..."
      >
        Enviar
      </Button>
    </FormControl>
  );
}