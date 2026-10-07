export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram';
  username: string;
}

export interface SkillItem {
  name: string;
  status: 'Learning' | 'Practicing' | 'Proficient' | 'Exploring';
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  status: 'In Progress' | 'Active / Current' | 'Concept' | 'Research & Concept';
  category: 'Web' | 'IoT / Hardware' | 'Cybersecurity' | 'Concept';
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  keyCoursework: string[];
  note?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  intro: string;
  currentStatus: string;
  aboutText: string[];
  learningJourney: {
    title: string;
    description: string;
    icon: string;
  }[];
}
