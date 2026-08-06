import Link from "next/link";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-transparent px-5 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <section className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl sm:p-10">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal Information
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: 06 August 2026
          </p>

          <div className="mt-10 space-y-10 text-slate-700">
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Introduction
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub respects your privacy and is committed to protecting
                the personal information users may provide while using this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Information We Collect
              </h2>

              <p className="mt-4 leading-8">
                We may collect information submitted through contact forms,
                including your name, email address, subject and message.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                How We Use Information
              </h2>

              <p className="mt-4 leading-8">
                Information may be used to respond to user questions, process
                software requests, improve website content and provide support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Cookies
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub may use cookies and similar technologies to improve
                website performance, understand usage and enhance the user
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                External Links
              </h2>

              <p className="mt-4 leading-8">
                Our website includes links to official software websites,
                external tools and third-party resources. EduSoftHub is not
                responsible for the privacy practices of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Data Security
              </h2>

              <p className="mt-4 leading-8">
                We take reasonable steps to protect submitted information, but
                no online transmission or storage system can be guaranteed to
                be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Children&apos;s Privacy
              </h2>

              <p className="mt-4 leading-8">
                EduSoftHub does not knowingly collect personal information from
                children under the age required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Policy Updates
              </h2>

              <p className="mt-4 leading-8">
                We may update this Privacy Policy when website services or legal
                requirements change. Updates will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-4 leading-8">
                For privacy-related questions, please contact EduSoftHub through
                our contact page.
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