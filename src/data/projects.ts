export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: "web" | "mobile" | "desktop" | "other";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Universitaria",
    description: "Plataforma web para la administración de estudiantes, cursos y calificaciones.",
    longDescription: "Sistema completo de gestión universitaria desarrollado con React y Node.js. Permite a los estudiantes ver sus calificaciones, inscribirse a materias, y a los profesores gestionar sus cursos. Incluye dashboard administrativo para la gestión de usuarios y reportes.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/daniel-acuna/sistema-universitario",
    demo: "https://sistema-universitario-demo.netlify.app",
    category: "web",
    featured: true
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description: "Sitio web personal desarrollado con React y Tailwind CSS.",
    longDescription: "Portafolio web moderno y responsive creado como proyecto académico para la UATF. Implementa metodología Scrum, control de versiones con Git, y mejores prácticas de desarrollo web. Incluye secciones de proyectos, habilidades, educación y contacto.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    github: "https://github.com/daniel-acuna/portafolio",
    demo: "https://daniel-acuna-portfolio.netlify.app",
    category: "web",
    featured: true
  },
  {
    id: 3,
    title: "Sistema de Inventario",
    description: "Aplicación para el control de inventario y gestión de productos.",
    longDescription: "Sistema de inventario desarrollado para pequeñas y medianas empresas. Permite el registro de productos, control de stock, generación de reportes y gestión de proveedores. Interfaz intuitiva y fácil de usar.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com/daniel-acuna/sistema-inventario",
    category: "web",
    featured: true
  },
  {
    id: 4,
    title: "Blog de Tecnología",
    description: "Blog personal sobre desarrollo web y tecnologías emergentes.",
    longDescription: "Blog desarrollado para compartir conocimientos sobre desarrollo web, tutoriales y experiencias de aprendizaje. Sistema de comentarios, búsqueda de artículos y categorización por temas.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    technologies: ["React", "Next.js", "Markdown", "Tailwind CSS"],
    github: "https://github.com/daniel-acuna/tech-blog",
    demo: "https://daniel-tech-blog.netlify.app",
    category: "web",
    featured: false
  },
  {
    id: 5,
    title: "Calculadora Científica",
    description: "Calculadora web con funciones científicas avanzadas.",
    longDescription: "Calculadora científica completa con operaciones básicas, trigonométricas, logarítmicas y estadísticas. Interfaz responsive y fácil de usar, con historial de cálculos.",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "CSS Modules"],
    github: "https://github.com/daniel-acuna/calculadora",
    demo: "https://calculadora-cientifica-da.netlify.app",
    category: "web",
    featured: false
  },
  {
    id: 6,
    title: "Lista de Tareas",
    description: "Aplicación para gestión de tareas con categorías y prioridades.",
    longDescription: "Todo list app con funcionalidades avanzadas: categorización de tareas, niveles de prioridad, fechas límite, filtros y búsqueda. Almacenamiento local para persistencia de datos.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS"],
    github: "https://github.com/daniel-acuna/todo-app",
    demo: "https://todo-app-daniel.netlify.app",
    category: "web",
    featured: false
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const allProjects = projects;