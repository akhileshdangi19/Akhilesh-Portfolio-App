import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Users, Zap } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "3+ Years Experience",
      description: "Full-stack development with modern technologies",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Agile development and cross-functional teamwork",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Focus",
      description: "Optimized applications with scalable architecture",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate Developer & Problem Solver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a dedicated Full Stack Developer with expertise in MEAN/MERN stack technologies. I love building
              scalable web applications that solve real-world problems and create exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">Bachelor of Engineering - Computer Science & Engineering</h4>
                    <p className="text-muted-foreground">Acropolis Institute Of Technology & Research, Indore</p>
                    <p className="text-sm text-muted-foreground">July 2016 - July 2020</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
