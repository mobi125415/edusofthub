import Link from "next/link";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-transparent px-5 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <section className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl sm:p-10">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal Information
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: 06 August 2026
          </p>

          <div className="mt-10 space-y-10 text-slate-700">
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Acceptance of Terms
              </h2>

              <p className="mt-4 leading-8">
                By accessing and using EduSoftHub, you agree to follow these
                Terms and Conditions. If you do not agree, please stop using
                the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Website Purpose
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub provides informational content, software details,
                official download links, AI tool information, education
                resources, games and technology guides.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                External Websites
              </h2>

              <p className="mt-4 leading-8">
                Some links may direct users to external websites. EduSoftHub
                does not own or control those websites and is not responsible
                for their content, services, availability or policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                User Responsibilities
              </h2>

              <p className="mt-4 leading-8">
                Users are responsible for checking software compatibility,
                reading official terms, maintaining device security and using
                all resources lawfully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Intellectual Property
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub&apos;s original website content, layout and branding
                may not be copied or republished without permission. Third-party
                names, logos and trademarks belong to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Accuracy of Information
              </h2>

              <p className="mt-4 leading-8">
                We aim to provide accurate and useful information, but software
                versions, pricing, availability and third-party services may
                change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Limitation of Liability
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub is not liable for losses, damage, service
                interruptions or technical issues resulting from the use of
                external websites, software or information provided here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Changes to These Terms
              </h2>

              <p className="mt-4 leading-8">
                We may update these Terms and Conditions when our services,
                website structure or legal requirements change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Contact
              </h2>

              <p className="mt-4 leading-8">
                For questions regarding these terms, contact us through the
                EduSoftHub contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-slate-900 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}