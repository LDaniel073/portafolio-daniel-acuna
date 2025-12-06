export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: "intermediate", category: "frontend" },
  { name: "TypeScript", level: "intermediate", category: "frontend" },
  { name: "JavaScript", level: "advanced", category: "frontend" },
  { name: "HTML5", level: "advanced", category: "frontend" },
  { name: "CSS3", level: "advanced", category: "frontend" },
  { name: "Tailwind CSS", level: "intermediate", category: "frontend" },
  { name: "Vite", level: "intermediate", category: "frontend" },

  // Backend
  { name: "Node.js", level: "intermediate", category: "backend" },
  { name: "Express.js", level: "intermediate", category: "backend" },
  { name: "MongoDB", level: "beginner", category: "backend" },
  { name: "PostgreSQL", level: "beginner", category: "backend" },
  { name: "REST APIs", level: "intermediate", category: "backend" },

  // Tools
  { name: "Git", level: "intermediate", category: "tools" },
  { name: "GitHub", level: "intermediate", category: "tools" },
  { name: "VS Code", level: "advanced", category: "tools" },
  { name: "Figma", level: "beginner", category: "tools" },
  { name: "npm/Bun", level: "intermediate", category: "tools" },
  { name: "Netlify", level: "beginner", category: "tools" },

  // Other
  { name: "Scrum", level: "intermediate", category: "other" },
  { name: "Responsive Design", level: "advanced", category: "other" },
  { name: "UI/UX Principles", level: "intermediate", category: "other" },
];

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === "frontend"),
  backend: skills.filter(s => s.category === "backend"),
  tools: skills.filter(s => s.category === "tools"),
  other: skills.filter(s => s.category === "other"),
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Tecnologías para crear interfaces de usuario modernas",
    skills: skillsByCategory.frontend
  },
  {
    id: "backend",
    title: "Backend",
    description: "Desarrollo del lado del servidor y bases de datos",
    skills: skillsByCategory.backend
  },
  {
    id: "tools",
    title: "Herramientas",
    description: "Herramientas de desarrollo y colaboración",
    skills: skillsByCategory.tools
  },
  {
    id: "other",
    title: "Otras Habilidades",
    description: "Metodologías y principios de desarrollo",
    skills: skillsByCategory.other
  }
];