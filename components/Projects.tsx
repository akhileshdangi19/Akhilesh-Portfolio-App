import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Invesmate",
    role: "MEAN Stack Developer",
    website: "https://invesmate.com/",
    description:
      "Built and enhanced multiple web portals - Invesmate (Product), Admin Portal, Student Portal, Staff Portal, INVESTEEN (Product) with responsive design and optimized performance. Implemented RESTFUL API services and optimized MongoDB queries.",
    features: [
      "Multiple web portals development",
      "Responsive design implementation",
      "RESTFUL API services",
      "MongoDB query optimization",
      "Performance improvements",
    ],
    technologies: ["JavaScript", "Angular 11-17", "Node.js", "Express.js", "MongoDB", "EJS", "REST API", "Git", "JIRA"],
    image: "/placeholder.svg?height=200&width=400&text=Invesmate+Platform",
  },
  {
    title: "Luxury Outlands",
    role: "Next.js Frontend Developer",
    description:
      "Developed a luxury outdoor accommodation platform enabling users to explore and book curated stays like resorts, cabins, and safari tents globally. Focused on seamless booking experience, premium listings, and resort-like amenities.",
    features: [
      "Global luxury accommodation booking",
      "Curated premium listings",
      "Seamless booking experience",
      "Resort amenities showcase",
      "Responsive design",
    ],
    technologies: ["JavaScript", "Next.js", "Redux", "GraphQL API", "MySQL"],
    image: "/placeholder.svg?height=200&width=400&text=Luxury+Outlands",
  },
  {
    title: "Winexch",
    role: "Angular.js Frontend Developer",
    description:
      "Built a comprehensive sports betting and online casino platform covering World Casino, Star Casino, Betfair, horse racing, and greyhound racing. Implemented user management, responsible gambling tools, and real-time updates.",
    features: [
      "Sports betting platform",
      "Multiple casino integrations",
      "Real-time updates",
      "User management system",
      "Responsible gambling tools",
    ],
    technologies: ["JavaScript", "Angular 12 & 15", "Real-Time Database", "REST API", "Socket.IO", "SCSS"],
    image: "/placeholder.svg?height=200&width=400&text=Winexch+Platform",
  },
  {
    title: "Betproexch",
    role: "React.js Frontend Developer",
    description:
      "Developed a sports betting and casino web application with user management, payment gateway integration, and real-time updates. Worked on architecture design, CI pipeline setup, and performance optimization.",
    features: [
      "Sports betting & casino games",
      "Payment gateway integration",
      "Real-time updates",
      "CI/CD pipeline setup",
      "Performance optimization",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "REST API",
      "Stripe",
      "Vite.js",
      "SCSS",
      "Socket.IO",
      "WebSockets",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Betproexch",
  },
  {
    title: "Canary Green",
    role: "Next.js Frontend Developer",
    description:
      "Built an informational platform focused on exploring the health benefits of medical marijuana and cannabis products. Implemented dynamic routing, data visualization, and geo-location tracking.",
    features: [
      "Medical marijuana information platform",
      "Health benefits exploration",
      "Data visualization",
      "Geo-location tracking",
      "Dynamic routing",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "REST API",
      "Geo-location",
      "Chart.js",
      "Plotly",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Canary+Green",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent work across different domains and technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.role}</Badge>
                    </div>
                    <div className="flex gap-2">
                      {project.website && (
                        <Link href={project.website} target="_blank">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
