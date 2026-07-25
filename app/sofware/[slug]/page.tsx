import Image from "next/image";
import { notFound } from "next/navigation";

const softwareData = {
  "google-chrome": {
    name: "Google Chrome",
    image: "/software/chrome.png",
    category: "Web Browser",
    version: "Latest Version",
    description:
      "Google Chrome is a fast, secure and reliable web browser used worldwide.",
    download: "https://www.google.com/chrome/",
    features: [
      "Fast browsing experience",
      "Secure and updated regularly",
      "Extensions support",
      "Available for Windows, Mac and Linux",
    ],
  },

  "vlc-media-player": {
    name: "VLC Media Player",
    image: "/software/vlc.png",
    category: "Media Player",
    version: "Latest Version",
    description:
      "VLC is a free open-source media player supporting almost every video and audio format.",
    download: "https://www.videolan.org/vlc/",
    features: [
      "Supports all major formats",
      "Free and open source",
      "Subtitle support",
      "Lightweight performance",
    ],
  },

  "7-zip": {
    name: "7-Zip",
    image: "/software/7zip.png",
    category: "File Compression",
    version: "Latest Version",
    description:
      "7-Zip is a powerful tool for compressing and extracting files.",
    download: "https://www.7-zip.org/",
    features: [
      "High compression ratio",
      "Open source",
      "Supports many archive formats",
      "Fast file extraction",
    ],
  },

  "microsoft-office": {
    name: "Microsoft Office",
    image: "/software/microsoft-office.png",
    category: "Office Software",
    version: "Latest Version",
    description:
      "Microsoft Office provides professional tools for documents, spreadsheets and presentations.",
    download: "https://www.microsoft.com/microsoft-365",
    features: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Professional productivity tools",
    ],
  },
};

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const software =
    softwareData[slug as keyof typeof softwareData];

  if (!software) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Image
            src={software.image}
            alt={software.name}
            width={180}
            height={180}
            className="object-contain"
          />

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
              {software.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold">
              {software.name}
            </h1>

            <p className="mt-4 text-slate-600">
              {software.description}
            </p>

            <p className="mt-3 font-semibold">
              Version: {software.version}
            </p>

            <a
              href={software.download}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-800"
            >
              Download Official Version
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Features
          </h2>

          <ul className="mt-5 space-y-3">
            {software.features.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-slate-100 p-4"
              >
                ✓ {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
