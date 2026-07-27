"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { softwareData } from "./data";

export default function SoftwareListingPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const softwareList = Object.entries(softwareData);

  const categories = [
    "All",
    ...Array.from(
      new Set(softwareList.map(([, item]) => item.category))
    ),
  ];

  const filteredSoftware = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return softwareList.filter(([, item]) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        item.developer.toLowerCase().includes(searchText);

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, softwareList]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
            Trusted & Official Downloads
          </p>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Browse Software
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore trusted software with official download links, features,
            system requirements and complete details.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search software by name, category or developer..."
              className="w-full rounded-2xl bg-white px-6 py-5 text-slate-900 shadow-2xl outline-none ring-2 ring-transparent transition focus:ring-blue-300"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">
              All Software
            </h2>

            <p className="mt-2 text-slate-600">
              {filteredSoftware.length} software available
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Back to Home
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                selectedCategory === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredSoftware.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSoftware.map(([slug, item]) => (
              <article
                key={slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                    Official
                  </span>

                  <Image
                    src={item.image}
                    alt={`${item.name} logo`}
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex min-h-[330px] flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.category}
                    </span>

                    <span className="text-xs font-medium text-slate-500">
                      {item.version}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold transition group-hover:text-blue-700">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {item.developer}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                    <span>{item.size}</span>
                    <span>{item.license}</span>
                  </div>

                  <Link
                    href={`/software/${slug}`}
                    className="mt-5 block rounded-xl bg-blue-700 px-5 py-3.5 text-center font-bold text-white transition hover:bg-blue-800"
                  >
                    View Software
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <h3 className="text-2xl font-extrabold">
              No software found
            </h3>

            <p className="mt-3 text-slate-600">
              Search text ya category change karke dobara try karein.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
