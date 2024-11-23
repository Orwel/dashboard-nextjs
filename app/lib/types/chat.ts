interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: {
    type: 'pdf';
    url: string;
    analysis?: string;
  }[];
}

interface LegalContext {
  id: string;
  type: 'case_law' | 'statute' | 'regulation' | 'custom_prompt';
  content: string;
  category: string;
  priority: number;
} 