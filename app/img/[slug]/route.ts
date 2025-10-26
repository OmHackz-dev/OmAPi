import { readFile } from "fs/promises"
import { join } from "path"

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params

    // Map slugs to file names
    const fileMap: Record<string, { filename: string; contentType: string }> = {
      me: { filename: "me.jpg", contentType: "image/jpeg" },
      av: { filename: "avatar.png", contentType: "image/png" },
      oav: { filename: "favicon.jpg", contentType: "image/jpeg" },
    }

    const fileInfo = fileMap[slug]

    if (!fileInfo) {
      return new Response("Image not found", { status: 404 })
    }

    // Read the file from public directory
    const filePath = join(process.cwd(), "public", fileInfo.filename)
    const fileBuffer = await readFile(filePath)

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": fileInfo.contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error serving image:", error)
    return new Response("Error serving image", { status: 500 })
  }
}
