import Link from "next/link";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function DisclaimerPage() {
  return (
    <main className="relative min-h-screen bg-transparent px-5 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <section className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-xl">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal Information
          </span>

          <h1 className="mt-5 text-4xl font-extrabold">
            Disclaimer
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Last Updated: August 2026
          </p>

          <div className="mt-10 space-y-10">

            <section>
              <h2 className="text-2xl font-bold">
                General Information
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                All information published on EduSoftHub is provided for
                educational and informational purposes only. While we try
                to keep everything accurate and updated, we do not make
                any guarantees regarding completeness or accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                External Links
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                EduSoftHub provides official links to software,
                applications, AI tools and other third-party websites.
                We are not responsible for the content, security or
                policies of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                Software Downloads
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We do not host pirated software or modified applications.
                All download buttons redirect users to the official
                developer websites whenever available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                Limitation of Liability
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                EduSoftHub shall not be held responsible for any loss,
                damage or issues resulting from downloading software,
                visiting external websites or using third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                If you have any questions regarding this disclaimer,
                please contact us.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
              >
                Contact Us
              </Link>
            </section>

          </div>

        </section>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-slate-900 px-7 py-3 font-bold text-white hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}