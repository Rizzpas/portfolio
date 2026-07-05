export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  type?: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
  gpa?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  imageUrl?: string;
  status?: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
}
