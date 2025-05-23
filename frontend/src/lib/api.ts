import axios from 'axios';
import { Question, AskQuestionResponse, AskResponse } from '../types/ask';
import { HistoryItem, HistoryResponse } from '../types/history';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para errores globales
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('API Error:', err?.response?.data || err.message);
    return Promise.reject(err);
  }
);

// Enviar pregunta
export const askQuestion = async (question: string): Promise<AskResponse> => {
  const response = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    throw new Error('Error al hacer la pregunta');
  }

  return response.json();
};

// Obtener historial
export const getHistory = async (): Promise<HistoryItem[]> => {
  const { data } = await api.get<HistoryItem[]>('/api/ask/history');
  return data;
};

// Obtener una pregunta específica (si se usa en detalles)
export const getQuestion = async (id: string): Promise<Question> => {
  const { data } = await api.get<Question>(`/api/ask/${id}`);
  return data;
};