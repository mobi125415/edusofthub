import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { softwareData } from "../data";

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const software = softwareData[slug as keyof typeof softwareData];

  if (!software) {
    notFound();
  }

  const relatedSoftware = Object.entries(softwareData).filter(
    ([key]) => key !== slug
  );

  return (
    <main className="relative z-10 min-h-screen bg-slate-100 px-6 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
  <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
            <Image
              src={software.image}
              alt={software.name}
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex-1">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {software.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">
              {software.name}
            </h1>

            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              {software.description}
            </p>

            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-100 p-4 text-slate-800">
                <span className="font-bold text-slate-950">Version:</span>{" "}
                {software.version}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-100 p-4 text-slate-800">
                <span className="font-bold text-slate-950">Size:</span>{" "}
                {software.size}
              </div>
            </div>

            <a
              href={software.download}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-800"
            >
              Download Official Version
            </a>
          </div>
        </div>

        {/* Features */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Features
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {software.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-slate-100 p-4 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
              >
                <span className="mr-2 font-bold text-green-600">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">
            System Requirements
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {software.requirements}
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-950">
                Is this software free?
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Download is available from the official website.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-950">
                Is it safe to download?
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                Yes. We only provide the official download source.
              </p>
            </div>
          </div>
        </section>

        {/* Related Software */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-950">
            Related Software
          </h2>

          <div className="mt-6 grid gap-5 pb-4 sm:grid-cols-2 md:grid-cols-3">
            {relatedSoftware.map(([key, item]) => (
              <Link
                key={key}
                href={`/software/${key}`}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-5 text-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:bg-blue-700 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="h-16 w-16 object-contain transition duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-4 font-bold text-slate-950 transition duration-300 group-hover:text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-700 transition duration-300 group-hover:text-blue-100">
                    {item.category}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-8 rounded-xl bg-white px-4 py-2 text-center text-sm font-bold text-blue-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Software →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
