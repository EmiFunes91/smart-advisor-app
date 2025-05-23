import { useMutation, useQueryClient } from 'react-query';
import { askQuestion } from '../lib/api';
import { AskQuestionResponse } from '../types/ask';

export const useAsk = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<AskQuestionResponse, unknown, string, unknown>(
    (question) => askQuestion(question),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('history');
      },
    }
  );

  return {
    ask: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
    data: mutation.data,
  };
};