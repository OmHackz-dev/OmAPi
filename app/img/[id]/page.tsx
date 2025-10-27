import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"

export default async function ImagePage({ params }: { params: { id: string } }) {
  const { id } = params

  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    },
  )

  // Fetch image metadata
  const { data: image, error } = await supabase.from("images").select("*").eq("id", id).single()

  if (error || !image) {
    notFound()
  }

  // Get public URL
  const { data } = supabase.storage.from("omapi-images").getPublicUrl(image.storage_path)

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <img
            src={data.publicUrl || "/placeholder.svg"}
            alt={image.original_filename}
            className="w-full h-auto rounded"
          />
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-black">Filename:</span> {image.original_filename}
            </p>
            <p>
              <span className="font-semibold text-black">Size:</span> {(image.file_size / 1024).toFixed(2)} KB
            </p>
            <p>
              <span className="font-semibold text-black">Uploaded:</span> {new Date(image.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
