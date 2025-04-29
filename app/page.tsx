import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingNav } from "@/components/floating-nav"
import { EducationSection } from "@/components/education-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto z-10 w-full">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Vatsal
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Jaiswal
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl mb-6 text-gray-300">Computer Science Engineering Student</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 mb-8 max-w-md">
                Passionate about AI, Machine Learning, and building innovative solutions. Specializing in creating
                responsive and interactive web experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex mt-8 gap-4">
                <a
                  href="https://github.com/VatsalJaiswal24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/vatsal-jaiswal-7172a824b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:VatsalJaiswal1@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <ScrollReveal>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 blur opacity-20 animate-pulse"></div>
                <div className="absolute -inset-10 bg-[#0a0a0a] rounded-full blur-md opacity-80 -z-10"></div>

                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-yellow-500/30">
                  <Image src="/profile.png" alt="Profile" fill className="object-cover" priority />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                  AI Enthusiast
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                  Developer
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#about" className="text-gray-400 hover:text-yellow-400">
            <ChevronDown size={32} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
                About Me
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Profile</h3>
                <p className="text-gray-300 mb-4">
                  An ambitious Computer Science Engineering student, passionate about new ideas and technology.
                  Specializing in Artificial Intelligence and Machine Learning with strong problem-solving skills and
                  analytical thinking abilities.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="text-md font-medium mb-2 text-yellow-400/90">Education Focus</h4>
                  <p className="text-gray-300">
                    Currently pursuing a B.Tech in Computer Science Engineering with a specialization in Artificial
                    Intelligence and Machine Learning at Noida Institute of Engineering and Technology.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-purple-400" size={18} />
                    <span className="text-gray-300">VatsalJaiswal1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-purple-400" size={18} />
                    <span className="text-gray-300">91-8299534645</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-purple-400" size={18} />
                    <span className="text-gray-300">Saket, New Delhi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="text-purple-400" size={18} />
                    <a
                      href="https://github.com/VatsalJaiswal24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      github.com/VatsalJaiswal24
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-purple-400" size={18} />
                    <a
                      href="https://linkedin.com/in/vatsal-jaiswal-7172a824b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      linkedin.com/in/vatsal-jaiswal-7172a824b
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Languages</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">English</span>
                      <span className="text-yellow-400">Fluent</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-purple-600 w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Hindi</span>
                      <span className="text-yellow-400">Native</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-purple-600 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
                Skills
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800">
                <h3 className="text-2xl font-semibold mb-8 text-yellow-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                  Coding Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Python" level={90} color="yellow" />
                  <SkillBadge name="SQL" level={85} color="yellow" />
                  <SkillBadge name="Java" level={80} color="yellow" />
                  <SkillBadge name="HTML" level={95} color="yellow" />
                  <SkillBadge name="CSS" level={90} color="yellow" />
                  <SkillBadge name="JavaScript" level={85} color="yellow" />
                  <SkillBadge name="React" level={80} color="yellow" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800">
                <h3 className="text-2xl font-semibold mb-8 text-yellow-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Professional Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Leadership" level={85} color="purple" />
                  <SkillBadge name="Public Relations" level={80} color="purple" />
                  <SkillBadge name="Time Management" level={90} color="purple" />
                  <SkillBadge name="Communication" level={85} color="purple" />
                  <SkillBadge name="Critical Thinking" level={90} color="purple" />
                  <SkillBadge name="Problem Solving" level={95} color="purple" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
                Projects
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <ProjectCard
                title="Portfolio"
                description="A website built using HTML, CSS, JavaScript showcases project skills and experience with an interactive and responsive design. It integrates dynamic content and seamless navigation for an engaging user experience."
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="#"
                codeUrl="#"
                color="yellow"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ProjectCard
                title="RideX"
                description="Ridex is a carpooling website built using prompt engineering techniques to streamline user interactions and enhance trip-matching efficiency. It connects drivers and riders with similar routes, offering a smart, eco-friendly, and cost-effective commuting solution."
                tags={["Web Development", "UX Design"]}
                demoUrl="https://drive-share-ridex.lovable.app/"
                codeUrl="https://github.com/VatsalJaiswal24/Ridex"
                color="yellow"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ProjectCard
                title="JARVIS"
                description="An AI desktop assistant built using Python and OpenAI's API, performs tasks like answering questions, setting reminders, and managing files. It offers intelligent, conversational support for enhanced productivity and convenience."
                tags={["Python", "AI", "OpenAI"]}
                codeUrl="https://github.com/VatsalJaiswal24/J.A.R.V.I.S"
                color="yellow"
                hideDemo={true}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
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
                  computational problems efficiently.
                </p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
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
                  In-depth study of OOP principles and their implementation in Java, including inheritance,
                  polymorphism, encapsulation, and abstraction.
                </p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
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
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2022</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Mastery of fundamental data structures including arrays, linked lists, stacks, queues, trees, and
                  graphs, with practical implementation experience.
                </p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
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
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">2023</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Specialized training in Python programming for data analysis, machine learning, and AI applications,
                  with hands-on project experience.
                </p>
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
                Get In Touch
              </span>
            </h2>
          </ScrollReveal>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">© 2024 Vatsal Jaiswal. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/VatsalJaiswal24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/vatsal-jaiswal-7172a824b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:VatsalJaiswal1@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
