"use client"
import { useState } from "react"
import Image from "next/image"
import { X, Minimize2, Maximize2, AlertCircle } from "lucide-react"
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
  const [imageError, setImageError] = useState(false)

  if (!isOpen) return null

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMinimized ? "w-64 h-16" : "w-full max-w-4xl max-h-[90vh]"
        }`}
      >
        {/* Header - Always visible */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
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
            {/* Scrollable content area */}
            <div className="overflow-y-auto max-h-[calc(90vh-130px)]">
              <div className="relative p-2 bg-white">
                {imageError ? (
                  <div className="flex flex-col items-center justify-center p-8 text-gray-500">
                    <AlertCircle size={48} className="mb-4" />
                    <p className="text-center">
                      Certificate image could not be loaded. Please try verifying the certificate using the link below.
                    </p>
                  </div>
                ) : (
                  <div className="relative w-full" style={{ height: "auto", maxHeight: "70vh" }}>
                    <Image
                      src={imageUrl || "/placeholder.svg?height=700&width=1000"}
                      alt={`${title} Certificate`}
                      width={1000}
                      height={700}
                      className="w-full h-auto object-contain"
                      onError={() => setImageError(true)}
                      unoptimized
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Always at bottom */}
            <div className="sticky bottom-0 p-4 flex justify-between bg-gray-900 border-t border-gray-800">
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
