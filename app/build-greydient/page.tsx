"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BuildGreydient() {
  const [color1, setColor1] = useState("FF6B6B")
  const [color2, setColor2] = useState("4ECDC4")
  const [angle, setAngle] = useState(45)
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(600)

  const apiUrl = `https://omhackz-api.vercel.app/api/greydient?color1=${color1}&color2=${color2}&angle=${angle}&width=${width}&height=${height}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Greydient Builder</h1>
          <p className="text-gray-600">Create beautiful gradients with custom colors and angles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <Card className="p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-6">Customize</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Color 1</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={`#${color1}`}
                    onChange={(e) => setColor1(e.target.value.slice(1).toUpperCase())}
                    className="w-16 h-10 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black font-mono"
                    placeholder="FF6B6B"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Color 2</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={`#${color2}`}
                    onChange={(e) => setColor2(e.target.value.slice(1).toUpperCase())}
                    className="w-16 h-10 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black font-mono"
                    placeholder="4ECDC4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Angle: {angle}°</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full"
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
            </div>
          </Card>

          {/* Preview & Code */}
          <div className="space-y-6">
            <Card className="p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">Preview</h2>
              <div className="flex justify-center bg-gray-50 rounded-lg p-4 overflow-auto max-h-96">
                <img src={apiUrl || "/placeholder.svg"} alt="Gradient preview" className="max-w-full" />
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
