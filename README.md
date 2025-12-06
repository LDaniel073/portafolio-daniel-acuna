# Portafolio Personal - Daniel Acuña

Portafolio web profesional desarrollado como proyecto académico para la Universidad Autónoma Tomás Frías (UATF).

## 📋 Descripción del Proyecto

Este portafolio web fue desarrollado como parte de un proyecto universitario que integra metodología Scrum, control de versiones con Git, y desarrollo web moderno con React. El sitio muestra mi perfil profesional, habilidades técnicas, proyectos realizados y formas de contacto.

**Estudiante:** Daniel Acuña
**Universidad:** Universidad Autónoma Tomás Frías (UATF)
**Carrera:** Ingeniería de Sistemas
**Fecha:** Diciembre 2025

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Librería de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Build tool y dev server de nueva generación
- **Tailwind CSS** - Framework de CSS utility-first para diseño rápido
- **shadcn/ui** - Colección de componentes UI reutilizables y accesibles

### Herramientas de Desarrollo
- **Bun** - Package manager y runtime de JavaScript ultra-rápido
- **Biome** - Linter y formateador de código
- **Git** - Sistema de control de versiones
- **GitHub** - Plataforma de hosting de código
- **Netlify** - Plataforma de deployment y hosting

### Librerías Adicionales
- **Lucide React** - Iconos modernos y personalizables
- **clsx** - Utilidad para concatenar clases CSS
- **tailwind-merge** - Merge de clases de Tailwind sin conflictos

## 📦 Instalación

### Prerrequisitos
- **Node.js** versión 18 o superior
- **Bun** (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/portafolio-daniel-acuna.git
cd portafolio-daniel-acuna
```

2. **Instalar dependencias**
```bash
# Usando Bun (recomendado)
bun install

# O usando npm
npm install
```

3. **Configurar variables de entorno (opcional)**
```bash
cp .env.example .env
# Editar .env con tus valores
```

4. **Ejecutar en modo desarrollo**
```bash
# Usando Bun
bun run dev

# O usando npm
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

## 🎯 Uso

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
bun run dev

# Compilar para producción
bun run build

# Previsualizar build de producción
bun run preview

# Ejecutar linter
bun run lint

# Ejecutar linter y corregir automáticamente
bun run lint:fix
```

### Estructura de Comandos Git

```bash
# Crear nueva rama para feature
git checkout -b feature/nombre-feature

# Hacer commit siguiendo convenciones
git commit -m "feat: descripción del cambio"

# Push de la rama
git push -u origin feature/nombre-feature

# Crear Pull Request en GitHub
# Merge después de revisión
```

## ✨ Características Principales

### 🏠 Sección Hero
- Presentación inicial con nombre y rol
- Foto de perfil profesional
- Botones de llamada a la acción (CTA)
- Animaciones suaves de entrada

### 👤 Sección Sobre Mí
- Biografía personal
- Información sobre formación en UATF
- Intereses y objetivos profesionales

### 💻 Sección Habilidades
- Habilidades de frontend (React, TypeScript, Tailwind)
- Habilidades de backend (Node.js, Express)
- Herramientas y tecnologías
- Organizado por categorías con badges visuales

### 📁 Sección Proyectos
- Galería responsive de proyectos
- Tarjetas con hover effects
- Screenshots de cada proyecto
- Enlaces a GitHub y demos
- Tecnologías utilizadas por proyecto

### 🎓 Sección Educación
- Formación académica en UATF
- Cursos y certificaciones
- Timeline de educación

### 📧 Sección Contacto
- Formulario de contacto funcional
- Validación de campos
- Enlaces a redes sociales
- Información de contacto directo

### 🎨 Características de Diseño
- **Responsive Design:** Funciona perfectamente en móvil, tablet y desktop
- **Navegación Fija:** Barra de navegación siempre accesible
- **Smooth Scroll:** Desplazamiento suave entre secciones
- **Animaciones:** Transiciones y animaciones sutiles
- **Accesibilidad:** Navegación por teclado, alto contraste, etiquetas semánticas

## 🗂️ Estructura del Proyecto

```
portafolio-daniel-acuna/
├── node_modules/               # Dependencias instaladas (gestionado por npm/yarn) 
├── public/                     # Assets estáticos
│   ├── images/
│   └── assets/
├── src/
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes shadcn/ui
|   |   |   ├─ badge.tsx
|   |   |   ├─ button.tsx
|   |   |   ├─ card.tsx
|   |   |   ├─ input.tsx
|   |   |   ├─ separator.tsx
|   |   |   └─ textarea.tsx
│   │   ├── layout/           # Header, Footer, Navigation
|   |   |   ├─ Footer.tsx
|   |   |   └─ Header.tsx
│   │   ├── sections/         # Hero, About, Projects, etc.
|   |   |   ├─ About.tsx
|   |   |   ├─ Contact.tsx
|   |   |   ├─ Education.tsx
|   |   |   ├─ Hero.tsx
|   |   |   ├─ Projects.tsx
|   |   |   └─ Skills.tsx
│   │   └── shared/           # Componentes reutilizables
│   ├── data/                 # Datos estáticos (proyectos, skills)
|   |   ├─ education.ts
|   |   ├─ personal-info.ts
|   |   ├─ projects.ts
|   |   └─ skill.ts
│   ├── hooks/                # Custom React Hooks
│   ├── lib/                  # Utilidades
|   |   └─ utils.ts
│   ├── styles/               # Estilos CSS
│   ├── types/                # TypeScript types
│   ├── App.tsx               # Componente principal
│   └── main.tsx              # Entry point
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 👨‍💻 Información del Autor

**Nombre:** Daniel Acuña
**Universidad:** Universidad Autónoma Tomás Frías (UATF)
**Carrera:** Ingeniería de Sistemas
**Ubicación:** Potosí, Bolivia

**Contacto:**
- Email: daniel.acuna@uatf.edu.bo
- GitHub: [@daniel-acuna](https://github.com/daniel-acuna)
- LinkedIn: [Daniel Acuña](https://linkedin.com/in/daniel-acuna)

## 📚 Metodología de Desarrollo

Este proyecto fue desarrollado siguiendo metodología **Scrum** con las siguientes prácticas:

- **Sprint Planning:** Planificación de historias de usuario
- **Daily Scrum:** Seguimiento diario del progreso
- **Sprint Review:** Demostración del trabajo completado
- **Sprint Retrospective:** Reflexión y mejora continua

**Gestión de Código:**
- Control de versiones con **Git**
- Repositorio en **GitHub**
- Estrategia de branching: GitFlow modificado
- Convenciones de commits: **Conventional Commits**
- Code review mediante **Pull Requests**

## 📖 Documentación Adicional

Para más información sobre el desarrollo del proyecto, consulta:

- [Configuración Inicial](/.same/2.1-configuracion-inicial.md)
- [Estrategia de Branching](/.same/2.3-estrategia-branching.md)
- [Flujo de Trabajo Git](/.same/2.4-flujo-trabajo-git.md)
- [Convenciones de Commits](/.same/2.5-convenciones-commits.md)
- [Estructura del Proyecto](/.same/2.6-estructura-proyecto.md)
- [Planificación Scrum](/.same/parte-1-scrum.md)

## 🚀 Deployment

El portafolio está desplegado en **Netlify** y se actualiza automáticamente con cada push a la rama `main`.

**URL de Producción:** [Pendiente de deployment]

### Deploy Manual

```bash
# Build de producción
bun run build

# Los archivos compilados estarán en /dist
# Subir carpeta dist a Netlify
```

## 📄 Licencia

Este proyecto es de uso académico para la Universidad Autónoma Tomás Frías.

© 2025 Daniel Acuña. Todos los derechos reservados.

## 🙏 Agradecimientos

- Universidad Autónoma Tomás Frías (UATF)
- Profesor de la materia
- Comunidad de React y Open Source

---

**Desarrollado con ❤️ por Daniel Acuña**