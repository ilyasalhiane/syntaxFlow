export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  metric: string;
}

export interface TrustBadge {
  id: string;
  label: string;
  detail: string;
}

export const services: Service[] = [
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    description:
      'High-performance product engineering with Next.js, strict TypeScript, and headless CMS architectures tailored for enterprise scale.',
    technologies: ['Next.js', 'TypeScript', 'Headless CMS'],
  },
  {
    id: 'cloud-networking-infrastructure',
    title: 'Cloud & Networking Infrastructure',
    description:
      'Secure and scalable cloud/network foundations designed for resilience, observability, and enterprise-grade governance.',
    technologies: ['Cloud Architecture', 'Networking', 'Security'],
  },
  {
    id: 'digital-motion-creative-tech',
    title: 'Digital Motion & Creative Tech',
    description:
      'Video-driven digital experiences and AI-automated content pipelines that blend storytelling with technical precision.',
    technologies: ['Motion Design', 'Creative Automation', 'AI Workflows'],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: 'e-commerce-alpha',
    title: 'E-Commerce Alpha',
    summary:
      'Re-architected storefront experience with lightning-fast performance, modular CMS blocks, and conversion-driven micro-interactions.',
    tags: ['Custom Web Applications', 'Digital Motion & Creative Tech'],
    metric: '+38% conversion uplift',
  },
  {
    id: 'securenet-portal',
    title: 'SecureNet Portal',
    summary:
      'Designed and deployed a hardened multi-tenant operations portal with integrated network visibility and role-based access controls.',
    tags: ['Cloud & Networking Infrastructure', 'Custom Web Applications'],
    metric: '99.99% service availability',
  },
  {
    id: 'creative-content-engine',
    title: 'Creative Content Engine',
    summary:
      'Built an AI-assisted media orchestration platform to automate campaign content generation and accelerate publishing velocity.',
    tags: ['Digital Motion & Creative Tech', 'Cloud & Networking Infrastructure'],
    metric: '4x faster content delivery',
  },
];

export const trustBadges: TrustBadge[] = [
  {
    id: 'state-engineer-certification',
    label: 'Ingénieur d’État Certified',
    detail: 'State Engineer credentials ensuring rigorous technical foundations.',
  },
  {
    id: 'c1-english-proficiency',
    label: 'C1 English Proficiency',
    detail: 'Fluent cross-border collaboration for global stakeholders.',
  },
];
