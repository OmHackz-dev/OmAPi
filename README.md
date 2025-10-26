# OmAPi - Avatar Generator API

[![GitHub](https://img.shields.io/badge/GitHub-OmHackz--dev%2FOmAPi-black?style=flat-square\&logo=github)](https://github.com/OmHackz-dev/OmAPi)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square\&logo=vercel)](https://omhackz-api.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square\&logo=next.js)](https://nextjs.org)

A sleek, customizable API for generating profile picture placeholders with user initials. Ideal for user dashboards, community profiles, and more.

---

## 🚀 Features

* **Simple Integration** – Easy-to-use query parameters.
* **Customizable** – Adjust colors, text, and image size.
* **Optimized Performance** – Server-side rendering for fast delivery.
* **Image Shortcuts** – Access preloaded images via slugs.
* **Responsive Design** – Works across all screen sizes.
* **Expanding Platform** – More tools and APIs coming soon.

---

## ⚡ Quick Start

### Basic Example

```
https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar
```

### Custom Colors

```
https://omhackz-api.vercel.app/api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF&size=200
```

---

## 📘 API Reference

### Endpoint

```
GET /api/dp
```

Generates a PNG image containing the initials of the provided name.

### Query Parameters

| Parameter   | Type   | Required | Default   | Description                          |
| ----------- | ------ | -------- | --------- | ------------------------------------ |
| `name`      | string | Yes      | -         | The user's name to extract initials. |
| `bgColor`   | string | No       | `#3B82F6` | Background color (hex format).       |
| `textColor` | string | No       | `#FFFFFF` | Text color (hex format).             |
| `size`      | number | No       | `200`     | Image size in pixels (50–1000).      |

---

## 🧩 Examples

**Basic Avatar**

```
/api/dp?name=Om%20Sarkar
```

**Custom Colors**

```
/api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF
```

**Custom Size**

```
/api/dp?name=Jane%20Smith&size=300
```

---

## 🖼️ Image Shortcuts

You can serve pre-defined images by slug:

```
GET /img/[slug]
```

| Slug  | File        | Description    |
| ----- | ----------- | -------------- |
| `me`  | me.jpg      | Personal photo |
| `av`  | avatar.png  | Default avatar |
| `oav` | favicon.jpg | Favicon image  |

---

## 💻 Usage Examples

### HTML

```html
<img 
  src="https://omhackz-api.vercel.app/api/dp?name=John%20Doe&bgColor=%234ECDC4" 
  alt="John Doe"
  class="rounded-full w-12 h-12"
/>
```

### React

```jsx
<img 
  src={`https://omhackz-api.vercel.app/api/dp?name=${userName}&bgColor=%234ECDC4`} 
  alt={userName} 
  className="rounded-full w-12 h-12" 
/>
```

### Next.js

```jsx
import Image from 'next/image'

export default function UserAvatar({ name }) {
  return (
    <Image
      src={`https://omhackz-api.vercel.app/api/dp?name=${encodeURIComponent(name)}`}
      alt={name}
      width={48}
      height={48}
      className="rounded-full"
    />
  )
}
```

---

## 🌐 Deployment

Hosted on [Vercel](https://vercel.com). Access it live at:

🔗 **[https://omhackz-api.vercel.app](https://omhackz-api.vercel.app)**

---

## 🧠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org) v16
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Hosting:** Vercel
* **Image Generation:** Next.js Image Response

---

## 📁 Directory Overview

```
OmAPi/
├── app/
│   ├── api/
│   │   ├── dp/
│   │   │   └── route.ts          # Avatar generator endpoint
│   │   └── img/
│   │       └── [slug]/
│   │           └── route.ts      # Image serving endpoint
│   ├── docs/
│   │   └── page.tsx              # Documentation page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── public/
│   ├── omhackz-icon.png          # Site icon
│   ├── me.jpg                    # Personal photo
│   ├── avatar.png                # Default avatar
│   └── favicon.jpg               # Favicon image
└── README.md                     # Documentation
```

---

## 🎨 Customization

Use hex color codes for background and text:

```
bgColor=%23FF6B6B  # Red
bgColor=%234ECDC4  # Teal
bgColor=%23FFE66D  # Yellow
bgColor=%233B82F6  # Blue
```

---

## 📏 Recommended Sizes

| Use Case          | Size (px) |
| ----------------- | --------- |
| Thumbnails        | 48–64     |
| Profile Cards     | 120–150   |
| Large Displays    | 200–300   |
| Maximum Supported | 1000      |

---

## 🧱 Coming Soon

New endpoints and tools are under development for **OmAPi**, enhancing customization and API flexibility.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👤 Author

Developed by [OmHackz](https://omhackz.vercel.app)

---

## 💬 Support

Need help or want to report a bug?

* 📘 [Docs](https://omhackz-api.vercel.app/docs)
* 🐞 [GitHub Issues](https://github.com/OmHackz-dev/OmAPi/issues)
* 🌍 [OmHackz Website](https://omhackz.vercel.app)

---

## 🤝 Contributing

Contributions are welcome! Submit issues or pull requests on GitHub.

---

**Made with ❤️ by OmHackz**
