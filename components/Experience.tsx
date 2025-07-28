"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Invesmate Edtech Pvt Ltd",
    position: "MEAN Stack Developer",
    location: "West Bengal",
    duration: "Sept 2024 – Present",
    website: "https://invesmate.com",
    description: [
      "Contributed to the design, development, and deployment of scalable web applications for Invesmate Edtech Pvt Ltd.",
      "Involved in end-to-end development including front-end interfaces, back-end APIs, and database management.",
      "Collaborated with cross-functional teams to deliver user-centric solutions aligned with the company's mission of financial education.",
    ],
    technologies: ["JavaScript", "Angular", "Node.js", "MongoDB", "Express.js"],
  },
  {
    company: "Satyam IT Solution",
    position: "Software Developer",
    location: "Indore",
    duration: "April 2023 – Sep 2024",
    description: [
      "Worked as a Software Developer, involved in building and maintaining scalable web applications by transforming business requirements into efficient technical solutions.",
      "Involved in requirement understanding, time estimation, planning, development, and documentation throughout the project lifecycle.",
      "Contributed to both frontend and backend development with a focus on code quality and reusability.",
    ],
    domains: ["Sports Betting", "Fantasy Sports", "Casino Applications", "Horse Racing Platforms"],
    technologies: ["JavaScript", "Angular", "React", "Node.js", "MongoDB"],
  },
  {
    company: "WebiWork Technologies Pvt. Ltd",
    position: "Web Application Developer",
    location: "Indore",
    duration: "Jan 2022 – March 2023",
    website: "https://webiwork.com/",
    description: [
      "Worked as a Web Application Developer, actively contributing to client-based projects by understanding requirements, analyzing design needs, and developing scalable web solutions.",
      "Participated in requirement gathering, analysis, and translating them into technical solutions.",
      "Involved in complete project lifecycle — estimation, planning, development, and documentation.",
      "Managed and maintained codebase using GitLab for version control and collaborated effectively with the development team.",
    ],
    technologies: ["JavaScript", "React", "Angular", "Node.js", "GitLab"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              3+ years of experience building scalable web applications across various domains
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {exp.position}
                        {exp.website && (
                          <Link href={exp.website} target="_blank" className="ml-2 inline-block">
                            <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                          </Link>
                        )}
                      </CardTitle>
                      <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.domains && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Domains:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.domains.map((domain, idx) => (
                          <Badge key={idx} variant="secondary">
                            {domain}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
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
