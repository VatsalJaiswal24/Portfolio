"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
              Certificates
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="group bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Algorithmic Toolbox</h3>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2023</span>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive training in algorithm design and analysis, covering essential techniques for solving
                computational problems efficiently. Issued by UC San Diego through Coursera.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    // @ts-ignore - This is a client component function
                    window.openCertificateModal("algorithmic-toolbox")
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="group bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Object Oriented Programming in Java</h3>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2022</span>
              </div>
              <p className="text-gray-300 mb-4">
                In-depth study of OOP principles and their implementation in Java, including inheritance, polymorphism,
                encapsulation, and abstraction. Issued by UC San Diego through Coursera.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    // @ts-ignore - This is a client component function
                    window.openCertificateModal("java-oop")
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="group bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Data Structures</h3>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2023</span>
              </div>
              <p className="text-gray-300 mb-4">
                Mastery of fundamental data structures including arrays, linked lists, stacks, queues, trees, and
                graphs, with practical implementation experience. Issued by UC San Diego through Coursera.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    // @ts-ignore - This is a client component function
                    window.openCertificateModal("data-structures")
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="group bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                  Python for Data Science, AI & Development
                </h3>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2022</span>
              </div>
              <p className="text-gray-300 mb-4">
                Specialized training in Python programming for data analysis, machine learning, and AI applications,
                with hands-on project experience. Issued by IBM through Coursera.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => {
                    // @ts-ignore - This is a client component function
                    window.openCertificateModal("python-data-science")
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
