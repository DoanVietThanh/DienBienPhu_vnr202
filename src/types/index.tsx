// Quiz
export interface QuizOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizSettings {
  numberOfQuestions: number;
  timeInMinutes: number;
  fullscreen: boolean;
}

export interface QuizResult {
  correctAnswers: number;
  wrongAnswers: number;
  timeSpent: string;
  score: number;
}

// Event
export interface ImageType {
  src: string;
  caption: string;
  description: string;
  source?: string;
}

export interface QuoteType {
  text: string;
  author: string;
}

export interface StatisticType {
  value: string;
  label: string;
}

export interface HistoricalEvent {
  date: string;
  title: string;
  description: string;
  details: string[];
  images: ImageType[];
  quote?: QuoteType;
  statistics?: StatisticType[];
}
