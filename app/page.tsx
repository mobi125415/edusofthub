import Image from "next/image";
import Link from "next/link";
import { softwareData } from "./software/data";
import HeroSearch from "./components/HeroSearch";
import ScrollReveal from "./components/ScrollReveal";
import StatsSection from "./components/StatsSection";
import AmbientVideoBackground from "./components/AmbientVideoBackground";


export default function Home() {
  const categories = [
    {
      icon: "💻",
      title: "Free Software",
      description: "Download useful and trusted free software.",
    },
    {
      icon: "📚",
      title: "Education",
      description: "Notes, tutorials, study guides and resources.",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      description: "Discover the latest AI tools and helpful guides.",
    },
    {
      icon: "💼",
      title: "Jobs",
      description: "Explore government, private and online jobs.",
    },
  ];
const software = Object.entries(softwareData).map(
  ([slug, item]) => ({
    slug,
    ...item,
    badge: "Popular",
  })
);

  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
  <AmbientVideoBackground />
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-white/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-xl font-bold text-white">
              E
            </div>

            <div>
              <h2 className="text-xl font-extrabold">
                EduSoft<span className="text-blue-700">Hub</span>
              </h2>

              <p className="text-xs text-slate-500">
                Learn. Download. Grow.
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#" className="text-blue-700">
              Home
            </a>

            <a href="#software" className="hover:text-blue-700">
              Software
            </a>

            <a href="#education" className="hover:text-blue-700">
              Education
            </a>

            <a href="#ai-tools" className="hover:text-blue-700">
              AI Tools
            </a>

           <a href="#courses" className="hover:text-blue-700">
               Enroll for Courses
            </a>

            <a href="#blog" className="hover:text-blue-700">
              Blog
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
          <HeroSearch />
        <StatsSection />
      {/* Categories */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
       <ScrollReveal>
  <div className="mb-12 text-center">
    <p className="font-semibold uppercase tracking-wider text-blue-700">
      Explore Resources
    </p>

    <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
      Popular Categories
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      Find useful resources for learning, working and improving your
      digital skills.
    </p>
  </div>
</ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
          <ScrollReveal
          key={category.title}
           delay={index * 150}
           >
         <article className="h-full rounded-2xl border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:bg-white/90 hover:shadow-2xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
        {category.icon}
      </div>

      <h3 className="text-xl font-bold">
        {category.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {category.description}
      </p>

      <a
        href="#"
        className="mt-5 inline-block font-semibold text-blue-700"
      >
        Explore Category →
          </a>
       </article>
  </ScrollReveal>
))}
        </div>
      </section>

      {/* Latest Software */}
      <section
        id="software"
        className="border-y border-slate-200/80 bg-white/80 py-20 backdrop-blur-[2px]"
      >
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
    <div>
      <p className="font-semibold uppercase tracking-wider text-blue-700">
        Free Downloads
      </p>

      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
        Latest Software
      </h2>

      <p className="mt-4 max-w-2xl text-slate-600">
        Explore useful, trusted and legally available software.
      </p>
    </div>

    <a
      href="/software"
      className="font-bold text-blue-700 transition hover:translate-x-1 hover:text-blue-900"
    >
      View All Software →
    </a>
  </div>
</ScrollReveal>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {software.map((item, index) => (
  <ScrollReveal
    key={item.name}
    delay={index * 150}
  >
    <article
      className="group overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-300 hover:bg-white/90 hover:shadow-2xl"
    >
                {/* Software Image */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                    {item.badge}
                  </span>

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl" />

                  <Image
                    src={item.image}
                    alt={`${item.name} logo`}
                    width={140}
                    height={140}
                    className="relative z-10 h-28 w-28 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Software Details */}
                <div className="flex min-h-[270px] flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.category}
                    </span>

                    <span className="text-xs font-medium text-slate-500">
                      {item.version}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 transition group-hover:text-blue-700">
                    {item.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                    <span>✓ Trusted</span>
                    <span>✓ Safe Download</span>
                  </div>

                 <Link
  href={`/software/${item.slug}`}
  className="mt-5 block rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3.5 text-center font-bold text-white shadow-md transition-all duration-300 hover:from-blue-800 hover:to-indigo-800 hover:shadow-lg"
>
  View Download →
          </Link>
        </div>
      </article>
      </ScrollReveal>
      ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
  id="contact"
  className="relative z-20 bg-slate-950 text-slate-300"
>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-extrabold text-white">
                E
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white">
                  EduSoft<span className="text-blue-500">Hub</span>
                </h2>

                <p className="text-xs text-slate-400">
                  Learn. Download. Grow.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Your trusted platform for free software, education,
              AI tools, tutorials and career resources.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#" className="hover:text-blue-400">
                Home
              </a>

              <a href="#software" className="hover:text-blue-400">
                Software
              </a>

              <a href="#education" className="hover:text-blue-400">
                Education
              </a>

              <a href="#jobs" className="hover:text-blue-400">
                Jobs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#" className="hover:text-blue-400">
                AI Tools
              </a>

              <a href="#" className="hover:text-blue-400">
                Tutorials
              </a>

              <a href="#" className="hover:text-blue-400">
                CV Templates
              </a>

              <a href="#" className="hover:text-blue-400">
                Blog
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Important Pages
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>

              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>

              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-blue-400">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 EduSoftHub. All rights reservedcd C:\Users\TRAVELO\Desktop\edusofthub-clean.
            </p>

            <p>
              Free, useful and trusted digital resources.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
