# OmAPi - Avatar Generator API

[![GitHub](https://img.shields.io/badge/GitHub-OmHackz--dev%2FOmAPi-black?style=flat-square&logo=github)](https://github.com/OmHackz-dev/OmAPi)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://omhackz-api.vercel.app)
[![License](https://img.shields.io/badge/License-Custom-black?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org)

A powerful, customizable API for generating beautiful profile picture placeholders with initials. Perfect for user profiles, team directories, and more.

## Features

- ✨ **Easy to Use** - Simple query parameters for customization
- 🎨 **Highly Customizable** - Full control over appearance (colors, size, text)
- ⚡ **Fast & Reliable** - Server-side rendering ensures fast delivery
- 🖼️ **Image Serving** - Pre-configured image shortcuts
- 📱 **Responsive** - Works seamlessly across all devices
- 🚀 **More APIs Coming Soon** - Expanding platform with additional tools

## Quick Start

### Basic Usage

\`\`\`
https://omhackz-api.vercel.app/api/dp?name=Om%20Sarkar
\`\`\`

### With Custom Colors

\`\`\`
https://omhackz-api.vercel.app/api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF&size=200
\`\`\`

## API Documentation

### Endpoint

\`\`\`
GET /api/dp
\`\`\`

Generates a profile picture placeholder and returns a PNG image.

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `name` | string | Yes | - | User's full name (extracts initials) |
| `bgColor` | string | No | `#3B82F6` | Background color in hex format |
| `textColor` | string | No | `#FFFFFF` | Text color in hex format |
| `size` | number | No | `200` | Image size in pixels (50-1000) |

### Examples

#### Basic Avatar
\`\`\`
/api/dp?name=Om%20Sarkar
\`\`\`

#### Custom Colors
\`\`\`
/api/dp?name=John%20Doe&bgColor=%234ECDC4&textColor=%23FFFFFF
\`\`\`

#### Custom Size
\`\`\`
/api/dp?name=Jane%20Smith&size=300
\`\`\`

## Image Serving

Access pre-configured images using slug shortcuts:

\`\`\`
GET /img/[slug]
\`\`\`

| Slug | Image | Description |
|------|-------|-------------|
| `me` | me.png | Personal photo |
| `av` | avatar.png | Default avatar |
| `oav` | favicon.png | Favicon |

## Integration Examples

### HTML

\`\`\`html
<img 
  src="https://omhackz-api.vercel.app/api/dp?name=John%20Doe&bgColor=%234ECDC4" 
  alt="John Doe"
  class="rounded-full w-12 h-12"
/>
\`\`\`

### React

\`\`\`jsx
<img 
  src={`https://omhackz-api.vercel.app/api/dp?name=${userName}&bgColor=%234ECDC4`}
  alt={userName}
  className="rounded-full w-12 h-12"
/>
\`\`\`

### Next.js

\`\`\`jsx
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
\`\`\`

## Deployment

This project is deployed on [Vercel](https://vercel.com) and is live at:

🌐 **https://omhackz-api.vercel.app**

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Hosting**: Vercel
- **Image Generation**: Next.js Image Response

## Project Structure

\`\`\`
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
│   ├── omhackz-icon.png          # Site favicon
│   ├── me.jpg                    # Personal photo
│   ├── avatar.png                # Default avatar
│   └── favicon.jpg               # Favicon image
└── README.md                     # This file
\`\`\`

## Color Customization

Use hex color codes for customization:

\`\`\`
bgColor=%23FF6B6B    # Red
bgColor=%234ECDC4    # Teal
bgColor=%23FFE66D    # Yellow
bgColor=%233B82F6    # Blue
\`\`\`

## Size Guidelines

Recommended sizes for different use cases:

- **Thumbnails**: 48-64px
- **Profile Cards**: 120-150px
- **Large Displays**: 200-300px
- **Maximum**: 1000px

## Coming Soon

More APIs are coming to the OmAPi platform! Stay tuned for additional tools and features to expand your development toolkit.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by [OmHackz](https://omhackz.vercel.app)

## Support

For issues, questions, or suggestions, please visit:

- 📖 [Documentation](https://omhackz-api.vercel.app/docs)
- 🐛 [GitHub Issues](https://github.com/OmHackz-dev/OmAPi/issues)
- 🌐 [OmHackz Website](https://omhackz.vercel.app)

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

---

**Made with ❤️ by OmHackz**
