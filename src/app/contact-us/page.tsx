"use client";
import React, { useState } from "react";
import PageBanner from "@/components/layout/PageBanner";
import { Mail, MapPin, Globe, CheckCircle2, Send } from "lucide-react";

export default function ContactUsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#2B2B2B]">
      {/* 1. HERO BANNER */}
      <PageBanner title="Contact I³" />

      {/* 2. FORM & INFO SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#111111]">
              Contact I³ Digital Museum
            </h2>
            <p className="mt-4 text-[#54595F] text-base sm:text-lg max-w-2xl mx-auto">
              Reach out for institutional partnerships, archival access,
              curatorial inquiries, or general support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#111111] mb-3">
                  Institutional Information
                </h3>
                <p className="text-[#54595F] text-sm sm:text-base leading-relaxed">
                  Developed by Linkay Technologies Inc. and Linkay Ventures Inc.
                  Operating under strict governance, ethical preservation
                  standards, and patent protections.
                </p>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-[#54595F]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#000000] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#997A43]" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:info@linkaythinktank.com"
                      className="font-medium text-[#111111] hover:text-[#997A43] transition-colors"
                    >
                      info@linkaythinktank.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#000000] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-[#997A43]" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Official Portal
                    </span>
                    <a
                      href="https://museum.linkaythinktank.com"
                      className="font-medium text-[#111111] hover:text-[#997A43] transition-colors"
                    >
                      museum.linkaythinktank.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Physical collection visits and archival researcher appointments
                  require verified institutional authorization.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#111111]">
                    Message Received
                  </h3>
                  <p className="text-[#54595F] text-sm sm:text-base max-w-md mx-auto">
                    Thank you for contacting the I³ Museum team. Our curatorial and
                    institutional liaisons will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-[#997A43] hover:underline uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full bg-[#FAF8F5] border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#997A43] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@institution.org"
                      className="w-full bg-[#FAF8F5] border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#997A43] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Curatorial Inquiry / Institutional Access"
                      className="w-full bg-[#FAF8F5] border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#997A43] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                      Your Message (Optional)
                    </label>
                    <textarea
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Please specify your institution or inquiry details..."
                      className="w-full bg-[#FAF8F5] border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#997A43] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#997A43] hover:bg-[#856835] text-white font-medium px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
