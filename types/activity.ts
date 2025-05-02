export interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  description: string;
  date: Date;
}