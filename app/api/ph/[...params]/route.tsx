import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export async function GET(request: Request, { params }: { params: Promise<{ params: string[] }> }) {
  try {
    const { params: pathParams } = await params
    const [dimensions] = pathParams
    const { searchParams } = new URL(request.url)

    // Parse dimensions like "200-300"
    const [height, width] = dimensions.split("-").map(Number)

    if (!height || !width || height < 10 || width < 10 || height > 2000 || width > 2000) {
      return new Response("Invalid dimensions. Use format: /api/ph/[height]-[width]", { status: 400 })
    }

    const bgColor = searchParams.get("bg") || "cccccc"
    const textColor = searchParams.get("text") || "666666"

    // Validate hex colors
    const hexRegex = /^[0-9A-Fa-f]{6}$/
    if (!hexRegex.test(bgColor) || !hexRegex.test(textColor)) {
      return new Response("Invalid color format. Use hex codes without #", { status: 400 })
    }

    return new ImageResponse(
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `#${bgColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: Math.min(width, height) / 6,
          fontWeight: "bold",
          color: `#${textColor}`,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {width} × {height}
      </div>,
      {
        width,
        height,
      },
    )
  } catch (error) {
    return new Response("Error generating placeholder", { status: 500 })
  }
}
