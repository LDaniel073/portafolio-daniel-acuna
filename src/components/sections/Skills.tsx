import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench, Lightbulb } from "lucide-react";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
  other: Lightbulb,
};

const levelColors = {
  beginner: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  intermediate: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  advanced: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
};

const levelLabels = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías y herramientas que domino
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];

            return (
              <Card key={category.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className={levelColors[skill.level]}
                      >
                        {levelLabels[skill.level]}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades
          </p>
        </div>
      </div>
    </section>
  );
}
