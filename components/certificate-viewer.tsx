"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CertificateModal } from "@/components/certificate-modal"

interface CertificateData {
  id: string
  title: string
  imageUrl: string
  verifyUrl?: string
}

export function CertificateViewer({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCertificate, setCurrentCertificate] = useState<CertificateData | null>(null)

  const certificates: CertificateData[] = [
    {
      id: "algorithmic-toolbox",
      title: "Algorithmic Toolbox - UC San Diego",
      imageUrl: "/certificates/algorithmic-toolbox.jpg",
      verifyUrl: "https://coursera.org/verify/PQLV3PDUTBVG",
    },
    {
      id: "java-oop",
      title: "Object Oriented Programming in Java - UC San Diego",
      imageUrl: "/certificates/java-oop.jpg",
      verifyUrl: "https://coursera.org/verify/93DYJX2EMUN7",
    },
    {
      id: "data-structures",
      title: "Data Structures - UC San Diego",
      imageUrl: "/certificates/data-structures.jpg",
      verifyUrl: "https://coursera.org/verify/JN6EF3U3A2KE",
    },
    {
      id: "python-data-science",
      title: "Python for Data Science, AI & Development - IBM",
      imageUrl: "/certificates/python-data-science.jpg",
      verifyUrl: "https://coursera.org/verify/XX8RV657XLQC",
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
