"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
  color?: "yellow" | "purple"
}

export default function SkillBadge({ name, level, color = "yellow" }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getGradient = () => {
    return color === "yellow"
      ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
      : "bg-gradient-to-r from-purple-400 to-pink-600"
  }

  const getHoverBg = () => {
    return color === "yellow" ? "hover:bg-yellow-900/20" : "hover:bg-purple-900/20"
  }

  return (
    <div
      className={cn(
        "relative px-4 py-2 rounded-full transition-all duration-300 cursor-pointer",
        "bg-gray-800/80 backdrop-blur-sm",
        getHoverBg(),
        isHovered ? "pr-16" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-gray-300">{name}</span>
      {isHovered && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          <div className="w-10 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full ${getGradient()}`} style={{ width: `${level}%` }}></div>
          </div>
        </div>
      )}
    </div>
  )
}
