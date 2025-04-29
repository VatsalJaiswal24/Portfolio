"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  codeUrl: string
  color?: "yellow" | "purple"
  hideDemo?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  codeUrl,
  color = "purple",
  hideDemo = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getBorderColor = () => {
    return color === "yellow" ? "hover:border-yellow-500/30" : "hover:border-purple-500/30"
  }

  const getTextColor = () => {
    return color === "yellow" ? "text-yellow-400" : "text-purple-400"
  }

  const getHoverBg = () => {
    return color === "yellow" ? "hover:bg-yellow-900/20" : "hover:bg-purple-900/20"
  }

  return (
    <div
      className={`bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-800 ${getBorderColor()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 30px -10px rgba(255, 204, 0, 0.2)" : "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="p-6 flex-grow">
        <h3 className={`text-xl font-semibold mb-3 ${getTextColor()}`}>{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-800 flex justify-between">
        {!hideDemo && demoUrl && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={`${getTextColor()} hover:text-yellow-300 ${getHoverBg()}`}
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              Demo
            </a>
          </Button>
        )}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className={`${getTextColor()} hover:text-yellow-300 ${getHoverBg()} ${hideDemo ? "ml-auto" : ""}`}
        >
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            Code
          </a>
        </Button>
      </div>
    </div>
  )
}
