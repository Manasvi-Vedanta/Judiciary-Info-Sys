export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  user?: {
    name: string;
    role: string;
  };
}