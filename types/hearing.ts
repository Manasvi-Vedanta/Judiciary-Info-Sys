export interface Hearing {
  id: string;
  title: string;
  caseNumber: string;
  date: Date;
  type: string;
  location?: string;
  description?: string;
}