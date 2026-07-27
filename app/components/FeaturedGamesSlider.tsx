"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { gamesData } from "../games/data";

export default function FeaturedGamesSlider() {
  const games = Object.entries(gamesData)
    .slice(0, 3)
    .map(([slug, game]) => ({
      slug,
      ...game,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === games.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? games.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((current) =>
        current === games.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [games.length]);

  const currentGame = games[currentIndex];

  if (!currentGame) {
    return null;
  }

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-2xl backdrop-blur-xl">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

          <div className="grid min-h-[480px] items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                Featured Game
              </span>

              <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
                {currentGame.name}
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                {currentGame.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {currentGame.category}
                </span>

                <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {currentGame.version}
                </span>

                <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {currentGame.size}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/games/${currentGame.slug}`}
                  className="rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
                >
                  View Game Details
                </Link>

                <Link
                  href="/games"
                  className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                >
                  Browse All Games
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

              <Image
                src={currentGame.image}
                alt={currentGame.name}
                width={350}
                height={350}
                priority
                className="relative z-10 max-h-[320px] w-auto object-contain drop-shadow-2xl transition duration-500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous game"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-3 text-slate-700 shadow-lg transition hover:bg-blue-700 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next game"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-3 text-slate-700 shadow-lg transition hover:bg-blue-700 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {games.map((game, index) => (
              <button
                key={game.slug}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Open ${game.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-slate-300 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}