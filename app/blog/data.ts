export type BlogPost = {
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  content: string;
};

export const blogData: Record<string, BlogPost> = {
  "how-to-install-google-chrome": {
    title: "How to Install Google Chrome on Windows",
    image: "/blog/chrome.jpg",
    category: "Software",
    author: "EduSoftHub",
    date: "06 August 2026",
    readTime: "5 min read",
    description:
      "Learn how to download and install Google Chrome safely from the official website.",
    content:
      "Google Chrome is one of the world's most popular web browsers. In this guide you'll learn how to download, install and keep Chrome updated safely.",
  },

  "best-ai-tools-2026": {
    title: "Best AI Tools in 2026",
    image: "/blog/ai-tools.jpg",
    category: "AI Tools",
    author: "EduSoftHub",
    date: "06 August 2026",
    readTime: "8 min read",
    description:
      "Discover the best AI tools for writing, coding, designing and productivity.",
    content:
      "Artificial Intelligence is changing how we work. Here are the top AI tools you should know.",
  },

  "top-free-software": {
    title: "Top Free Software Every PC Should Have",
    image: "/blog/software.jpg",
    category: "Software",
    author: "EduSoftHub",
    date: "06 August 2026",
    readTime: "6 min read",
    description:
      "Essential free software for every Windows computer.",
    content:
      "From browsers to media players and office apps, these are the most useful free programs.",
  },

  "speed-up-windows": {
    title: "10 Ways to Speed Up Windows",
    image: "/blog/windows.jpg",
    category: "Windows Tips",
    author: "EduSoftHub",
    date: "06 August 2026",
    readTime: "7 min read",
    description:
      "Easy methods to make your Windows PC faster.",
    content:
      "Follow these practical tips to improve your PC performance without spending money.",
  },
};
