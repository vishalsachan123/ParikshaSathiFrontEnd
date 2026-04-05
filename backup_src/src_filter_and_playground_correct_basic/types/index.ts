export interface QuestionConfig {
  type: string;
  subjects: string[];
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
