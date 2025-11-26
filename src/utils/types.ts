import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Command {
  id: string;
  name: string;
  description: string;
  category: string;
  permissions?: string[];
  syntax: string;
  aliases?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ShardStatus {
  id: number;
  status: 'Operational' | 'Issues' | 'Offline';
  lastUpdated: string;
  uptime: string;
  latency: string;
  servers: number;
  users: number;
}