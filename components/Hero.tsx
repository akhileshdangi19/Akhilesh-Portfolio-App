"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            Available for new opportunities
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Akhilesh Dangi</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-2 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            3+ Years Experience in MEAN/MERN Stack Development. Passionate about creating scalable web applications and
            delivering exceptional user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              Indore, India
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              +91 8349276080
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              akhileshdangi022@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/akhilesh-dangi-568756189/" target="_blank">
              <Button variant="outline" size="lg">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/akhileshdangi19" target="_blank">
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </Link>
            <Button size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center">
            <Link href="#about">
              <Button variant="ghost" className="animate-bounce">
                Scroll to learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
