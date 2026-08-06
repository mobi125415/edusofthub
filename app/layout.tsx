import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://edusofthub-new.vercel.app"),

  title: {
    default: "EduSoftHub - Software, AI Tools, Games and Education",
    template: "%s | EduSoftHub",
  },

  description:
    "Explore trusted software, AI tools, PC games, educational resources and useful technology guides with official links.",

  keywords: [
    "EduSoftHub",
    "Free Software",
    "Software Downloads",
    "AI Tools",
    "PC Games",
    "Education Resources",
    "Technology Guides",
    "Official Downloads",
  ],

  authors: [
    {
      name: "EduSoftHub",
    },
  ],

  creator: "EduSoftHub",
  publisher: "EduSoftHub",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edusofthub-new.vercel.app",
    siteName: "EduSoftHub",
    title: "EduSoftHub - Software, AI Tools, Games and Education",
    description:
      "Explore trusted software, AI tools, PC games, educational resources and useful technology guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduSoftHub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EduSoftHub - Software, AI Tools, Games and Education",
    description:
      "Explore trusted software, AI tools, PC games and educational resources.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}

          <div className="fixed right-4 top-4 z-[9999] sm:right-6 sm:top-5">
            <ThemeToggle />
          </div>

          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
