"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CertificateCardProps {
  id: string
  title: string
  issuer: string
  date: string
  delay?: number
}

function CertificateCard({ id, title, issuer, date, delay = 0 }: CertificateCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group bg-gray-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30 h-full flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-yellow-400 flex-1">{title}</h3>
          <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full ml-2 whitespace-nowrap">
            {date}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 flex-grow">Issued by {issuer}</p>
        <div className="flex justify-end mt-auto">
          <Button
            variant="ghost"
            size="sm"
            className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => {
              // @ts-ignore - This is a client component function
              window.openCertificateModal(id)
            }}
          >
            <ExternalLink size={16} className="mr-2" />
            View Certificate
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function CertificatesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const certificatesByCategory = {
    core: [
      {
        id: "algorithmic-toolbox",
        title: "Algorithmic Toolbox",
        issuer: "UC San Diego",
        date: "Mar 30, 2023",
      },
      {
        id: "data-structures",
        title: "Data Structures",
        issuer: "UC San Diego",
        date: "Mar 30, 2023",
      },
      {
        id: "java-oop",
        title: "Object Oriented Programming in Java",
        issuer: "UC San Diego",
        date: "Nov 13, 2022",
      },
      {
        id: "java-arrays",
        title: "Java Programming: Arrays, Lists, and Structured Data",
        issuer: "Duke University",
        date: "Nov 13, 2022",
      },
      {
        id: "python-basics",
        title: "Python Basics",
        issuer: "University of Michigan",
        date: "Feb 2, 2022",
      },
    ],
    dataScienceAI: [
      {
        id: "python-data-science",
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "May 2, 2022",
      },
      {
        id: "intro-ai",
        title: "Introduction to Artificial Intelligence (AI)",
        issuer: "IBM",
        date: "Feb 3, 2022",
      },
      {
        id: "sql-data-science",
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        date: "Nov 29, 2023",
      },
      {
        id: "nosql-databases",
        title: "Introduction to NoSQL Databases",
        issuer: "IBM",
        date: "Nov 27, 2023",
      },
    ],
    projects: [
      {
        id: "tic-tac-toe",
        title: "Create a Tic-Tac-Toe game in Python",
        issuer: "Coursera Project Network",
        date: "May 5, 2023",
      },
      {
        id: "interactive-fiction",
        title: "Create an interactive fiction adventure game with Python",
        issuer: "Coursera Project Network",
        date: "May 5, 2023",
      },
    ],
    design: [
      {
        id: "human-centered-design",
        title: "Human-Centered Design for Inclusive Innovation",
        issuer: "University of Toronto",
        date: "Apr 18, 2022",
      },
    ],
  }

  // Helper function to convert date strings to sortable values
  const getDateSortValue = (dateStr: string) => {
    const months = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    }

    if (dateStr.includes(" ")) {
      const [month, day, year] = dateStr.split(" ")
      return Number.parseFloat(`${year}.${months[month as keyof typeof months]}.${day.replace(",", "")}`)
    }

    return Number.parseInt(dateStr)
  }

  // Combine all certificates for the "All" tab
  const allCertificates = [
    ...certificatesByCategory.core,
    ...certificatesByCategory.dataScienceAI,
    ...certificatesByCategory.projects,
    ...certificatesByCategory.design,
  ].sort((a, b) => getDateSortValue(b.date) - getDateSortValue(a.date))

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
              Certificates
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A collection of certificates earned through various courses and projects, showcasing my continuous learning
            journey and skill development in different areas of technology.
          </p>
        </ScrollReveal>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
              >
                All Certificates
              </TabsTrigger>
              <TabsTrigger
                value="core"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
              >
                Core Courses
              </TabsTrigger>
              <TabsTrigger
                value="dataScienceAI"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
              >
                Data Science & AI
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
              >
                Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCertificates.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  id={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesByCategory.core.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  id={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataScienceAI" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesByCategory.dataScienceAI.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  id={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesByCategory.projects.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  id={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesByCategory.design.map((cert, index) => (
                <CertificateCard
                  key={cert.id}
                  id={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
