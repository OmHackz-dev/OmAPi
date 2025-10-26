import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
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
            <span className="text-black font-semibold">Docs</span>
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-black mb-4">Documentation</h1>
        <p className="text-xl text-gray-600 mb-12">Learn how to use the OmAPi avatar generator in your projects.</p>

        {/* API Endpoint Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">API Endpoint</h2>
          <Card className="bg-white border-gray-200 mb-6">
            <CardHeader>
              <CardTitle className="text-black font-mono">GET /api/dp</CardTitle>
              <CardDescription>Generate a profile picture placeholder</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                The main endpoint for generating avatar placeholders. Returns a PNG image.
              </p>
              <div className="bg-gray-50 rounded p-4 overflow-x-auto border border-gray-200">
                <code className="text-gray-800 text-sm">
                  https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar&bgColor=%23FF6B6B&textColor=%23FFFFFF&size=200
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Query Parameters */}
          <h3 className="text-2xl font-bold text-black mb-4">Query Parameters</h3>
          <div className="space-y-4">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">name</CardTitle>
                <CardDescription>Required - The user's full name</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Extracts initials from the name to display in the avatar.</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?name=Om%20Sarkar</code> → <span className="text-gray-500">OS</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">bgColor</CardTitle>
                <CardDescription>Optional - Background color (hex format)</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Hex color code for the background. Default: #3B82F6</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?bgColor=%23FF6B6B</code> →{" "}
                  <span className="text-gray-500">Red background</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">textColor</CardTitle>
                <CardDescription>Optional - Text color (hex format)</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Hex color code for the initials text. Default: #FFFFFF</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?textColor=%23000000</code> →{" "}
                  <span className="text-gray-500">Black text</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">size</CardTitle>
                <CardDescription>Optional - Image size in pixels</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Width and height of the square image. Default: 200</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?size=150</code> →{" "}
                  <span className="text-gray-500">150x150 pixels</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Examples</h2>

          <div className="space-y-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Basic Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded p-4 mb-4 overflow-x-auto border border-gray-200">
                  <code className="text-gray-800 text-sm">/api/dp?name=Om%20Sarkar</code>
                </div>
                <img
                  src="/api/dp?name=Om%20Sarkar&size=100"
                  alt="Om Sarkar Avatar"
                  className="rounded-full w-24 h-24"
                />
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Custom Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded p-4 mb-4 overflow-x-auto border border-gray-200">
                  <code className="text-gray-800 text-sm">
                    /api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF
                  </code>
                </div>
                <img
                  src="/api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF&size=100"
                  alt="John Doe Avatar"
                  className="rounded-full w-24 h-24"
                />
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Custom Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded p-4 mb-4 overflow-x-auto border border-gray-200">
                  <code className="text-gray-800 text-sm">/api/dp?name=Jane%20Smith&size=300</code>
                </div>
                <img
                  src="/api/dp?name=Jane%20Smith&size=150"
                  alt="Jane Smith Avatar"
                  className="rounded-full w-32 h-32"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Image Serving Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Image Serving</h2>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">GET /img/[slug]</CardTitle>
              <CardDescription>Serve pre-configured images</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="mb-4">Access pre-configured images using slug shortcuts:</p>
              <ul className="space-y-2 mb-4">
                <li>
                  <code className="text-gray-800">/img/me</code> → me.png (Personal photo)
                </li>
                <li>
                  <code className="text-gray-800">/img/av</code> → avatar.png (Default avatar)
                </li>
                <li>
                  <code className="text-gray-800">/img/oav</code> → favicon.png (Favicon)
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Integration Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Integration Examples</h2>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">HTML</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded p-4 overflow-x-auto border border-gray-200">
                <code className="text-gray-800 text-sm block whitespace-pre-wrap">
                  {`<img 
  src="https://omhackz-api.vercel.app/api/dp?name=John%20Doe&bgColor=%234ECDC4" 
  alt="John Doe"
  className="rounded-full w-12 h-12"
/>`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mt-4">
            <CardHeader>
              <CardTitle className="text-black">React</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded p-4 overflow-x-auto border border-gray-200">
                <code className="text-gray-800 text-sm block whitespace-pre-wrap">
                  {`<img 
  src={\`https://omhackz-api.vercel.app/api/dp?name=\${userName || "/placeholder.svg"}&bgColor=%234ECDC4\`}
  alt={userName}
  className="rounded-full w-12 h-12"
/>`}
                </code>
              </div>
            </CardContent>
          </Card>
        </section>

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
