if (typeof window === 'undefined') {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
}

import "./globals.css";

export const metadata = {
  title: "Alex Johnson | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with beautiful UIs.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson | Full Stack Developer Portfolio",
    description: "Crafting digital experiences that leave a lasting impression.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
