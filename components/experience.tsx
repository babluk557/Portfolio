"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Coastr",
      location: "Bengaluru, India",
      period: "November 2022 – Present",
      responsibilities: [
        "Developed the Driver Scheduler system using React and Node.js, significantly enhancing driver allocation efficiency and minimizing idle time through optimized scheduling algorithms.",
        "Integrated telematics for real-time tracking of over 200 vehicles with AWS, enabling keyless entry and contactless rentals, which improved the customer experience.",
        "Optimized GraphQL APIs for booking management, significantly improving response times and enhancing application performance for end users.",
        "Led a team of 3 junior developers, providing mentorship, conducting code reviews, and ensuring timely delivery of high-quality software projects in an Agile environment.",
        "Migrated React app from CRA to Vite, substantially reducing build time and improving application performance using modern frontend tools.",
        "Designed a Driver Tracking System with real-time location tracking and profile pictures, enhancing operational visibility and user interface with TypeScript and SCSS.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "AWS", "Vite"],
    },
    {
      title: "Software Engineer Intern",
      company: "Coastr",
      location: "Bengaluru, India",
      period: "March 2022 – November 2022",
      responsibilities: [
        "Built and optimized booking management features using React and Node.js, streamlining reservation workflows for an improved user experience in a vehicle rental platform.",
        "Enhanced customer portal UI with Material-UI, improving user experience through intuitive design and responsive layouts.",
        "Developed vehicle inventory system components with JavaScript, improving fleet visibility and availability tracking for operational efficiency.",
        "Resolved numerous critical bugs within project timelines, enhancing system reliability and ensuring seamless functionality using unit testing and debugging.",
      ],
      technologies: ["React", "JavaScript", "Node.js", "Material-UI"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-primary/10 shadow-md">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/10 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location} | {exp.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/20 bg-primary/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
