"use client"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function CertificateModal({ isOpen, onClose, imageUrl, title }: CertificateModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </Button>
        </div>
        <div className="relative p-2 bg-white">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} Certificate`}
            width={1000}
            height={700}
            className="w-full h-auto"
          />
        </div>
        <div className="p-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
