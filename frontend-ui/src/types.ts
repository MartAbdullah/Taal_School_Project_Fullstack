export interface Filters {
  level: string;
  skill: string;
  search: string;
}

export interface Question {
  id: number;
  created_at: string;
  level: string;
  skill: string;
  code: string;
  title: string;
  paragraphs: number;
  question_count: number;
  status: string;
}
