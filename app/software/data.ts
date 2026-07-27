export type Software = {
  name: string;
  image: string;
  category: string;
  version: string;
  size: string;
  description: string;
  download: string;
  officialWebsite: string;
  developer: string;
  license: string;
  platforms: string[];
  lastUpdated: string;
  features: string[];
  requirements: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const softwareData: Record<string, Software> = {
  "google-chrome": {
    name: "Google Chrome",
    image: "/software/chrome.png",
    category: "Web Browser",
    version: "Latest Version",
    size: "120 MB",
    description:
      "Google Chrome is a fast, secure and easy-to-use web browser developed by Google.",
    download: "https://www.google.com/chrome/",
    officialWebsite: "https://www.google.com/chrome/",
    developer: "Google LLC",
    license: "Freeware",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    lastUpdated: "July 2026",
    features: [
      "Fast and secure browsing",
      "Extension support",
      "Sync across devices",
      "Built-in password manager",
      "Automatic security updates",
      "Incognito browsing mode",
    ],
    requirements:
      "Windows 10 or later, macOS 12 or later, or a supported Linux distribution.",
    faqs: [
      {
        question: "Is Google Chrome free?",
        answer:
          "Yes, Google Chrome is completely free to download and use.",
      },
      {
        question: "Is Google Chrome safe?",
        answer:
          "Yes, Google Chrome receives regular security updates from Google.",
      },
    ],
  },

  "vlc-media-player": {
    name: "VLC Media Player",
    image: "/software/vlc.png",
    category: "Media Player",
    version: "3.0 Latest",
    size: "40 MB",
    description:
      "VLC Media Player is a free and open-source media player that supports almost all popular video and audio formats.",
    download: "https://www.videolan.org/vlc/",
    officialWebsite: "https://www.videolan.org/",
    developer: "VideoLAN",
    license: "Open Source",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    lastUpdated: "July 2026",
    features: [
      "Supports major video formats",
      "Supports major audio formats",
      "Subtitle support",
      "DVD and streaming support",
      "Free and open source",
      "Lightweight media player",
    ],
    requirements:
      "Windows 7 or later, macOS, Linux, Android, or iOS.",
    faqs: [
      {
        question: "Is VLC Media Player free?",
        answer:
          "Yes, VLC Media Player is completely free and open-source software.",
      },
      {
        question: "Can VLC play MKV files?",
        answer:
          "Yes, VLC supports MKV, MP4, AVI, MOV and many other formats.",
      },
    ],
  },

  "7-zip": {
    name: "7-Zip",
    image: "/software/7zip.png",
    category: "File Compression",
    version: "Latest Version",
    size: "5 MB",
    description:
      "7-Zip is a powerful open-source file archiver with a high compression ratio and support for multiple archive formats.",
    download: "https://www.7-zip.org/",
    officialWebsite: "https://www.7-zip.org/",
    developer: "Igor Pavlov",
    license: "Open Source",
    platforms: ["Windows"],
    lastUpdated: "July 2026",
    features: [
      "High compression ratio",
      "Supports 7z and ZIP formats",
      "Extracts multiple archive formats",
      "Password protection support",
      "AES-256 encryption",
      "Free and open-source software",
    ],
    requirements:
      "Windows 10 or Windows 11. Both 32-bit and 64-bit versions are supported.",
    faqs: [
      {
        question: "Is 7-Zip free?",
        answer:
          "Yes, 7-Zip is free and open-source software.",
      },
      {
        question: "Can 7-Zip open RAR files?",
        answer:
          "Yes, 7-Zip can extract RAR files, but it cannot create RAR archives.",
      },
    ],
  },

  "microsoft-office": {
    name: "Microsoft Office",
    image: "/software/microsoft-office.png",
    category: "Office Software",
    version: "Microsoft 365",
    size: "Varies",
    description:
      "Microsoft Office provides professional productivity applications including Word, Excel, PowerPoint and Outlook.",
    download: "https://www.microsoft.com/microsoft-365",
    officialWebsite: "https://www.microsoft.com/microsoft-365",
    developer: "Microsoft Corporation",
    license: "Commercial",
    platforms: ["Windows", "macOS", "Android", "iOS", "Web"],
    lastUpdated: "July 2026",
    features: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Outlook",
      "OneDrive cloud integration",
      "Real-time document collaboration",
    ],
    requirements:
      "Windows 10 or later, supported macOS version, internet connection and Microsoft account.",
    faqs: [
      {
        question: "Is Microsoft Office free?",
        answer:
          "Microsoft 365 normally requires a paid subscription, but some web-based Office applications are available free with a Microsoft account.",
      },
      {
        question: "Does Microsoft Office work offline?",
        answer:
          "Yes, installed Microsoft Office applications can work offline, but some cloud features require an internet connection.",
      },
    ],
  },
};