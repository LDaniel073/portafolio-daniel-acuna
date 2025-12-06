import { education, certificates } from "@/data/education";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educación y Certificaciones
          </h2>
          <p className="text-muted-foreground text-lg">
            Mi trayectoria académica y formación continua
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Formación Académica</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        {edu.current && (
                          <Badge className="w-fit">Actual</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.description && (
                        <p className="text-muted-foreground mt-4">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certificaciones y Cursos</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center justify-between mt-2">
                        <span>{cert.issuer}</span>
                        <Badge variant="outline">{cert.date}</Badge>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  {cert.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}