"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BuildBadgePage() {
  const [label, setLabel] = useState("Build")
  const [message, setMessage] = useState("Badge")
  const [labelColor, setLabelColor] = useState("#555555")
  const [messageColor, setMessageColor] = useState("#4CAF50")
  const [textColor, setTextColor] = useState("#FFFFFF")
  const [shape, setShape] = useState("rounded")
  const [outlineColor, setOutlineColor] = useState("none")
  const [outlineWidth, setOutlineWidth] = useState(0)
  const [useGradient, setUseGradient] = useState(false)
  const [gradientAngle, setGradientAngle] = useState(90)
  const [fontSize, setFontSize] = useState(14)
  const [padding, setPadding] = useState(8)

  const badgeUrl = `/api/badge?label=${encodeURIComponent(label)}&message=${encodeURIComponent(message)}&labelColor=${encodeURIComponent(labelColor)}&messageColor=${encodeURIComponent(messageColor)}&textColor=${encodeURIComponent(textColor)}&shape=${shape}&outlineColor=${encodeURIComponent(outlineColor)}&outlineWidth=${outlineWidth}&gradient=${useGradient}&gradientAngle=${gradientAngle}&fontSize=${fontSize}&padding=${padding}`

  const fullUrl = `https://omhackz-api.vercel.app${badgeUrl}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/omhackz-icon.png" alt="OmAPi" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">OmAPi</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="text-gray-600 hover:text-black transition">
              Docs
            </Link>
            <a
              href="https://github.com/OmHackz-dev/OmAPi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-black mb-4">Badge Builder</h1>
        <p className="text-xl text-gray-600 mb-12">Create custom badges with advanced styling options</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preview Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-gray-200 sticky top-24">
              <CardHeader>
                <CardTitle className="text-black">Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 flex items-center justify-center min-h-32">
                  <img src={badgeUrl || "/placeholder.svg"} alt="Badge Preview" className="max-w-full h-auto" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-black">API URL:</p>
                  <div className="bg-gray-50 rounded p-3 border border-gray-200 break-all text-xs text-gray-600">
                    {fullUrl}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={() => copyToClipboard(fullUrl)}
                  >
                    Copy URL
                  </Button>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-black">Markdown:</p>
                  <div className="bg-gray-50 rounded p-3 border border-gray-200 break-all text-xs text-gray-600">
                    {`![Badge](${fullUrl})`}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={() => copyToClipboard(`![Badge](${fullUrl})`)}
                  >
                    Copy Markdown
                  </Button>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-black">HTML:</p>
                  <div className="bg-gray-50 rounded p-3 border border-gray-200 break-all text-xs text-gray-600">
                    {`<img src="${fullUrl}" alt="Badge" />`}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={() => copyToClipboard(`<img src="${fullUrl}" alt="Badge" />`)}
                  >
                    Copy HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Text Section */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Label</label>
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message</label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Colors Section */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Label Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={labelColor}
                      onChange={(e) => setLabelColor(e.target.value)}
                      className="w-12 h-10 rounded cursor-pointer border border-gray-300"
                    />
                    <input
                      type="text"
                      value={labelColor}
                      onChange={(e) => setLabelColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={messageColor}
                      onChange={(e) => setMessageColor(e.target.value)}
                      className="w-12 h-10 rounded cursor-pointer border border-gray-300"
                    />
                    <input
                      type="text"
                      value={messageColor}
                      onChange={(e) => setMessageColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Text Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-10 rounded cursor-pointer border border-gray-300"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shape & Style Section */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Shape & Style</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Shape</label>
                  <select
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="rounded">Rounded</option>
                    <option value="square">Square</option>
                    <option value="pill">Pill</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="gradient"
                    checked={useGradient}
                    onChange={(e) => setUseGradient(e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="gradient" className="text-sm font-semibold text-black cursor-pointer">
                    Use Gradient
                  </label>
                </div>

                {useGradient && (
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Gradient Angle</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={gradientAngle}
                        onChange={(e) => setGradientAngle(Number.parseInt(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-600 w-12">{gradientAngle}°</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Outline Section */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Outline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Outline Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={outlineColor === "none" ? "#000000" : outlineColor}
                      onChange={(e) => setOutlineColor(e.target.value)}
                      disabled={outlineColor === "none"}
                      className="w-12 h-10 rounded cursor-pointer border border-gray-300 disabled:opacity-50"
                    />
                    <select
                      value={outlineColor}
                      onChange={(e) => setOutlineColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="none">None</option>
                      <option value="#000000">Black</option>
                      <option value="#FFFFFF">White</option>
                      <option value="#FF0000">Red</option>
                      <option value="#00FF00">Green</option>
                      <option value="#0000FF">Blue</option>
                    </select>
                  </div>
                </div>

                {outlineColor !== "none" && (
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">Outline Width</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        value={outlineWidth}
                        onChange={(e) => setOutlineWidth(Number.parseInt(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-600 w-8">{outlineWidth}px</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Size Section */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Size</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Font Size</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="range"
                      min="10"
                      max="32"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number.parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-600 w-8">{fontSize}px</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Padding</label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="range"
                      min="4"
                      max="20"
                      value={padding}
                      onChange={(e) => setPadding(Number.parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-600 w-8">{padding}px</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <Link href="/">
            <Button variant="outline" className="border-black text-black hover:bg-gray-100 bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
