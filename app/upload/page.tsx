"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<{
    imageId: string
    imageUrl: string
    directUrl: string
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit")
        setFile(null)
        return
      }
      setError(null)
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file")
      return
    }

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Upload failed")
        return
      }

      setUploadedImage(data)
      setFile(null)
    } catch (err) {
      setError("Failed to upload file")
      console.error(err)
    } finally {
      setUploading(false)
    }
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
            <Link href="/translate" className="text-gray-600 hover:text-black transition">
              Translate
            </Link>
          </div>
        </div>
      </nav>

      {/* Upload Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-black mb-6">Image Uploader</h1>
        <p className="text-lg text-gray-600 mb-8">Upload images and get shareable links. Maximum file size: 5MB</p>

        <Card className="bg-white border-gray-200 mb-8">
          <CardHeader>
            <CardTitle className="text-black">Upload Image</CardTitle>
            <CardDescription>Supported formats: JPEG, PNG, GIF, WebP</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-input" />
              <label htmlFor="file-input" className="cursor-pointer">
                <div className="text-gray-600">
                  {file ? (
                    <>
                      <p className="font-semibold text-black">{file.name}</p>
                      <p className="text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-black mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm">PNG, JPG, GIF, WebP up to 5MB</p>
                    </>
                  )}
                </div>
              </label>
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

            <Button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-400"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </Button>
          </CardContent>
        </Card>

        {uploadedImage && (
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-black">Upload Successful!</CardTitle>
              <CardDescription>Your image has been uploaded</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <img
                  src={uploadedImage.directUrl || "/placeholder.svg"}
                  alt="Uploaded"
                  className="max-w-full h-auto rounded"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Image ID</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={uploadedImage.imageId}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded bg-gray-50"
                    />
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(uploadedImage.imageId)
                      }}
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={uploadedImage.imageUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm"
                    />
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(uploadedImage.imageUrl)
                      }}
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Direct URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={uploadedImage.directUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm"
                    />
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(uploadedImage.directUrl)
                      }}
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Copy
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => {
                  setUploadedImage(null)
                  setFile(null)
                }}
                variant="outline"
                className="w-full border-black text-black hover:bg-gray-100"
              >
                Upload Another Image
              </Button>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  )
}
