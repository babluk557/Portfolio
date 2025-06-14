"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image src="/images/profile.png" alt="Bablu Kumar" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Full Stack Engineer</h3>
            <p className="text-muted-foreground mb-6">
              Full-stack Engineer with over 2 years of experience in building scalable web applications for the vehicle
              rental industry. Proficient in React, TypeScript, Node.js, GraphQL, REST APIs, and AWS, with a proven
              track record of enhancing operational efficiency and optimizing application performance.
            </p>
            <p className="text-muted-foreground mb-6">
              Skilled in leading teams, mentoring junior developers, and delivering high-quality, user-focused solutions
              using Agile methodologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border-primary/10 shadow-sm">
                <CardContent className="p-4">
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Begusarai, Bihar</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-sm">
                <CardContent className="p-4">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">kbablu557@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-sm">
                <CardContent className="p-4">
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91-9971-332017</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 shadow-sm">
                <CardContent className="p-4">
                  <p className="font-medium">Languages</p>
                  <p className="text-muted-foreground">English, Hindi</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
