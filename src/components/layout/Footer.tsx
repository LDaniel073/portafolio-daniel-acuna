import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.social.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: personalInfo.social.linkedin,
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: personalInfo.social.twitter,
      icon: Twitter,
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {personalInfo.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {personalInfo.universityShort} - {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Conecta Conmigo</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/daniel-acuna/portafolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                Ver código del portafolio
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado con React, TypeScript y Tailwind CSS
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>Proyecto académico - {personalInfo.university}</p>
        </div>
      </div>
    </footer>
  );
}