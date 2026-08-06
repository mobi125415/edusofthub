import Image from "next/image";
import Link from "next/link";
import { softwareData } from "./software/data";
import HeroSearch from "./components/HeroSearch";
import ScrollReveal from "./components/ScrollReveal";
import StatsSection from "./components/StatsSection";
import AmbientVideoBackground from "./components/AmbientVideoBackground";
import { gamesData } from "./games/data";
import FeaturedGamesSlider from "./components/FeaturedGamesSlider";
import { aiToolsData } from "./ai-tools/data";
import { blogData } from "./blog/data";

export default function Home() {
  const categories = [
    {
      title: "Free Software",
      description: "Download useful and trusted free software.",
      icon: "💻",
      href: "/software",
    },
    {
      title: "Education",
      description: "Notes, tutorials, study guides and resources.",
      icon: "📚",
      href: "/education",
    },
    {
      title: "AI Tools",
      description: "Discover the latest AI tools and helpful guides.",
      icon: "🤖",
      href: "/ai-tools",
    },
    {
      title: "Enroll for Courses",
      description: "Enroll in online courses and upgrade your skills.",
      icon: "🎓",
      href: "/courses",
    },
    {
      title: "Fees Software for School",
      description: "Smart fee management software solutions for schools.",
      icon: "🏫",
      href: "/school-fees-software",
    },
  ];
  const software = Object.entries(softwareData).map(
    ([slug, item]) => ({
      slug,
      ...item,
      badge: "Popular",
    })
  );

  const popularGames = Object.entries(gamesData)
    .slice(0, 3)
    .map(([slug, item]) => ({
      slug,
      ...item,
    }));
   
    const popularAITools = Object.entries(aiToolsData)
  .slice(0, 4)
  .map(([slug, item]) => ({
    slug,
    ...item,
  }));

const trendingSoftware = Object.entries(softwareData)
  .slice(0, 4)
  .map(([slug, item], index) => ({
    slug,
    ...item,
    downloads: [
      "3.2M",
      "2.8M",
      "1.7M",
      "5.4M",
    ][index],
  }));
const latestBlogs = Object.entries(blogData)
  .slice(0, 3)
  .map(([slug, item]) => ({
    slug,
    ...item,
  }));
  return (
      <main className="relative min-h-screen bg-transparent text-slate-900">
      <AmbientVideoBackground />
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-white/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-5 text-sm font-semibold md:flex">
  <Link href="/" className="text-blue-700">
    Home
  </Link>

  <Link href="/software" className="hover:text-blue-700">
    Software
  </Link>

  <Link href="/games" className="hover:text-blue-700">
    Games
  </Link>

  <Link href="/education" className="hover:text-blue-700">
    Education
  </Link>

  <Link href="/ai-tools" className="hover:text-blue-700">
    AI Tools
  </Link>

  <Link href="/blog" className="hover:text-blue-700">
    Blog
  </Link>

  <Link href="/about" className="hover:text-blue-700">
    About
  </Link>
</div>

          {/* Contact Button */}
          <Link
  href="/contact"
  className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
>
  Contact Us
</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSearch />
      <StatsSection />
      <FeaturedGamesSlider />
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

                <Link
                  href={category.href}
                  className="mt-5 inline-block font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                  Explore Category →
                </Link>


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

              <Link
                href="/software"
                className="font-bold text-blue-700 transition hover:translate-x-1 hover:text-blue-900"
              >
                View All Software →
              </Link>
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


      {/* Popular Games */}
      <section id="games" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">

          <ScrollReveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-semibold uppercase tracking-wider text-blue-700">
                  Play and Explore
                </p>

                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Popular PC Games
                </h2>

                <p className="mt-4 max-w-2xl text-slate-600">
                  Discover popular PC games with official download links,
                  requirements and detailed information.
                </p>
              </div>

              <Link
                href="/games"
                className="font-bold text-blue-700 transition hover:translate-x-1 hover:text-blue-900"
              >
                View All Games →
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {popularGames.map((game, index) => (
              <ScrollReveal
                key={game.slug}
                delay={index * 150}
              >
                <article className="group overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:bg-white/90 hover:shadow-2xl">

                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">

                    <span className="absolute left-4 top-4 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
                      Popular
                    </span>

                    <Image
                      src={game.image}
                      alt={game.name}
                      width={150}
                      height={150}
                      className="relative z-10 h-32 w-32 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex min-h-[260px] flex-col p-6">

                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {game.category}
                      </span>

                      <span className="text-xs text-slate-500">
                        {game.size}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {game.name}
                    </h3>

                    <p className="mt-3 flex-1 text-slate-600">
                      {game.description}
                    </p>

                    <Link
                      href={`/games/${game.slug}`}
                      className="mt-6 block rounded-xl bg-blue-700 py-3 text-center font-bold text-white transition hover:bg-blue-800"
                    >
                      View Game →
                    </Link>

                  </div>

                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
<section className="py-20">

<div className="mx-auto max-w-7xl px-6">

<div className="mb-12 text-center">

<p className="font-semibold uppercase tracking-widest text-blue-700">
Trending
</p>

<h2 className="mt-3 text-4xl font-extrabold">
🔥 Trending Downloads
</h2>

</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{trendingSoftware.map((item)=>(

<div
key={item.slug}
className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
>

<Image
src={item.image}
alt={item.name}
width={90}
height={90}
className="mx-auto h-20 w-20 object-contain transition duration-500 group-hover:scale-110"
/>

<h3 className="mt-6 text-center text-xl font-bold">
{item.name}
</h3>

<p className="mt-2 text-center text-yellow-500">
★★★★★
</p>

<p className="mt-3 text-center text-slate-600">

{item.downloads} Downloads

</p>

<Link
href={`/software/${item.slug}`}
className="mt-6 block rounded-xl bg-blue-700 py-3 text-center font-bold text-white hover:bg-blue-800"
>

View Software →

</Link>

</div>

))}

</div>

</div>

</section>


        {/* AI Tools */}
<section id="ai-tools" className="py-20 bg-white/80">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-12 flex items-end justify-between">

      <div>

        <p className="font-semibold uppercase tracking-wider text-blue-700">
          Artificial Intelligence
        </p>

        <h2 className="mt-3 text-4xl font-extrabold">
          Popular AI Tools
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Explore the latest AI tools and resources to enhance your
          productivity and creativity.
        </p>  
        </div>

      <Link
        href="/ai-tools"
        className="font-bold text-blue-700"
      >
        View All →
      </Link>

    </div>
    
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

      {popularAITools.map((tool) => (

       <article
          key={tool.slug}
         className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-400 hover:shadow-2xl"
        >

          <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            
            <Image
  src={tool.image}
  alt={tool.name}
  width={120}
  height={120}
  className="h-28 w-28 object-contain transition duration-500 group-hover:scale-110"
/>

          </div>

          <div className="p-6">

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {tool.category}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
              {tool.name}
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              {tool.description}
            </p>

            <Link
              href={`/ai-tools/${tool.slug}`}
              className="mt-6 block rounded-xl bg-blue-700 py-3 text-center font-bold text-white transition-all duration-300 hover:bg-blue-800 group-hover:shadow-lg"
            >
              View Tool →
            </Link>

          </div>

        </article>

      ))}

    </div>

  </div>
</section>

      </section>

     {/* Latest Blog */}
<section
  id="blog"
  className="relative z-10 bg-slate-50/95 py-20"
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="font-semibold uppercase tracking-wider text-blue-700">
          Blog
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
          Latest Articles
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Read useful guides about software, AI tools, Windows tips and
          technology.
        </p>
      </div>

      <Link
        href="/blog"
        className="font-bold text-blue-700 transition hover:text-blue-900"
      >
        View All Articles →
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {latestBlogs.map((post) => (
        <article
          key={post.slug}
          className="group relative z-10 flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-400 hover:shadow-2xl"
        >
          <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center opacity-100 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative z-10 flex flex-1 flex-col bg-white p-6">
            <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {post.category}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
              {post.title}
            </h3>

            <p className="mt-3 flex-1 leading-7 text-slate-600">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 block rounded-xl bg-blue-700 py-3 text-center font-bold text-white transition hover:bg-blue-800"
            >
              Read Article →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* About EduSoftHub */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

      <p className="text-sm font-semibold uppercase tracking-wider">
        About EduSoftHub
      </p>

      <h2 className="mt-4 text-4xl font-extrabold">
        Trusted Software, AI Tools & Educational Resources
      </h2>

      <p className="mt-5 max-w-3xl text-blue-100">
        EduSoftHub provides trusted software downloads, AI tools,
        educational resources, games and technology articles from
        official sources.
      </p>

      <Link
        href="/about"
        className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
      >
        Learn More →
      </Link>

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
              <Link
  href="/privacy-policy"
  className="hover:text-blue-400"
>
  Privacy Policy
</Link>

              <Link href="/software" className="hover:text-blue-400">
                 Software
              </Link>

              <Link href="/education" className="hover:text-blue-400">
                Education
              </Link>

              <Link href="/games" className="hover:text-blue-400">
                Games
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/ai-tools" className="hover:text-blue-400">
                  AI Tools
              </Link>

              <Link href="/blog" className="hover:text-blue-400">
                  Tutorials
              </Link>

              <Link href="/cv-templates" className="hover:text-blue-400">
                CV Templates
              </Link>

              <Link href="/blog" className="hover:text-blue-400">
                  Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              Important Pages
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/about" className="hover:text-blue-400">
                  About Us
              </Link>

              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>

              <Link
               href="/privacy-policy"
               className="hover:text-blue-400"
                >
               Privacy Policy
               </Link>

              <Link href="/disclaimer" className="hover:text-blue-400">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 EduSoftHub. All rights reserved.
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







