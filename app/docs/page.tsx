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

        {/* Badges API documentation section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Badges API</h2>
          <Card className="bg-white border-gray-200 mb-6">
            <CardHeader>
              <CardTitle className="text-black font-mono">GET /api/badge</CardTitle>
              <CardDescription>Generate customizable badges with advanced styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Create beautiful badges with gradients, multiple shapes, and outline support. A better alternative to
                shields.io.
              </p>
              <div className="bg-gray-50 rounded p-4 overflow-x-auto border border-gray-200">
                <code className="text-gray-800 text-sm">
                  https://omhackz-api.vercel.app/api/badge?label=Build&message=Badge&labelColor=%23555555&messageColor=%234CAF50
                </code>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold text-black mb-4">Query Parameters</h3>
          <div className="space-y-4">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">label</CardTitle>
                <CardDescription>Required - Left side text</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>The text to display on the left side of the badge.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">message</CardTitle>
                <CardDescription>Required - Right side text</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>The text to display on the right side of the badge.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">labelColor</CardTitle>
                <CardDescription>Optional - Hex color for label background</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Default: #555555</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?labelColor=%23FF6B6B</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">messageColor</CardTitle>
                <CardDescription>Optional - Hex color for message background</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Default: #4CAF50</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?messageColor=%234ECDC4</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">textColor</CardTitle>
                <CardDescription>Optional - Hex color for text</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Default: #FFFFFF</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?textColor=%23000000</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">shape</CardTitle>
                <CardDescription>Optional - Badge shape</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Options: rounded, square, pill. Default: rounded</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?shape=pill</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">gradient</CardTitle>
                <CardDescription>Optional - Enable gradient effect</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Options: true, false. Default: false</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?gradient=true&gradientAngle=45</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">outlineColor</CardTitle>
                <CardDescription>Optional - Outline color</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Hex color or "none". Default: none</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?outlineColor=%23000000&outlineWidth=2</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">fontSize</CardTitle>
                <CardDescription>Optional - Font size in pixels</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Default: 14</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?fontSize=18</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-black text-lg">padding</CardTitle>
                <CardDescription>Optional - Padding in pixels</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-2">Default: 8</p>
                <div className="bg-gray-50 rounded p-3 text-sm border border-gray-200">
                  <code className="text-gray-800">?padding=12</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-black mb-4 mt-8">Badge Builder</h3>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Interactive Badge Builder</CardTitle>
              <CardDescription>Create and customize badges visually</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p className="mb-4">
                Use the interactive badge builder to customize your badges in real-time and get the API URL instantly.
              </p>
              <Link href="/build-badge">
                <Button className="bg-black text-white hover:bg-gray-800">Open Badge Builder</Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Integration Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Integration</h2>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Integration Examples</CardTitle>
              <CardDescription>How to use OmAPi in your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                OmAPi is easy to integrate into any project. Here are some examples of how to use it.
              </p>
              <div className="space-y-4">
                <Card className="bg-gray-50 border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black font-mono">JavaScript/Node.js</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-gray-800">
                      <code>
                        {`// Generate avatar
const fetch = require('node-fetch');

async function generateAvatar() {
  const response = await fetch('https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar&bgColor=%23FF6B6B&textColor=%23FFFFFF&size=200');
  const avatar = await response.blob();
  
  return avatar;
}

generateAvatar().then(avatar => {
  console.log('Avatar generated!');
});`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black font-mono">Python</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-gray-800">
                      <code>
                        {`import requests

def generate_avatar():
    url = 'https://omhackz-api.vercel.app/api/dp'
    params = {
        'name': 'Om%20Sarkar',
        'bgColor': '%23FF6B6B',
        'textColor': '%23FFFFFF',
        'size': '200'
    }
    
    response = requests.get(url, params=params)
    return response.content

avatar = generate_avatar()
print('Avatar generated!')`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black font-mono">HTML/CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-gray-800">
                      <code>
                        {`<img src="https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar&bgColor=%23FF6B6B&textColor=%23FFFFFF&size=200" 
                             alt="Om%20Sarkar" 
                             class="avatar" />
                        <img src="https://omhackz-api.vercel.app/api/badge?label=Build&message=Badge&labelColor=%23555555&messageColor=%234CAF50" 
                             alt="Build Badge" 
                             class="badge" />`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Common Questions</CardTitle>
              <CardDescription>Answers to common queries about OmAPi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">How do I generate a custom avatar?</h3>
                  <p className="text-gray-600">
                    Use the /api/dp endpoint with parameters like name, bgColor, textColor, and size.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Can I use OmAPi with any programming language?
                  </h3>
                  <p className="text-gray-600">
                    Yes, OmAPi is accessible via HTTP requests, so it works with any language that can make HTTP calls.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">What are the image formats supported?</h3>
                  <p className="text-gray-600">
                    All images are served as PNG format. The API returns PNG images directly.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">How do I customize badges?</h3>
                  <p className="text-gray-600">
                    Use the /api/badge endpoint with parameters like label, message, labelColor, messageColor, and
                    shape.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">Is there a rate limit?</h3>
                  <p className="text-gray-600">OmAPi has no rate limits. You can make unlimited requests to the API.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
