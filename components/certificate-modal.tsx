"use client"
import { useState } from "react"
import Image from "next/image"
import { X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
  verifyUrl?: string
}

export function CertificateModal({ isOpen, onClose, imageUrl, title, verifyUrl }: CertificateModalProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  if (!isOpen) return null

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMinimized ? "w-64 h-16" : "w-full max-w-4xl"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="text-xl font-semibold text-yellow-400 truncate">{title}</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMinimize}
              className="text-gray-400 hover:text-white"
              aria-label={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="relative p-2 bg-white">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={`${title} Certificate`}
                width={1000}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <div className="p-4 flex justify-between">
              {verifyUrl && (
                <Button
                  variant="outline"
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"
                  onClick={() => window.open(verifyUrl, "_blank")}
                >
                  Verify Certificate
                </Button>
              )}
              <Button variant="outline" onClick={onClose} className="ml-auto">
                Close
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
