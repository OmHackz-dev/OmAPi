import { type NextRequest, NextResponse } from "next/server"

// Encoding/Decoding functions
const encoders = {
  base64: {
    encode: (text: string) => Buffer.from(text).toString("base64"),
    decode: (text: string) => Buffer.from(text, "base64").toString("utf-8"),
  },
  hex: {
    encode: (text: string) =>
      text
        .split("")
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join(""),
    decode: (text: string) => {
      const hex = text.match(/.{1,2}/g) || []
      return hex.map((h) => String.fromCharCode(Number.parseInt(h, 16))).join("")
    },
  },
  url: {
    encode: (text: string) => encodeURIComponent(text),
    decode: (text: string) => decodeURIComponent(text),
  },
  binary: {
    encode: (text: string) =>
      text
        .split("")
        .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" "),
    decode: (text: string) => {
      const binary = text.split(" ")
      return binary.map((b) => String.fromCharCode(Number.parseInt(b, 2))).join("")
    },
  },
  ascii: {
    encode: (text: string) =>
      text
        .split("")
        .map((c) => c.charCodeAt(0))
        .join(" "),
    decode: (text: string) => {
      const codes = text.split(" ")
      return codes.map((c) => String.fromCharCode(Number.parseInt(c))).join("")
    },
  },
  rot13: {
    encode: (text: string) =>
      text.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26),
      ),
    decode: (text: string) =>
      text.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26),
      ),
  },
}

export async function POST(request: NextRequest) {
  try {
    const { text, type, action } = await request.json()

    if (!text || !type || !action) {
      return NextResponse.json({ error: "Missing required fields: text, type, action" }, { status: 400 })
    }

    if (!encoders[type as keyof typeof encoders]) {
      return NextResponse.json(
        {
          error: `Invalid type. Supported types: ${Object.keys(encoders).join(", ")}`,
        },
        { status: 400 },
      )
    }

    if (!["encode", "decode"].includes(action)) {
      return NextResponse.json({ error: "Action must be 'encode' or 'decode'" }, { status: 400 })
    }

    const encoder = encoders[type as keyof typeof encoders]
    const result = encoder[action as "encode" | "decode"](text)

    return NextResponse.json({
      success: true,
      input: text,
      output: result,
      type,
      action,
    })
  } catch (error) {
    console.error("Translation error:", error)
    return NextResponse.json({ error: "Failed to process translation" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const text = searchParams.get("text")
  const type = searchParams.get("type")
  const action = searchParams.get("action")

  if (!text || !type || !action) {
    return NextResponse.json({ error: "Missing required query parameters: text, type, action" }, { status: 400 })
  }

  if (!encoders[type as keyof typeof encoders]) {
    return NextResponse.json(
      {
        error: `Invalid type. Supported types: ${Object.keys(encoders).join(", ")}`,
      },
      { status: 400 },
    )
  }

  if (!["encode", "decode"].includes(action)) {
    return NextResponse.json({ error: "Action must be 'encode' or 'decode'" }, { status: 400 })
  }

  const encoder = encoders[type as keyof typeof encoders]
  const result = encoder[action as "encode" | "decode"](text)

  return NextResponse.json({
    success: true,
    input: text,
    output: result,
    type,
    action,
  })
}
