
export enum ServiceStatus {
  OPERATIONAL = 'operational',
  DEGRADED = 'degraded',
  OUTAGE = 'outage'
}

export enum ContentType {
  MOVIE = 'movie',
  SERIES = 'series'
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Release {
  id: string;
  type: ContentType;
  title: string;
  year: number;
  synopsis: string;
  tags: string[];
  recommended: boolean;
  posterUrl: string;
}

export interface ServiceState {
  id: string;
  name: string;
  status: ServiceStatus;
  note: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppConfig {
  navItems: NavItem[];
  hero: HeroConfig;
  features: FeatureCard[];
  releases: Release[];
  services: ServiceState[];
  blog: BlogPost[];
  faq: FAQItem[];
  theme: {
    primaryColor: string;
    radius: string;
  };
}
