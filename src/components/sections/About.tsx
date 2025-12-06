import { personalInfo } from "@/data/personal-info";
import { Card } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre Mí
            </h2>
            <p className="text-muted-foreground text-lg">
              Conoce más sobre mi trayectoria y objetivos
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center items-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <User className="w-32 h-32 text-primary/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Nombre</h3>
                    <p className="text-muted-foreground">{personalInfo.name}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Educación</h3>
                    <p className="text-muted-foreground">{personalInfo.title}</p>
                    <p className="text-sm text-muted-foreground">{personalInfo.university}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Intereses</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {personalInfo.interests.slice(0, 3).map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            {personalInfo.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interests Grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Mis Intereses
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {personalInfo.interests.map((interest, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all cursor-default"
                >
                  <span className="font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}