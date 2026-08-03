"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { aiToolsData } from "./data";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const aiTools = Object.entries(aiToolsData);

const categories = [
  "All",
  ...Array.from(
    new Set(aiTools.map(([, tool]) => tool.category))
  ),
];

const filteredTools = aiTools.filter(([, tool]) => {
  const query = searchQuery.trim().toLowerCase();

  const matchesSearch =
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query) ||
    tool.developer.toLowerCase().includes(query);

  const matchesCategory =
    selectedCategory === "All" ||
    tool.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="relative min-h-screen bg-transparent px-4 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <section className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            AI Tools Directory
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Discover Powerful AI Tools
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore useful AI assistants, research tools, writing tools and
            productivity platforms with official website links.
          </p>
        </section>

        {/* Search */}
        <section className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl">
            <Search className="h-5 w-5 shrink-0 text-slate-500" />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search AI tools by name, category or developer..."
              className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="rounded-lg px-3 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Clear
              </button>
            )}
          </div>
        </section>

        {/* Category Filters */}
        <section className="mt-7 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-xl transition ${
                  isActive
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-white/70 bg-white/85 text-slate-700 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </section>

        {/* Results Header */}
        <section className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">
              Popular AI Tools
            </h2>

            <p className="mt-2 text-slate-600">
              {filteredTools.length}{" "}
              {filteredTools.length === 1 ? "tool" : "tools"} available
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Back to Home
          </Link>
        </section>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <section className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map(([slug, tool], index) => (
              <article
                key={slug}
                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:bg-white hover:shadow-2xl"
              >
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
                  <span className="absolute left-4 top-4 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {index < 2 ? "Popular" : "Official"}
                  </span>

                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex min-h-[340px] flex-col p-6">
                    <div className="mb-4 flex items-center justify-between">
                 <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                 ✓ Verified
                     </span>

                    <span className="text-yellow-500">
                       ★★★★★
                 </span>
                </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {tool.category}
                    </span>

                    <span className="text-xs font-medium text-slate-500">
                      {tool.pricing}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-extrabold text-slate-900 transition group-hover:text-blue-700">
                    {tool.name}
                  </h2>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {tool.developer}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                     <span className="font-semibold text-blue-700">
                         {tool.developer}
                     </span>

                    <span className="text-slate-500">
                              Free / Paid
                    </span>
                    </div>

                  <Link
                    href={`/ai-tools/${slug}`}
                    className="mt-6 block rounded-xl bg-blue-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-blue-800"
                  >
                    <div className="mt-5 rounded-xl bg-slate-100 p-3 text-center text-sm font-semibold text-slate-700">
                    🌍 Official Website Available
                    </div>
                    View AI Tool
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="mt-10 rounded-3xl border border-white/70 bg-white/90 px-6 py-16 text-center shadow-xl backdrop-blur-xl">
            <div className="text-5xl">🤖</div>

            <h3 className="mt-5 text-2xl font-extrabold">
              No AI tools found
            </h3>

            <p className="mt-3 text-slate-600">
              Search text ya category change karke dobara try karein.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Reset Filters
            </button>
          </section>
        )}
      </div>
    </main>
  );
}









