import { PersonalInfo, SkillCategory, Project, EducationEntry, SocialLink } from './types';

/**
 * =========================================================================
 * NAMITHA REDDY - PORTFOLIO CONFIGURATION DATA
 * =========================================================================
 * This centralized file holds all personal information, skills, projects,
 * education records, and social links. You can easily edit any text,
 * add new projects, or update your social media links here.
 */

export const PERSONAL_INFO: PersonalInfo = {
  name: "Namitha Reddy",
  role: "Engineering Student & Aspiring Software Developer",
  headline: "Aspiring Developer. Curious Thinker. Constant Learner.",
  tagline: "Hi, I'm Namitha Reddy.",
  intro: "I'm an engineering student exploring software development, strengthening my programming fundamentals, and turning ideas into practical projects.",
  currentStatus: "Currently learning and building",
  aboutText: [
    "I am an engineering undergraduate passionate about understanding how software is designed, constructed, and scaled from first principles.",
    "Right now, I am focusing deeply on mastering Java, developing strong algorithmic problem-solving habits through Data Structures and Algorithms, and practicing version control with Git and GitHub.",
    "Rather than treating engineering as purely theoretical, I believe the most effective way to grow is by rolling up my sleeves and building projects—experimenting with concepts, learning from bugs, and steadily refining my craft with curiosity and consistency."
  ],
  learningJourney: [
    {
      title: "Algorithmic Foundations",
      description: "Practicing data structures and systematic problem-solving step by step to build intuition.",
      icon: "brain"
    },
    {
      title: "Modern Tooling",
      description: "Writing maintainable code, leveraging Git for version control, and using VS Code for efficient developer workflows.",
      icon: "terminal"
    },
    {
      title: "Practical Exploration",
      description: "Translating classroom concepts into real applications across web development, systems, and cybersecurity concepts.",
      icon: "code"
    }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/namitha-reddy",
    icon: "github",
    username: "namitha-reddy"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/namitha-reddy-2b6b222a7",
    icon: "linkedin",
    username: "namitha-reddy-2b6b222a7"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/namitha_reddy_r/",
    icon: "instagram",
    username: "@namitha_reddy_r"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    description: "Core languages used for coursework, logic building, and hands-on programming.",
    items: [
      { name: "C", status: "Proficient", highlight: true },
      { name: "Java (learning)", status: "Learning", highlight: true }
    ]
  },
  {
    title: "Development Tools",
    icon: "tools",
    description: "Essential tools and platforms utilized for workflow and code management.",
    items: [
      { name: "Git", status: "Practicing", highlight: true },
      { name: "GitHub", status: "Practicing", highlight: true },
      { name: "VS Code", status: "Proficient", highlight: true }
    ]
  },
  {
    title: "Computer Science Foundations",
    icon: "cpu",
    description: "Academic and conceptual pillars guiding logical software design.",
    items: [
      { name: "Programming Fundamentals", status: "Proficient", highlight: true },
      { name: "Problem Solving", status: "Practicing", highlight: true }
    ]
  },
  {
    title: "Currently Exploring",
    icon: "sparkles",
    description: "Active technical domains currently being studied and practiced.",
    items: [
      { name: "Data Structures & Algorithms", status: "Exploring", highlight: true },
      { name: "Web Development", status: "Exploring", highlight: true },
      { name: "Database Concepts", status: "Exploring", highlight: true }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio",
    status: "Active / Current",
    category: "Web",
    description: "A fast, responsive personal portfolio website crafted to showcase my continuous learning trajectory, programming fundamentals, and project concepts with a modern developer aesthetic.",
    highlights: [
      "Built with React and Vite for blazing-fast development and performance",
      "Designed with dark-mode charcoal aesthetic, subtle glows, and clean typography",
      "Config-driven architecture keeping all personal data modular and easy to maintain"
    ],
    tags: ["React", "TypeScript", "Vite", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/namitha-reddy",
    demoUrl: "#",
    featured: true
  },
  {
    id: "studytok",
    title: "StudyTok",
    status: "Concept",
    category: "Concept",
    description: "A student-centric educational platform concept envisioned to make studying and revision engaging by delivering concise, high-yield learning modules and interactive peer notes.",
    highlights: [
      "Conceptual micro-learning interface focused on short-form study sessions",
      "Designed to reduce cognitive overload during exam revision cycles",
      "Explores community-driven concept sharing for engineering students"
    ],
    tags: ["Product Concept", "UI/UX Design", "EdTech", "Web Platform"],
    githubUrl: "https://github.com/namitha-reddy",
    featured: true
  },
  {
    id: "smart-parking-system",
    title: "Smart Parking System",
    status: "Concept",
    category: "IoT / Hardware",
    description: "An IoT-based automated parking management architecture concept designed to track real-time slot occupancy using ultrasonic sensors, an ESP32 microcontroller, and an LCD status screen.",
    highlights: [
      "Hardware architecture concept linking ultrasonic sensors with ESP32 logic",
      "Simulates real-time slot vacancy detection to eliminate traffic congestion",
      "Provides local LCD telemetry and paves the way for cloud dashboard integration"
    ],
    tags: ["IoT Concept", "ESP32", "Embedded C", "Sensors", "Hardware Design"],
    githubUrl: "https://github.com/namitha-reddy",
    featured: false
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection Project",
    status: "Research & Concept",
    category: "Cybersecurity",
    description: "A cybersecurity investigation and concept project focused on heuristics and rule-based inspection to analyze suspicious URLs and fraudulent email headers.",
    highlights: [
      "Explores algorithmic URL parsing for deceptive domain structures and typosquatting",
      "Researches lexical feature extraction to identify common social engineering indicators",
      "Aims to provide a lightweight security verification tool for everyday users"
    ],
    tags: ["Cybersecurity", "Heuristic Analysis", "Python Concept", "Security Research"],
    githubUrl: "https://github.com/namitha-reddy",
    featured: false
  }
];

export const EDUCATION_DATA: EducationEntry = {
  degree: "Bachelor of Engineering (B.E. / B.Tech)",
  institution: "Engineering Institution", // Editable: Update with your exact college or university name
  period: "2023 – Present (Expected 2027)", // Editable: Update with your batch dates
  status: "Undergraduate Student • Active Enrolment",
  description: "Pursuing undergraduate engineering studies with a strong emphasis on core computer science foundations, analytical thinking, and applied engineering methodologies.",
  keyCoursework: [
    "Object-Oriented Programming (Java & C)",
    "Data Structures & Algorithmic Logic",
    "Computer Organization & Architecture",
    "Discrete Mathematics & Logic",
    "Database Management Systems Fundamentals",
    "Software Engineering Principles"
  ],
  note: "Coursework details can be adjusted to match exact university syllabus and completed semesters in portfolioData.ts."
};
