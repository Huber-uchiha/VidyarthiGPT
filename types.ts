
export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export type ResourceCategory = 'Scholarships' | 'Exams' | 'Learning' | 'Well-being' | 'Financial Literacy' | 'Health';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  link: string;
  external: string;
  icon: string;
  isGovt?: boolean;
}

export interface Helpline {
  name: string;
  number: string;
  description: string;
  type: string;
  tags: string[];
  isGovt?: boolean;
}
