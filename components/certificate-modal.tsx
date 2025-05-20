"use client"
import { useState } from "react"
import Image from "next/image"
import { X, Minimize2, Maximize2, Award } from "lucide-react"
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

  // Only consider it a placeholder if it's directly using the placeholder.svg URL
  const isPlaceholder = imageUrl.includes("placeholder.svg") && !imageUrl.includes("/certificates/")

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
                {imageError || isPlaceholder ? (
                  <div className="flex flex-col items-center justify-center p-8 text-gray-700 bg-gray-100 rounded-lg">
                    <Award size={64} className="mb-4 text-yellow-500" />
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-center mb-4">
                      This certificate is available for verification using the link below.
                    </p>
                    {verifyUrl && (
                      <Button
                        variant="outline"
                        className="bg-yellow-500 text-black hover:bg-yellow-600"
                        onClick={() => window.open(verifyUrl, "_blank")}
                      >
                        Verify Certificate
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full" style={{ height: "auto", maxHeight: "70vh" }}>
                    <Image
                      src={imageUrl || "/placeholder.svg"}
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
              {verifyUrl && !isPlaceholder && !imageError && (
                <Button
                  variant="outline"
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"
                  onClick={() => window.open(verifyUrl, "_blank")}
                >
                  Verify Certificate
                </Button>
              )}
              <Button
                variant="outline"
                onClick={onClose}
                className={`${!verifyUrl || isPlaceholder || imageError ? "" : "ml-auto"}`}
              >
                Close
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
