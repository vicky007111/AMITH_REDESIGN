"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!name || !phone || !email || !message) {
      setErrorMsg("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-darklight py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Info Details */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Let&apos;s Discuss Your Infrastructure Project
              </h2>
              <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
            </div>

            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Whether you need a full structural stability certificate, forensic NDT
              investigations, or stage-by-stage quality monitoring, our senior directors
              are here to advise you.
            </p>

            {/* Contacts details list */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Office Address
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed mt-1">
                    No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road,
                    Velachery, Chennai - 600042.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.194-4.174-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Call Us Directly
                  </span>
                  <a
                    href="tel:+919940548833"
                    className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors mt-1"
                  >
                    +91 9940548833
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Official Emails
                  </span>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <a
                      href="mailto:amithcivilengineering@gmail.com"
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors"
                    >
                      Primary: amithcivilengineering@gmail.com
                    </a>
                    <a
                      href="mailto:sales@amith.in.net"
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors"
                    >
                      Sales: sales@amith.in.net
                    </a>
                    <a
                      href="mailto:admin@amith.in.net"
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors"
                    >
                      Admin: admin@amith.in.net
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-3xl p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Request a Consultation
              </h3>

              {submitSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-2xl p-6 text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <h4 className="text-lg font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-sm font-medium text-emerald-600/80">
                    Thank you. A senior engineering advisor from AMITH will reach out to
                    your email or phone within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your structural testing or auditing requirement..."
                      required
                    ></textarea>
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/20 border border-rose-500/10 p-3 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold bg-primary hover:bg-primary-hover text-white transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
