"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Page = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">OmAPi Documentation</h1>
          <p className="text-gray-600">Complete API reference for all OmAPi services</p>
        </div>

        {/* Avatar Generator API */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Avatar Generator API</h2>
          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Endpoint</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">
              GET /api/dp?name=Om%20Sarkar&bgColor=3B82F6&textColor=FFFFFF&size=200
            </code>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Query Parameters</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-black">name (required)</p>
                <p className="text-gray-600">User name to extract initials from</p>
              </div>
              <div>
                <p className="font-semibold text-black">bgColor (optional)</p>
                <p className="text-gray-600">Hex color for background (default: 3B82F6)</p>
              </div>
              <div>
                <p className="font-semibold text-black">textColor (optional)</p>
                <p className="text-gray-600">Hex color for text (default: FFFFFF)</p>
              </div>
              <div>
                <p className="font-semibold text-black">size (optional)</p>
                <p className="text-gray-600">Image size in pixels, 50-1000 (default: 200)</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-3">Example</h3>
            <div className="space-y-3">
              <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm break-all">
                https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar&bgColor=FF6B6B&textColor=FFFFFF&size=300
              </code>
              <Button
                onClick={() =>
                  copyToClipboard(
                    "https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar&bgColor=FF6B6B&textColor=FFFFFF&size=300",
                  )
                }
                className="bg-black text-white hover:bg-gray-800"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </Card>
        </section>

        {/* Image Uploader API */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Image Uploader API</h2>
          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Endpoint</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">POST /api/upload</code>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Request</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-black">Content-Type</p>
                <p className="text-gray-600">multipart/form-data</p>
              </div>
              <div>
                <p className="font-semibold text-black">Max File Size</p>
                <p className="text-gray-600">5MB</p>
              </div>
              <div>
                <p className="font-semibold text-black">Allowed Types</p>
                <p className="text-gray-600">JPEG, PNG, GIF, WebP</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Response</h3>
            <pre className="bg-gray-50 p-3 rounded-lg font-mono text-sm overflow-auto">
              {`{
  "success": true,
  "imageId": "AB123",
  "imageUrl": "https://omhackz-api.vercel.app/img/AB123",
  "directUrl": "https://[supabase-url]/storage/v1/object/public/omapi-images/images/AB123.jpg"
}`}
            </pre>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-3">View Image</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">
              GET /img/[id] - View uploaded image with metadata
            </code>
          </Card>
        </section>

        {/* Placeholder API */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Placeholder API</h2>
          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Endpoint</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">
              GET /api/ph/[height]-[width]?bg=CCCCCC&text=666666
            </code>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Parameters</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-black">height (required)</p>
                <p className="text-gray-600">Image height in pixels (10-2000)</p>
              </div>
              <div>
                <p className="font-semibold text-black">width (required)</p>
                <p className="text-gray-600">Image width in pixels (10-2000)</p>
              </div>
              <div>
                <p className="font-semibold text-black">bg (optional)</p>
                <p className="text-gray-600">Background color hex code (default: cccccc)</p>
              </div>
              <div>
                <p className="font-semibold text-black">text (optional)</p>
                <p className="text-gray-600">Text color hex code (default: 666666)</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-3">Example</h3>
            <div className="space-y-3">
              <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm break-all">
                https://omhackz-api.vercel.app/api/ph/300-500?bg=FF6B6B&text=FFFFFF
              </code>
              <Button
                onClick={() => copyToClipboard("https://omhackz-api.vercel.app/api/ph/300-500?bg=FF6B6B&text=FFFFFF")}
                className="bg-black text-white hover:bg-gray-800"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <a href="/build-placeholder" className="block">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Try Placeholder Builder</Button>
              </a>
            </div>
          </Card>
        </section>

        {/* Greydient API */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Greydient API</h2>
          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Endpoint</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">
              GET /api/greydient?color1=FF6B6B&color2=4ECDC4&angle=45&width=800&height=600
            </code>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Parameters</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-black">color1 (optional)</p>
                <p className="text-gray-600">First gradient color hex code (default: FF6B6B)</p>
              </div>
              <div>
                <p className="font-semibold text-black">color2 (optional)</p>
                <p className="text-gray-600">Second gradient color hex code (default: 4ECDC4)</p>
              </div>
              <div>
                <p className="font-semibold text-black">angle (optional)</p>
                <p className="text-gray-600">Gradient angle in degrees 0-360 (default: 45)</p>
              </div>
              <div>
                <p className="font-semibold text-black">width (optional)</p>
                <p className="text-gray-600">Image width in pixels (default: 800)</p>
              </div>
              <div>
                <p className="font-semibold text-black">height (optional)</p>
                <p className="text-gray-600">Image height in pixels (default: 600)</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-3">Example</h3>
            <div className="space-y-3">
              <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm break-all">
                https://omhackz-api.vercel.app/api/greydient?color1=FF6B6B&color2=4ECDC4&angle=90&width=1000&height=600
              </code>
              <Button
                onClick={() =>
                  copyToClipboard(
                    "https://omhackz-api.vercel.app/api/greydient?color1=FF6B6B&color2=4ECDC4&angle=90&width=1000&height=600",
                  )
                }
                className="bg-black text-white hover:bg-gray-800"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <a href="/build-greydient" className="block">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Try Greydient Builder</Button>
              </a>
            </div>
          </Card>
        </section>

        {/* Text Translator API */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Text Translator API</h2>
          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Endpoint</h3>
            <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm">
              GET /api/translate?text=Hello&type=base64&action=encode
            </code>
          </Card>

          <Card className="p-6 border border-gray-200 mb-4">
            <h3 className="text-xl font-bold text-black mb-3">Query Parameters</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-black">text (required)</p>
                <p className="text-gray-600">Text to encode or decode</p>
              </div>
              <div>
                <p className="font-semibold text-black">type (required)</p>
                <p className="text-gray-600">Encoding type: base64, hex, url, binary, ascii, rot13</p>
              </div>
              <div>
                <p className="font-semibold text-black">action (required)</p>
                <p className="text-gray-600">Either "encode" or "decode"</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-3">Example</h3>
            <div className="space-y-3">
              <code className="bg-gray-50 p-3 rounded-lg block font-mono text-sm break-all">
                https://omhackz-api.vercel.app/api/translate?text=Hello&type=base64&action=encode
              </code>
              <Button
                onClick={() =>
                  copyToClipboard("https://omhackz-api.vercel.app/api/translate?text=Hello&type=base64&action=encode")
                }
                className="bg-black text-white hover:bg-gray-800"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <a href="/translate" className="block">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Try Text Translator</Button>
              </a>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default Page
