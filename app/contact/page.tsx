"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import AmbientVideoBackground from "../components/AmbientVideoBackground";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      subject || "EduSoftHub Contact Request"
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:contact@edusofthub.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <main className="relative min-h-screen bg-transparent px-5 py-16 text-slate-900 sm:px-6">
      <AmbientVideoBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <section className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            Contact EduSoftHub
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            How Can We Help You?
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Contact us for software requests, education resources, AI tools,
            partnerships or general support.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl sm:p-9">
            <h2 className="text-3xl font-extrabold">
              Contact Information
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Select any available contact method or send your message through
              the form.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:contact@edusofthub.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-bold group-hover:text-blue-700">
                    contact@edusofthub.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/923010012627"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="font-bold group-hover:text-green-700">
                    Chat With Us
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Support Hours</p>
                  <p className="font-bold">Monday–Saturday</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-bold">Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl sm:p-9">
            <h2 className="text-3xl font-extrabold">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Software request, support, partnership..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={7}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
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
