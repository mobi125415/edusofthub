import Image from "next/image";
import { notFound } from "next/navigation";
import { softwareData } from "@/app/software/data";

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

      <div className="mx-auto max-w-6xl">


        {/* Main Hero */}

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <div className="flex flex-col gap-10 md:flex-row">


            <div className="flex items-center justify-center">

              <Image
                src={software.image}
                alt={software.name}
                width={220}
                height={220}
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




              <div className="mt-6 flex flex-wrap gap-4">


                <div className="rounded-xl bg-green-100 px-5 py-3 font-semibold text-green-700">

                  ✓ Official Source

                </div>



                <div className="rounded-xl bg-slate-100 px-5 py-3">

                  Version: {software.version}

                </div>



                <div className="rounded-xl bg-slate-100 px-5 py-3">

                  Size: {software.size}

                </div>


              </div>




              <a
                href={software.download}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-blue-700 px-10 py-4 font-bold text-white hover:bg-blue-800"
              >

                Download Official Version

              </a>


            </div>


          </div>


        </div>


        {/* About */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">

            About {software.name}

          </h2>


          <p className="mt-4 text-slate-600">

            {software.description}

            This software is available from the official source
            and provides reliable performance for users.

          </p>


        </section>


        {/* Features */}


        <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">


          <h2 className="text-2xl font-bold">

            Features

          </h2>



          <div className="mt-5 grid gap-4 md:grid-cols-2">


            {software.features.map((item) => (

              <div
                key={item}
                className="rounded-xl bg-slate-100 p-4"
              >

                ✓ {item}

              </div>


            ))}


          </div>


        </section>


        {/* Requirements */}


        <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">


          <h2 className="text-2xl font-bold">

            System Requirements

          </h2>


          <p className="mt-4 text-slate-600">

            {software.requirements}

          </p>


        </section>

            {/* FAQ */}

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-5 space-y-5">

            <div>
              <h3 className="font-bold">
                Is this software free?
              </h3>

              <p className="text-slate-600">
                Download is available from the official website.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Is it safe to download?
              </h3>

              <p className="text-slate-600">
                Yes, we provide official download sources.
              </p>
            </div>

          </div>

        </section>        
        
        {/* Related Software */}
            <p className="text-red-600 text-5xl">
                  TEST123
            </p>
<section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

  <h2 className="text-2xl font-bold">
    Related Software
  </h2>

  <div className="mt-6 grid gap-5 md:grid-cols-3">

    {Object.entries(softwareData)
      .filter(([key]) => key !== slug)
      .slice(0, 3)
      .map(([key, item]) => (

        <a
          key={key}
          href={`/software/${key}`}
          className="rounded-2xl bg-slate-100 p-5 transition hover:shadow-lg"
        >

          <div className="flex items-center gap-4">

            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="object-contain"
            />

            <div>

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-600">
                {item.category}
              </p>

            </div>

          </div>

        </a>

      ))}

          </div>

        </section>

      </div>

    </main>

  );
}



















