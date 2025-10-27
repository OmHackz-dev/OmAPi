"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ENCODING_TYPES = [
  { value: "base64", label: "Base64" },
  { value: "hex", label: "Hexadecimal" },
  { value: "url", label: "URL Encoding" },
  { value: "binary", label: "Binary" },
  { value: "ascii", label: "ASCII Codes" },
  { value: "rot13", label: "ROT13" },
]

export default function TranslatePage() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [encodingType, setEncodingType] = useState("base64")
  const [action, setAction] = useState<"encode" | "decode">("encode")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTranslate = async () => {
    if (!input.trim()) {
      setError("Please enter text to translate")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          type: encodingType,
          action,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Translation failed")
        return
      }

      setOutput(data.output)
    } catch (err) {
      setError("Failed to translate text")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSwap = () => {
    setInput(output)
    setOutput(input)
    setAction(action === "encode" ? "decode" : "encode")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/omhackz-icon.png" alt="OmAPi" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">OmAPi</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-gray-600 hover:text-black transition">
              Docs
            </Link>
            <Link href="/upload" className="text-gray-600 hover:text-black transition">
              Upload
            </Link>
          </div>
        </div>
      </nav>

      {/* Translator Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-black mb-6">Text Code Translator</h1>
        <p className="text-lg text-gray-600 mb-8">Encode and decode text using various encoding formats</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Input</CardTitle>
              <CardDescription>Enter text to {action}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text here..."
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => setInput("")}
                  variant="outline"
                  className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                >
                  Clear
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(input)
                  }}
                  variant="outline"
                  className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                >
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Output</CardTitle>
              <CardDescription>Result will appear here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={output}
                readOnly
                placeholder="Output will appear here..."
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded font-mono text-sm resize-none bg-gray-50 focus:outline-none"
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => setOutput("")}
                  variant="outline"
                  className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                >
                  Clear
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(output)
                  }}
                  variant="outline"
                  className="flex-1 border-gray-300 text-black hover:bg-gray-100"
                >
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls Section */}
        <Card className="bg-white border-gray-200 mt-8">
          <CardHeader>
            <CardTitle className="text-black">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Encoding Type</label>
                <select
                  value={encodingType}
                  onChange={(e) => setEncodingType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {ENCODING_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Action</label>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setAction("encode")}
                    className={`flex-1 ${
                      action === "encode"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    Encode
                  </Button>
                  <Button
                    onClick={() => setAction("decode")}
                    className={`flex-1 ${
                      action === "decode"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    Decode
                  </Button>
                </div>
              </div>
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

            <div className="flex gap-2">
              <Button
                onClick={handleTranslate}
                disabled={loading}
                className="flex-1 bg-black text-white hover:bg-gray-800 disabled:bg-gray-400"
              >
                {loading ? "Processing..." : "Translate"}
              </Button>
              <Button
                onClick={handleSwap}
                disabled={!output}
                variant="outline"
                className="border-black text-black hover:bg-gray-100 disabled:opacity-50 bg-transparent"
              >
                ⇄ Swap
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* API Examples */}
        <Card className="bg-white border-gray-200 mt-8">
          <CardHeader>
            <CardTitle className="text-black">API Usage</CardTitle>
            <CardDescription>Use the API directly in your applications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-black mb-2">POST Request:</p>
              <pre className="bg-gray-50 p-3 rounded text-xs overflow-x-auto border border-gray-200">
                {`curl -X POST https://omhackz-api.vercel.app/api/translate \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello World",
    "type": "base64",
    "action": "encode"
  }'`}
              </pre>
            </div>

            <div>
              <p className="text-sm font-semibold text-black mb-2">GET Request:</p>
              <pre className="bg-gray-50 p-3 rounded text-xs overflow-x-auto border border-gray-200">
                {`https://omhackz-api.vercel.app/api/translate?text=Hello%20World&type=base64&action=encode`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
