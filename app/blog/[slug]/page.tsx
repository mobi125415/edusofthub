import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    return {
      title: "Article Not Found | EduSoftHub",
    };
  }

  return {
    title: `${post.title} | EduSoftHub`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  const relatedPosts = Object.entries(blogData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-blue-700">
            Home
          </Link>

          <span>/</span>

          <Link href="/blog" className="transition hover:text-blue-700">
            Blog
          </Link>

          <span>/</span>

          <span className="font-semibold text-slate-900">
            {post.title}
          </span>
        </div>

        {/* Article */}
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative h-[280px] w-full sm:h-[420px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-cover object-center"
            />
          </div>

          <div className="p-6 sm:p-10">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {post.category}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {post.description}
            </p>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg">
                {post.content}
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <h2 className="text-xl font-bold text-slate-900">
                Official and Trusted Information
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                EduSoftHub provides useful guides, software information and
                official resource links for users.
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-semibold uppercase tracking-wider text-blue-700">
                Keep Reading
              </p>

              <h2 className="mt-2 text-3xl font-extrabold">
                Related Articles
              </h2>
            </div>

            <Link
              href="/blog"
              className="font-bold text-blue-700 transition hover:text-blue-900"
            >
              View All Articles →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedPosts.map(([key, item]) => (
              <Link
                key={key}
                href={`/blog/${key}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}