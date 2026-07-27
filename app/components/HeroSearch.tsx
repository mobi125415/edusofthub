"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { softwareData } from "../software/data";

export default function HeroSearch() {
  const [query, setQuery] = useState("");

  const websitePages = [
    {
      name: "Education Notes",
      description: "Class 9 to 12 educational notes and study resources",
      href: "#education",
      category: "Education",
    },
    {
      name: "AI Tools",
      description: "Explore useful artificial intelligence tools",
      href: "#ai-tools",
      category: "AI Tools",
    },
    {
      name: "Enroll for Courses",
      description: "Join professional and educational courses",
      href: "#courses",
      category: "Courses",
    },
    {
      name: "Blog",
      description: "Read tutorials, guides and helpful articles",
      href: "#blog",
      category: "Blog",
    },
  ];

  const softwarePages = Object.entries(softwareData).map(([slug, item]) => ({
    name: item.name,
    description: item.description,
    category: item.category,
    href: `/software/${slug}`,
  }));

  const allItems = [...softwarePages, ...websitePages];

  const results = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return [];

    return allItems
      .filter((item) => {
        return (
          item.name.toLowerCase().includes(searchText) ||
          item.description.toLowerCase().includes(searchText) ||
          item.category.toLowerCase().includes(searchText)
        );
      })
      .slice(0, 6);
  }, [query]);

  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-blue-800/30 to-indigo-950/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md">
          Your Complete Learning & Download Platform
        </p>

        <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
          Software, Education, AI Tools and Online Courses
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Discover trusted software, educational notes, useful AI tools,
          professional courses and helpful digital resources.
        </p>

        {/* Search Box */}
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white p-3 shadow-2xl">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search software, notes, AI tools or courses..."
              className="min-w-0 flex-1 rounded-xl px-5 py-4 text-slate-900 outline-none"
            />

            <button
              type="button"
              className="rounded-xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Search
            </button>
          </div>

          {/* Search Results */}
          {query.trim() && (
            <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl">
              {results.length > 0 ? (
                results.map((item) => (
                  <Link
                    key={`${item.name}-${item.href}`}
                    href={item.href}
                    onClick={() => setQuery("")}
                    className="block border-b border-slate-100 px-5 py-4 transition last:border-0 hover:bg-blue-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.name}
                        </h3>

                        <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.category}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="px-5 py-6 text-center text-slate-500">
                  No result found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#software"
            className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Browse Software
          </Link>

          <Link
            href="#education"
            className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
          >
            Explore Notes
          </Link>

          <Link
            href="#courses"
            className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
          >
            Enroll for Courses
          </Link>
        </div>

        <a
          href="https://wa.me/923010012627?text=Assalam-o-Alaikum%2C%20mujhe%20EduSoftHub%20ke%20bare%20mein%20information%20chahiye."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex rounded-xl bg-green-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600"
        >
          Chat Directly with the CEO/Team of EduSoftHub
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-blue-100">
          <span>✓ Free Resources</span>
          <span>✓ Trusted Downloads</span>
          <span>✓ Educational Notes</span>
          <span>✓ Online Courses</span>
        </div>
      </div>
    </section>
  );
}