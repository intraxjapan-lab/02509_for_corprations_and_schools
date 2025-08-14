export interface TabContent {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface Company {
  name: string;
  industry?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  program: string;
}

export type TabId = 'tab1' | 'tab2' | 'tab3' | 'tab4';

// GSAP type declarations
declare global {
  const gsap: any;
  const THREE: any;
}
