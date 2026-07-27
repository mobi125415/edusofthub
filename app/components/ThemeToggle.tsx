"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const themeOptions = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Laptop,
  },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" />
    );
  }

  const activeTheme =
    themeOptions.find((option) => option.value === theme) ??
    themeOptions[2];

  const ActiveIcon = activeTheme.icon;

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-xl transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
        aria-label="Change website theme"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <ActiveIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-14 z-[100] w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Select Theme
          </p>

          {themeOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitem"
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                  isSelected
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="flex-1">{option.label}</span>

                {option.value === "system" && (
                  <span className="text-xs text-slate-400">
                    Default
                  </span>
                )}

                {isSelected && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}