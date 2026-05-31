import type { LucideIcon } from 'lucide-react';

export type ServiceColor =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'teal'
  | 'indigo';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: ServiceColor;
  overview: string[];
  benefits: string[];
}

export interface Stat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface ContactInfoItem {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}
