import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/omhackz-icon.png" alt="OmAPi" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">OmAPi</span>
          </div>
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
            <a
              href="https://omhackz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              OmHackz
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
              Generate Custom Avatar Placeholders
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-balance">
              OmAPi is a powerful, customizable API for generating beautiful profile picture placeholders with initials.
              Perfect for user profiles, team directories, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs">
                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800">
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-black text-black hover:bg-gray-100 bg-transparent"
              >
                View Examples
              </Button>
            </div>
          </div>

          {/* Avatar Preview */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex gap-4 flex-wrap justify-center">
                <img
                  src="/api/dp?name=Om%20Sarkar&size=120&bgColor=%23FF6B6B&textColor=%23FFFFFF"
                  alt="OS Avatar"
                  className="rounded-full w-32 h-32"
                />
                <img
                  src="/api/dp?name=John%20Doe&size=120&bgColor=%234ECDC4&textColor=%23FFFFFF"
                  alt="JD Avatar"
                  className="rounded-full w-32 h-32"
                />
                <img
                  src="/api/dp?name=Jane%20Smith&size=120&bgColor=%23FFE66D&textColor=%23000000"
                  alt="JS Avatar"
                  className="rounded-full w-32 h-32"
                />
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm">Customizable avatars with your own colors and sizes</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Easy to Use</CardTitle>
              <CardDescription>Simple query parameters for customization</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              Just pass a name and optional colors to generate beautiful avatars instantly.
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Highly Customizable</CardTitle>
              <CardDescription>Full control over appearance</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600">
              Customize background color, text color, size, and more with simple parameters.
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

      {/* Coming Soon Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">More APIs Coming Soon</h2>
        <p className="text-lg text-gray-600">
          We're working on additional powerful APIs to expand the OmAPi platform. Stay tuned for more tools and
          features!
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Check out the documentation to learn how to integrate OmAPi into your project.
        </p>
        <Link href="/docs">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Read the Docs
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>OmAPi © 2025. Made by OmHackz. Built with Next.js and hosted on Vercel.</p>
          <p className="text-sm mt-2">
            <a href="https://github.com/OmHackz-dev/OmAPi" className="hover:text-black transition">
              GitHub
            </a>
            {" • "}
            <a href="https://omhackz.vercel.app" className="hover:text-black transition">
              OmHackz
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
