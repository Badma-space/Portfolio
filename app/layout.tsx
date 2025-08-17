// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
