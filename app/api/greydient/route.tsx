import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const color1 = searchParams.get("color1") || "FF6B6B"
    const color2 = searchParams.get("color2") || "4ECDC4"
    const angle = Number.parseInt(searchParams.get("angle") || "45")
    const width = Number.parseInt(searchParams.get("width") || "800")
    const height = Number.parseInt(searchParams.get("height") || "600")

    // Validate hex colors
    const hexRegex = /^[0-9A-Fa-f]{6}$/
    if (!hexRegex.test(color1) || !hexRegex.test(color2)) {
      return new Response("Invalid color format. Use hex codes without #", { status: 400 })
    }

    // Validate dimensions
    if (width < 10 || width > 2000 || height < 10 || height > 2000) {
      return new Response("Invalid dimensions. Width and height must be between 10 and 2000", { status: 400 })
    }

    // Validate angle
    const validAngle = ((angle % 360) + 360) % 360

    // Calculate gradient direction
    const rad = (validAngle * Math.PI) / 180
    const x = Math.cos(rad)
    const y = Math.sin(rad)

    // Convert to percentage for CSS
    const x1 = 50 - x * 50
    const y1 = 50 - y * 50
    const x2 = 50 + x * 50
    const y2 = 50 + y * 50

    return new ImageResponse(
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: `linear-gradient(${validAngle}deg, #${color1}, #${color2})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />,
      {
        width,
        height,
      },
    )
  } catch (error) {
    return new Response("Error generating gradient", { status: 500 })
  }
}
