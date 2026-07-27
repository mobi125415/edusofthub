import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "EduSoftHub - Software, Education, AI Tools and Jobs",
  description:
    "Explore trusted free software, educational resources, AI tools, job updates and useful digital resources.",
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