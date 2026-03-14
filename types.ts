export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  technician?: string;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}
