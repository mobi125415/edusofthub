import Image from "next/image";
import { notFound } from "next/navigation";
import { softwareData } from "../data";

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const software =
    softwareData[slug as keyof typeof softwareData];

  if (!software) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-lg">

        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row">

          <div className="flex items-center justify-center">
            <Image
              src={software.image}
              alt={software.name}
              width={180}
              height={180}
              className="object-contain"
            />
          </div>


          <div className="flex-1">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {software.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-slate-900">
              {software.name}
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              {software.description}
            </p>


            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-4">
                <b>Version:</b> {software.version}
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <b>Size:</b> {software.size}
              </div>

            </div>


            <a
              href={software.download}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-800"
            >
              Download Official Version
            </a>

          </div>

        </div>


        {/* Features */}

        <section className="mt-14">

          <h2 className="text-2xl font-bold">
            Features
          </h2>


          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {software.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-slate-100 p-4"
              >
                ✓ {feature}
              </div>
            ))}

          </div>

        </section>


        {/* Requirements */}

        <section className="mt-10">

          <h2 className="text-2xl font-bold">
            System Requirements
          </h2>

          <p className="mt-3 text-slate-600">
            {software.requirements}
          </p>

        </section>


      </div>
    </main>
  );
}
