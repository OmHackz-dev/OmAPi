# Supabase Setup Guide for OmAPi

## Creating the Images Bucket

Follow these steps to create the `omapi-images` bucket in Supabase:

### 1. Go to Supabase Dashboard
- Navigate to your Supabase project at https://app.supabase.com
- Select your project

### 2. Create Storage Bucket
- Click on **Storage** in the left sidebar
- Click **Create a new bucket**
- Name it: `omapi-images`
- Make it **Public** (toggle the public option)
- Click **Create bucket**

### 3. Set Bucket Policies (Optional but Recommended)
- Click on the `omapi-images` bucket
- Go to the **Policies** tab
- Add a policy to allow public read access:
  - Click **New Policy**
  - Select **For queries with SELECT**
  - Choose **Public access**
  - Click **Review** and **Save**

### 4. Verify Setup
- The bucket should now be ready to accept uploads
- Images will be stored at: `https://[your-supabase-url]/storage/v1/object/public/omapi-images/images/[filename]`

## Database Table

The `images` table is automatically created with the following columns:
- `id` (text) - Unique image identifier
- `original_filename` (text) - Original file name
- `file_size` (integer) - File size in bytes
- `mime_type` (text) - MIME type of the image
- `storage_path` (text) - Path in storage bucket
- `created_at` (timestamp) - Upload timestamp
- `expires_at` (timestamp) - Optional expiration date
- `view_count` (integer) - Number of views

That's it! Your OmAPi image uploader is now ready to use.
