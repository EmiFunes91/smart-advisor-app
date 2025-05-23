export interface Question {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
}

export interface AskResponse {
  answer: string;
}

export interface AskQuestionResponse extends Question {}