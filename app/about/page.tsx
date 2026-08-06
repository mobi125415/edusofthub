import Link from "next/link";
import {
  BookOpen,
  Bot,
  CheckCircle2,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

const services = [
  {
    title: "Trusted Software",
    description:
      "Explore useful software with official download sources and complete details.",
    icon: Wrench,
  },
  {
    title: "AI Tools",
    description:
      "Discover modern AI assistants, research tools and productivity platforms.",
    icon: Bot,
  },
  {
    title: "Educational Resources",
    description:
      "Access notes, tutorials, study guides and learning materials.",
    icon: BookOpen,
  },
  {
    title: "PC Games",
    description:
      "Find popular PC games with requirements and official information.",
    icon: Gamepad2,
  },
];

const benefits = [
  "Official and trusted resource links",
  "Clear software and tool information",
  "Simple and fast user experience",
  "Regular content and resource updates",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-transparent px-5 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="rounded-3xl border border-white/70 bg-white/90 px-6 py-14 text-center shadow-xl backdrop-blur-xl sm:px-10">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About EduSoftHub
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            A Trusted Platform for Software, AI Tools, Games and Education
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            EduSoftHub helps users discover reliable digital resources,
            official software links, useful AI tools, educational content and
            technology guides in one place.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/software"
              className="rounded-xl bg-blue-700 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Explore Software
            </Link>

            <Link
              href="/ai-tools"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
            >
              Explore AI Tools
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Sparkles className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our mission is to make useful digital resources easier to find,
              understand and access. We focus on providing clear information,
              official links and helpful guides for students, professionals and
              everyday users.
            </p>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold">
              Our Commitment
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              We aim to keep EduSoftHub simple, useful and trustworthy. We
              prioritize official sources, clear descriptions and a better
              browsing experience across every section of the website.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mt-16">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-700">
              What We Offer
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Useful Digital Resources in One Place
            </h2>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-white/70 bg-white/90 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-16 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-wider text-blue-700">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-4xl font-extrabold">
                Simple, Useful and Trusted
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                EduSoftHub is designed to help users find reliable information
                quickly without unnecessary confusion.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                  <span className="font-semibold text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Start Exploring EduSoftHub
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Discover trusted software, AI tools, games, educational resources
            and useful technology guides.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/software"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Browse Software
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}