"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Terminal, Layers, Cpu, Cloud, GitBranch, LayoutGrid } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <Globe className="w-8 h-8 mb-3 text-primary" /> },
        { name: "TypeScript", icon: <Code className="w-8 h-8 mb-3 text-primary" /> },
        { name: "JavaScript", icon: <Terminal className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Redux", icon: <Layers className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Material-UI", icon: <LayoutGrid className="w-8 h-8 mb-3 text-primary" /> },
        { name: "SCSS/CSS", icon: <Cpu className="w-8 h-8 mb-3 text-primary" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <Server className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Express.js", icon: <Terminal className="w-8 h-8 mb-3 text-primary" /> },
        { name: "GraphQL", icon: <Database className="w-8 h-8 mb-3 text-primary" /> },
        { name: "REST APIs", icon: <Globe className="w-8 h-8 mb-3 text-primary" /> },
      ],
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "Redis", icon: <Database className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Couchbase", icon: <Database className="w-8 h-8 mb-3 text-primary" /> },
        { name: "SQL/NoSQL", icon: <Database className="w-8 h-8 mb-3 text-primary" /> },
        { name: "AWS", icon: <Cloud className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Docker", icon: <Layers className="w-8 h-8 mb-3 text-primary" /> },
        { name: "Git", icon: <GitBranch className="w-8 h-8 mb-3 text-primary" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary/10"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {skill.icon}
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
