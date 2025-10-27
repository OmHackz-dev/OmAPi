"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BuildPlaceholder() {
  const [height, setHeight] = useState(200)
  const [width, setWidth] = useState(300)
  const [bgColor, setBgColor] = useState("cccccc")
  const [textColor, setTextColor] = useState("666666")

  const apiUrl = `https://omhackz-api.vercel.app/api/ph/${height}-${width}?bg=${bgColor}&text=${textColor}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Placeholder Builder</h1>
          <p className="text-gray-600">Generate custom placeholder images instantly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <Card className="p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-6">Customize</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Height (px)</label>
                <input
                  type="number"
                  min="10"
                  max="2000"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Width (px)</label>
                <input
                  type="number"
                  min="10"
                  max="2000"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Background Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={`#${bgColor}`}
                    onChange={(e) => setBgColor(e.target.value.slice(1))}
                    className="w-16 h-10 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black font-mono"
                    placeholder="CCCCCC"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Text Color</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={`#${textColor}`}
                    onChange={(e) => setTextColor(e.target.value.slice(1))}
                    className="w-16 h-10 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black font-mono"
                    placeholder="666666"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Preview & Code */}
          <div className="space-y-6">
            <Card className="p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">Preview</h2>
              <div className="flex justify-center bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
                <img src={apiUrl || "/placeholder.svg"} alt="Placeholder preview" className="max-w-full" />
              </div>
            </Card>

            <Card className="p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">API URL</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg break-all font-mono text-sm text-gray-700">{apiUrl}</div>
                <Button
                  onClick={() => copyToClipboard(apiUrl)}
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy URL
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
