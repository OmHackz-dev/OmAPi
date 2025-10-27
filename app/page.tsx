import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const apis = [
    {
      title: "Avatar Generator",
      description: "Generate custom profile picture placeholders with initials",
      icon: "👤",
      href: "/build-badge",
      color: "from-blue-500 to-blue-600",
      features: ["Customizable colors", "Any size", "Fast rendering"],
    },
    {
      title: "Badges",
      description: "Create beautiful, customizable badges with gradients and shapes",
      icon: "🏷️",
      href: "/build-badge",
      color: "from-purple-500 to-purple-600",
      features: ["Gradients", "Multiple shapes", "Custom outlines"],
    },
    {
      title: "Image Uploader",
      description: "Upload and share images with unique shareable links",
      icon: "📸",
      href: "/upload",
      color: "from-pink-500 to-pink-600",
      features: ["Max 5MB", "Unique IDs", "Easy sharing"],
    },
    {
      title: "Text Translator",
      description: "Encode and decode text using various formats",
      icon: "🔤",
      href: "/translate",
      color: "from-green-500 to-green-600",
      features: ["Base64, Hex, URL", "Binary, ASCII, ROT13", "Real-time"],
    },
    {
      title: "Placeholder Generator",
      description: "Generate placeholder images with custom dimensions",
      icon: "🖼️",
      href: "/build-placeholder",
      color: "from-orange-500 to-orange-600",
      features: ["Custom sizes", "Any color", "Dimension text"],
    },
    {
      title: "Greydient Generator",
      description: "Create beautiful gradients with multiple colors and angles",
      icon: "🎨",
      href: "/build-greydient",
      color: "from-cyan-500 to-cyan-600",
      features: ["Multiple colors", "Custom angles", "Smooth blends"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/omhackz-icon.png" alt="OmAPi" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">OmAPi</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-gray-600 hover:text-black transition text-sm">
              Docs
            </Link>
            <a
              href="https://github.com/OmHackz-dev/OmAPi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://omhackz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-sm"
            >
              OmHackz
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 text-balance">Powerful APIs for Developers</h1>
          <p className="text-xl text-gray-600 mb-8 text-balance max-w-3xl mx-auto">
            OmAPi provides a collection of powerful, easy-to-use APIs for generating avatars, badges, placeholders,
            gradients, and more. Perfect for developers who want to build amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">
                Get Started
              </Button>
            </Link>
            <a href="https://github.com/OmHackz-dev/OmAPi" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-black text-black hover:bg-gray-100 bg-transparent"
              >
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* APIs Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-black mb-4 text-center">All APIs</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">Choose from our collection of powerful APIs</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api, index) => (
            <Link key={index} href={api.href}>
              <Card className="bg-white border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{api.icon}</span>
                  </div>
                  <CardTitle className="text-black text-xl">{api.title}</CardTitle>
                  <CardDescription className="text-gray-600">{api.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {api.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Why Choose OmAPi?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Easy to Use</CardTitle>
              <CardDescription>Simple query parameters</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              Just pass parameters to generate exactly what you need. No complex setup required.
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Highly Customizable</CardTitle>
              <CardDescription>Full control over appearance</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              Customize colors, sizes, shapes, and more with simple parameters.
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Fast & Reliable</CardTitle>
              <CardDescription>Optimized for performance</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              Server-side rendering ensures fast delivery and consistent results.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Builders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Try Our Builders</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Placeholder Builder</CardTitle>
              <CardDescription>Create custom placeholder images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Generate placeholder images with custom dimensions and colors. Perfect for mockups and prototypes.
              </p>
              <Link href="/build-placeholder">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Try Placeholder Builder</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Greydient Builder</CardTitle>
              <CardDescription>Create beautiful gradients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Design stunning gradients with multiple colors and custom angles. Export as images or CSS.
              </p>
              <Link href="/build-greydient">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Try Greydient Builder</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8 text-balance">
          Check out the documentation to learn how to integrate OmAPi into your project.
        </p>
        <Link href="/docs">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Read the Documentation
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/omhackz-icon.png" alt="OmAPi" className="w-6 h-6" />
                <span className="font-bold text-black">OmAPi</span>
              </div>
              <p className="text-gray-600 text-sm">Powerful APIs for developers</p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-black transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/OmHackz-dev/OmAPi" className="text-gray-600 hover:text-black transition">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Made by</h3>
              <a href="https://omhackz.vercel.app" className="text-gray-600 hover:text-black transition text-sm">
                OmHackz
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>OmAPi © 2025. Made by OmHackz. Built with Next.js and hosted on Vercel.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
