import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HistoryResponse } from '../types/history';

export const useHistory = () => {
  return useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/ask/history`);
      return {
        items: data,
        total: data.length,
        page: 1,
        limit: 100,
      };
    }
  });
};
