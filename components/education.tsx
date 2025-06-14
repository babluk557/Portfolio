"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2019 – 2022",
      grade: "CGPA: 7.2",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2016 – 2019",
      grade: "CGPA: 7.2",
    },
  ]

  const certifications = [
    {
      name: "Data Structures and Algorithms: Self-paced",
      issuer: "GeeksforGeeks",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/10 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle>{edu.degree}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-primary">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.location}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p className="font-medium mt-2">{edu.grade}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 text-primary" /> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/10 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle>{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-primary">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
