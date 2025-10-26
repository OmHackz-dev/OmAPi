export const runtime = "nodejs"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get parameters
    const label = searchParams.get("label") || "Badge"
    const message = searchParams.get("message") || "v1.0"
    const labelColor = searchParams.get("labelColor") || "#555555"
    const messageColor = searchParams.get("messageColor") || "#4CAF50"
    const textColor = searchParams.get("textColor") || "#FFFFFF"
    const shape = searchParams.get("shape") || "rounded" // rounded, square, pill
    const outlineColor = searchParams.get("outlineColor") || "none"
    const outlineWidth = Number.parseInt(searchParams.get("outlineWidth") || "0")
    const useGradient = searchParams.get("gradient") === "true"
    const gradientAngle = Number.parseInt(searchParams.get("gradientAngle") || "90")
    const fontSize = Number.parseInt(searchParams.get("fontSize") || "14")
    const padding = Number.parseInt(searchParams.get("padding") || "8")

    // Validate hex colors
    const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex)
    const validLabelColor = isValidHex(labelColor) ? labelColor : "#555555"
    const validMessageColor = isValidHex(messageColor) ? messageColor : "#4CAF50"
    const validTextColor = isValidHex(textColor) ? textColor : "#FFFFFF"
    const validOutlineColor = isValidHex(outlineColor) ? outlineColor : "none"

    // Calculate dimensions
    const labelWidth = label.length * (fontSize * 0.6) + padding * 2
    const messageWidth = message.length * (fontSize * 0.6) + padding * 2
    const totalWidth = labelWidth + messageWidth
    const height = fontSize + padding * 2

    // Determine border radius based on shape
    let borderRadius = "4"
    if (shape === "pill") borderRadius = String(height / 2)
    if (shape === "square") borderRadius = "0"

    // Create gradient if enabled
    const gradientId = "badgeGradient"
    const gradientDef = useGradient
      ? `<defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${gradientAngle})">
            <stop offset="0%" style="stop-color:${validMessageColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${validLabelColor};stop-opacity:1" />
          </linearGradient>
        </defs>`
      : ""

    const messageFill = useGradient ? `url(#${gradientId})` : validMessageColor

    // Build SVG
    const svg = `
      <svg width="${totalWidth}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${gradientDef}
        <!-- Label background -->
        <rect x="0" y="0" width="${labelWidth}" height="${height}" fill="${validLabelColor}" rx="${borderRadius}" ry="${borderRadius}" ${outlineColor !== "none" ? `stroke="${validOutlineColor}" stroke-width="${outlineWidth}"` : ""} />
        <!-- Message background -->
        <rect x="${labelWidth}" y="0" width="${messageWidth}" height="${height}" fill="${messageFill}" rx="${borderRadius}" ry="${borderRadius}" ${outlineColor !== "none" ? `stroke="${validOutlineColor}" stroke-width="${outlineWidth}"` : ""} />
        <!-- Label text -->
        <text x="${labelWidth / 2}" y="${height / 2 + fontSize / 3}" text-anchor="middle" fill="${validTextColor}" font-size="${fontSize}" font-family="Arial, sans-serif" font-weight="bold">
          ${label}
        </text>
        <!-- Message text -->
        <text x="${labelWidth + messageWidth / 2}" y="${height / 2 + fontSize / 3}" text-anchor="middle" fill="${validTextColor}" font-size="${fontSize}" font-family="Arial, sans-serif" font-weight="bold">
          ${message}
        </text>
      </svg>
    `

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000",
      },
    })
  } catch (error) {
    console.error("Error generating badge:", error)
    return new Response("Error generating badge", { status: 500 })
  }
}
