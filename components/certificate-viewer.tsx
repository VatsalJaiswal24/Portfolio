"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CertificateModal } from "@/components/certificate-modal"

interface CertificateData {
  id: string
  title: string
  imageUrl: string
  verifyUrl?: string
  category: string
  issuer: string
  date: string
}

export function CertificateViewer({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCertificate, setCurrentCertificate] = useState<CertificateData | null>(null)

  const certificates: CertificateData[] = [
    // Core Courses
    {
      id: "algorithmic-toolbox",
      title: "Algorithmic Toolbox",
      imageUrl: "/certificates/algorithmic-toolbox-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/PQLV3PDUTBVG",
      category: "Core Courses",
      issuer: "UC San Diego",
      date: "Mar 30, 2023",
    },
    {
      id: "java-oop",
      title: "Object Oriented Programming in Java",
      imageUrl: "/certificates/java-oop-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/93DYJX2EMUN7",
      category: "Core Courses",
      issuer: "UC San Diego",
      date: "Nov 13, 2022",
    },
    {
      id: "data-structures",
      title: "Data Structures",
      imageUrl: "/certificates/data-structures-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/JN6EF3U3A2KE",
      category: "Core Courses",
      issuer: "UC San Diego",
      date: "Mar 30, 2023",
    },
    {
      id: "java-arrays",
      title: "Java Programming: Arrays, Lists, and Structured Data",
      imageUrl: "/certificates/java-arrays-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/UK6SB63NUZ7K",
      category: "Core Courses",
      issuer: "Duke University",
      date: "Nov 13, 2022",
    },
    {
      id: "python-basics",
      title: "Python Basics",
      imageUrl: "/certificates/python-basics-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/8KA7M34W363N",
      category: "Core Courses",
      issuer: "University of Michigan",
      date: "Feb 2, 2022",
    },

    // Data Science & AI
    {
      id: "python-data-science",
      title: "Python for Data Science, AI & Development",
      imageUrl: "/certificates/python-data-science-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/XX8RV657XLQC",
      category: "Data Science & AI",
      issuer: "IBM",
      date: "May 2, 2022",
    },
    {
      id: "intro-ai",
      title: "Introduction to Artificial Intelligence (AI)",
      imageUrl: "/certificates/intro-ai-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/WRNHR3M8TF56",
      category: "Data Science & AI",
      issuer: "IBM",
      date: "Feb 3, 2022",
    },
    {
      id: "sql-data-science",
      title: "Databases and SQL for Data Science with Python",
      imageUrl: "/certificates/sql-data-science-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/APTLV2JCZ3Q4",
      category: "Data Science & AI",
      issuer: "IBM",
      date: "Nov 29, 2023",
    },
    {
      id: "nosql-databases",
      title: "Introduction to NoSQL Databases",
      imageUrl: "/certificates/nosql-databases-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/ZCTVE27UR2A",
      category: "Data Science & AI",
      issuer: "IBM",
      date: "Nov 27, 2023",
    },

    // Programming Projects
    {
      id: "tic-tac-toe",
      title: "Create a Tic-Tac-Toe game in Python",
      imageUrl: "/certificates/tic-tac-toe-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/ZAXNJSC2LZHQ",
      category: "Programming Projects",
      issuer: "Coursera Project Network",
      date: "May 5, 2023",
    },
    {
      id: "interactive-fiction",
      title: "Create an interactive fiction adventure game with Python",
      imageUrl: "/certificates/interactive-fiction-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/E23KGAV7G2ZE",
      category: "Programming Projects",
      issuer: "Coursera Project Network",
      date: "May 5, 2023",
    },

    // Design & Innovation
    {
      id: "human-centered-design",
      title: "Human-Centered Design for Inclusive Innovation",
      imageUrl: "/certificates/human-centered-design-actual.jpeg",
      verifyUrl: "https://coursera.org/verify/RT7WA8ZJQYPB",
      category: "Design & Innovation",
      issuer: "University of Toronto",
      date: "Apr 18, 2022",
    },
  ]

  const openCertificateModal = (id: string) => {
    const certificate = certificates.find((cert) => cert.id === id)
    if (certificate) {
      setCurrentCertificate(certificate)
      setIsModalOpen(true)
    }
  }

  useEffect(() => {
    // Add the openCertificateModal function to the window object
    // @ts-ignore
    window.openCertificateModal = openCertificateModal

    // Clean up
    return () => {
      // @ts-ignore
      delete window.openCertificateModal
    }
  }, [])

  return (
    <>
      {children}
      {currentCertificate && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageUrl={currentCertificate.imageUrl}
          title={currentCertificate.title}
          verifyUrl={currentCertificate.verifyUrl}
        />
      )}
    </>
  )
}
