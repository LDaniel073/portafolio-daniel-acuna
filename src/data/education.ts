export interface Education {
  id: number;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  startYear: number;
  endYear?: number;
  location: string;
  description?: string;
  current: boolean;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "Universidad Autónoma Tomás Frías",
    degree: "Ingeniería de Sistemas",
    period: "2021 - Presente",
    startYear: 2021,
    location: "Potosí, Bolivia",
    description: "Carrera enfocada en el desarrollo de software, análisis de sistemas, bases de datos y gestión de proyectos tecnológicos. Participación activa en proyectos de desarrollo web y metodologías ágiles.",
    current: true
  },
  {
    id: 2,
    institution: "Colegio Nacional Pichincha",
    degree: "Bachillerato en Ciencias",
    period: "2015 - 2020",
    startYear: 2015,
    endYear: 2020,
    location: "Potosí, Bolivia",
    description: "Formación secundaria con énfasis en ciencias exactas y tecnología.",
    current: false
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    description: "Curso completo sobre React, incluyendo hooks, context API, Redux y mejores prácticas"
  },
  {
    id: 2,
    title: "Fundamentos de Scrum",
    issuer: "Scrum Study",
    date: "2024",
    description: "Certificación en metodología Scrum y prácticas ágiles de desarrollo"
  },
  {
    id: 3,
    title: "Git & GitHub Essentials",
    issuer: "Platzi",
    date: "2023",
    description: "Control de versiones con Git y GitHub, branching strategies y colaboración"
  },
  {
    id: 4,
    title: "TypeScript Fundamentals",
    issuer: "Frontend Masters",
    date: "2024",
    description: "Fundamentos de TypeScript, tipos, interfaces y programación orientada a objetos"
  }
];