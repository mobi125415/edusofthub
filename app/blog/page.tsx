"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogData } from "./data";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = Object.entries(blogData);

  const categories = [
    "All",
    ...Array.from(
      new Set(posts.map(([, post]) => post.category))
    ),
  ];

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter(([, post]) => {
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, posts]);

  return (
    <main className="relative min-h-screen bg-transparent px-4 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <section className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            EduSoftHub Blog
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Latest Tech Articles
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Read useful guides about software, AI tools, Windows tips,
            education and technology.
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
              placeholder="Search articles by title, category or author..."
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

        {/* Categories */}
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

        {/* Result Header */}
        <section className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">
              Latest Articles
            </h2>

            <p className="mt-2 text-slate-600">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1
                ? "article"
                : "articles"}{" "}
              available
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Back to Home
          </Link>
        </section>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <section className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(([slug, post], index) => (
              <article
                key={slug}
                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400 hover:bg-white hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white shadow">
                    {index < 2 ? "Featured" : post.category}
                  </span>

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex min-h-[320px] flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-extrabold text-slate-900 transition group-hover:text-blue-700">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    By {post.author}
                  </p>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${slug}`}
                    className="mt-6 block rounded-xl bg-blue-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-blue-800"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="mt-10 rounded-3xl border border-white/70 bg-white/90 px-6 py-16 text-center shadow-xl backdrop-blur-xl">
            <div className="text-5xl">📰</div>

            <h3 className="mt-5 text-2xl font-extrabold">
              No articles found
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
