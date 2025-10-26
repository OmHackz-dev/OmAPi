import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get parameters
    const name = searchParams.get("name") || "User"
    const bgColor = searchParams.get("bgColor") || "#3B82F6"
    const textColor = searchParams.get("textColor") || "#FFFFFF"
    const size = Number.parseInt(searchParams.get("size") || "200")

    // Extract initials from name
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("")

    // Validate size (min 50, max 1000)
    const validSize = Math.max(50, Math.min(1000, size))

    // Validate hex colors
    const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex)
    const validBgColor = isValidHex(bgColor) ? bgColor : "#3B82F6"
    const validTextColor = isValidHex(textColor) ? textColor : "#FFFFFF"

    // Calculate font size based on image size
    const fontSize = Math.floor(validSize * 0.35)

    return new ImageResponse(
      <div
        style={{
          width: validSize,
          height: validSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: validBgColor,
          borderRadius: "50%",
          fontSize: fontSize,
          fontWeight: "bold",
          color: validTextColor,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {initials}
      </div>,
      {
        width: validSize,
        height: validSize,
      },
    )
  } catch (error) {
    console.error("Error generating avatar:", error)
    return new Response("Error generating avatar", { status: 500 })
  }
}
