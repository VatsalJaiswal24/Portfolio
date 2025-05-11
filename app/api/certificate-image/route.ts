import { type NextRequest, NextResponse } from "next/server"
import { createCanvas } from "canvas"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const title = searchParams.get("title") || "Certificate"
    const issuer = searchParams.get("issuer") || "Coursera"
    const date = searchParams.get("date") || "January 1, 2023"
    const name = searchParams.get("name") || "Vatsal Jaiswal"
    const verifyUrl = searchParams.get("verifyUrl") || "coursera.org/verify/XXXXXX"

    // Create canvas
    const canvas = createCanvas(1000, 700)
    const ctx = canvas.getContext("2d")

    // Background
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Border
    ctx.strokeStyle = "#333333"
    ctx.lineWidth = 10
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)

    // Header
    ctx.fillStyle = "#333333"
    ctx.font = "bold 40px Arial"
    ctx.textAlign = "center"
    ctx.fillText("CERTIFICATE", canvas.width / 2, 80)

    // Issuer logo placeholder
    ctx.fillStyle = "#f0f0f0"
    ctx.fillRect(canvas.width / 2 - 100, 120, 200, 80)
    ctx.fillStyle = "#666666"
    ctx.font = "bold 24px Arial"
    ctx.fillText(issuer, canvas.width / 2, 170)

    // Date
    ctx.fillStyle = "#666666"
    ctx.font = "18px Arial"
    ctx.textAlign = "left"
    ctx.fillText(date, 50, 120)

    // Name
    ctx.fillStyle = "#333333"
    ctx.font = "bold 36px Arial"
    ctx.textAlign = "center"
    ctx.fillText(name, canvas.width / 2, 280)

    // Title
    ctx.fillStyle = "#333333"
    ctx.font = "bold 28px Arial"
    ctx.textAlign = "center"

    // Handle long titles by splitting them
    const words = title.split(" ")
    let line = ""
    const lines = []
    let y = 350

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " "
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > canvas.width - 100 && i > 0) {
        lines.push(line)
        line = words[i] + " "
      } else {
        line = testLine
      }
    }
    lines.push(line)

    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, y + index * 40)
    })

    // Description
    y = 350 + lines.length * 40 + 40
    ctx.fillStyle = "#666666"
    ctx.font = "18px Arial"
    ctx.fillText(
      `an online non-credit course authorized by ${issuer} and offered through Coursera`,
      canvas.width / 2,
      y,
    )

    // Completion text
    ctx.fillStyle = "#666666"
    ctx.font = "italic 20px Arial"
    ctx.fillText("has successfully completed", canvas.width / 2, y + 40)

    // Signature placeholder
    ctx.fillStyle = "#f0f0f0"
    ctx.fillRect(canvas.width / 2 - 100, y + 80, 200, 60)
    ctx.fillStyle = "#666666"
    ctx.font = "16px Arial"
    ctx.fillText("Authorized Signature", canvas.width / 2, y + 160)

    // Verification URL
    ctx.fillStyle = "#333333"
    ctx.font = "16px Arial"
    ctx.textAlign = "right"
    ctx.fillText("Verify at:", canvas.width - 50, canvas.height - 80)
    ctx.fillStyle = "#0066cc"
    ctx.fillText(verifyUrl, canvas.width - 50, canvas.height - 60)

    // Coursera verification text
    ctx.fillStyle = "#666666"
    ctx.font = "14px Arial"
    ctx.textAlign = "center"
    ctx.fillText(
      "Coursera has confirmed the identity of this individual and their participation in the course.",
      canvas.width / 2,
      canvas.height - 40,
    )

    // Convert canvas to buffer
    const buffer = canvas.toBuffer("image/png")

    // Return the image
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error generating certificate:", error)
    return NextResponse.json({ error: "Failed to generate certificate" }, { status: 500 })
  }
}
