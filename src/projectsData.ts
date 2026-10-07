export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  year: string;
  role: string;
  client: string;
  mockupType: 'nova' | 'greenhouse' | 'flow';
  deliverables: string[];
  metrics: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'nova-studio',
    title: 'Nova Studio — Brand Identity',
    category: 'Brand Identity',
    shortDescription: 'A complete visual identity system, typography guidelines, and digital brand presence for a modern architectural studio.',
    fullDescription: 'Nova Studio requested a contemporary visual identity that reflects their clean architectural principles. We crafted a minimalist typographic logo system, custom grid layouts, warm neutral brand color palettes, and comprehensive physical and digital guidelines.',
    tags: ['Branding', 'Visual System', 'Typography', 'Figma'],
    year: '2025',
    role: 'Lead Brand & UI Designer',
    client: 'Nova Architecture Studio',
    mockupType: 'nova',
    deliverables: ['Brand Guidelines', 'Logo System', 'Stationery Kit', 'Digital Assets'],
    metrics: '40% increase in brand recognition & client inquiries'
  },
  {
    id: 'greenhouse',
    title: 'Greenhouse — Website Design',
    category: 'Website Design',
    shortDescription: 'An editorial e-commerce and storytelling web experience designed for a sustainable architecture and indoor plant practice.',
    fullDescription: 'Greenhouse combines sustainable biophilic design with indoor plant cultivation. We designed an immersive web experience with rich typography, seamless shopping flows, and interactive plant care guides built with performance and accessibility at the core.',
    tags: ['Web Design', 'UI/UX', 'Editorial Layout', 'Animation'],
    year: '2025',
    role: 'Creative Director & Front-end Developer',
    client: 'Greenhouse Collective',
    mockupType: 'greenhouse',
    deliverables: ['Responsive Website', 'Design System', 'Custom E-commerce UI', 'Micro-interactions'],
    metrics: '+65% mobile engagement and 3.2x higher conversion rate'
  },
  {
    id: 'flow-app',
    title: 'Flow — Mobile App',
    category: 'Mobile App',
    shortDescription: 'A minimal habit tracking and mindful focus application featuring intuitive gestures and dark-mode glassmorphic visuals.',
    fullDescription: 'Flow is an iOS productivity app built for creators who want to track habits without clutter. Designed with a calm dark aesthetic, intuitive gesture controls, interactive widget states, and smooth haptic feedback.',
    tags: ['Product Design', 'iOS App', 'Interaction Design', 'Prototyping'],
    year: '2024',
    role: 'Product Designer',
    client: 'Flow Technologies',
    mockupType: 'flow',
    deliverables: ['iOS App Concept', 'Design Tokens', 'Interactive Prototype', 'App Store Assets'],
    metrics: 'Featured on App Store as "App of the Day" with 100k+ downloads'
  }
];
