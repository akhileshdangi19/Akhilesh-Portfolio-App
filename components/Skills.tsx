"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = {
  frontend: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Angular", level: 88 },
    { name: "HTML/CSS", level: 95 },
    { name: "Redux Toolkit", level: 85 },
    { name: "NGXS", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "REST API", level: 90 },
    { name: "GraphQL", level: 75 },
    { name: "Socket.IO", level: 85 },
    { name: "EJS", level: 80 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD Pipeline", level: 80 },
    { name: "JIRA", level: 85 },
    { name: "GitLab", level: 85 },
    { name: "Stripe", level: 80 },
    { name: "Vite.js", level: 85 },
    { name: "WebSockets", level: 80 },
  ],
}

const allSkills = [
  "JavaScript",
  "TypeScript",
  "HTML-CSS",
  "Angular JS",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "NGXS",
  "React-Redux",
  "Redux ToolKit",
  "Docker",
  "CI/CD Pipeline",
  "Version Control Systems",
  "Git",
  "EJS",
  "Embedded JavaScript",
  "Socket.IO",
  "Stripe",
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground">Comprehensive skill set across the full development stack</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>All Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
