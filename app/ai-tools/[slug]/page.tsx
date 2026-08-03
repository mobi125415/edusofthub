import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { aiToolsData } from "../data";

export default async function AIToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool =
    aiToolsData[slug as keyof typeof aiToolsData];

  if (!tool) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-2xl">

        <div className="flex flex-col gap-10 md:flex-row">

          <div className="flex justify-center">
            <Image
              src={tool.image}
              alt={tool.name}
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          <div className="flex-1">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {tool.category}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold">
              {tool.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {tool.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Developer
                </p>

                <h3 className="mt-2 font-bold">
                  {tool.developer}
                </h3>
              </div>

              <div className="rounded-xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Pricing
                </p>

                <h3 className="mt-2 font-bold">
                  {tool.pricing}
                </h3>
              </div>

            </div>

            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Visit Official Website
            </a>

          </div>

        </div>

        <section className="mt-14">

          <h2 className="text-3xl font-bold">
            Features
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {tool.features.map((feature) => (

              <div
                key={feature}
                className="rounded-xl bg-slate-100 p-5"
              >
                ✓ {feature}
              </div>

            ))}

          </div>

        </section>

        <section className="mt-14">

          <Link
            href="/ai-tools"
            className="inline-block rounded-xl bg-slate-900 px-7 py-3 font-bold text-white"
          >
            ← Back to AI Tools
          </Link>

        </section>

      </div>
    </main>
  );
}
