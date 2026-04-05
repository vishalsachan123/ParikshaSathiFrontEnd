export interface QuestionConfig {
  subject: string;
  topic: string;
  type: string;
  count: string;
}

export interface Question {
  text: string;
  options: string[];
  correct: number;
}

export interface SearchResult {
  id: number;
  name: string;
  meta: string;
  icon: string;
}

export interface Paper {
  id: number;
  title: string;
  icon: string;
  tags: string[];
}
