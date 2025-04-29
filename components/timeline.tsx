"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function Timeline() {
  const educationData = [
    {
      degree: "Bachelor of Technology (Computer Science Engineering)",
      institution: "Noida Institute of Engineering and Technology",
      location: "Greater Noida",
      period: "2021/12 - 2025/08",
      details: "Specialization in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Higher Secondary Classes (XI & XII)",
      institution: "Sherwood Academy",
      location: "Lucknow",
      period: "2017/03 - 2019/03",
    },
    {
      degree: "Secondary classes (IX & X)",
      institution: "Hindustan Aeronautics Limited (HAL) School",
      location: "Lucknow",
      period: "2014/05 - 2016/04",
    },
  ]

  // Simpler implementation without useInView to ensure data displays properly
  const [visibleItems, setVisibleItems] = useState<boolean[]>(educationData.map(() => false))
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-pink-600"></div>

      <div className="space-y-16">
        {educationData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={cn(
              "relative flex flex-col md:flex-row",
              index % 2 === 0 ? "md:flex-row-reverse" : "",
              visibleItems[index] ? "opacity-100" : "opacity-0",
              "transition-opacity duration-1000 ease-in-out",
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-yellow-500 transform -translate-x-1/2 flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>

            {/* Content */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.degree}</h3>
                <p className="text-gray-300 mb-1">{item.institution}</p>
                <p className="text-gray-400 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
                {item.details && <p className="text-sm text-yellow-400/80 mt-2 italic">{item.details}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
