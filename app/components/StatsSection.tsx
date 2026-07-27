"use client";

import { useEffect, useState } from "react";

function Counter({
  end,
  suffix = "+",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(end / 60);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      value: 500,
      label: "Software",
    },
    {
      value: 500,
      label: "Games",
    },
    {
      value: 1000,
      label: "Study Notes",
    },
    {
      value: 50000,
      label: "Downloads",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/20"
          >
            <h2 className="text-5xl font-extrabold">
              <Counter end={item.value} />
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}