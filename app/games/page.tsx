"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { gamesData } from "./data";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const games = Object.entries(gamesData);

  const categories = [
    "All",
    ...Array.from(
      new Set(games.map(([, game]) => game.category))
    ),
  ];

  const filteredGames = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return games.filter(([, game]) => {
      const matchesSearch =
        game.name.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query) ||
        game.developer.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        game.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  return (
    <main className="relative isolate min-h-screen bg-transparent px-4 py-16 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Games Collection
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Download PC Games
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Search and explore trusted PC games with official download
            links, system requirements and complete details.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl">
            <Search className="h-5 w-5 shrink-0 text-slate-500" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search by game name, category or developer..."
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
        </div>

        {/* Categories Filter */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl transition ${
                  isActive
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-white/70 bg-white/85 text-slate-700 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Result Count */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Available Games
          </h2>

          <p className="font-medium text-slate-600">
            {filteredGames.length}{" "}
            {filteredGames.length === 1 ? "game" : "games"} found
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGames.map(([slug, game]) => (
              <Link
                key={slug}
                href={`/games/${slug}`}
                className="group overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-2xl"
              >
                <div className="flex min-h-[130px] items-center justify-center">
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={120}
                    height={120}
                    className="max-h-[120px] w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 text-center">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {game.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    {game.name}
                  </h2>

                  <p className="mt-3 min-h-[72px] leading-6 text-slate-600">
                    {game.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
                    <span>{game.version}</span>
                    <span>{game.size}</span>
                  </div>

                  <div className="mt-6 rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-white/70 bg-white/90 px-6 py-16 text-center shadow-xl backdrop-blur-xl">
            <div className="text-5xl">🎮</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              No games found
            </h3>

            <p className="mt-2 text-slate-600">
              Search text ya category change karke dobara try karein.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}