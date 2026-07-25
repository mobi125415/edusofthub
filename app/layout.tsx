import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
