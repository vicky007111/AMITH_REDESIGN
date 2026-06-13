"use client";

import { useState, FormEvent, useRef } from "react";
import { Icon } from "@iconify/react";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ✅ Auto-grow textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !phone || !email || !message) {
      setErrorMsg("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/amithcivilengineering@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: name,
        Phone: phone,
        Email: email,
        Message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success) {
          setSubmitSuccess(true);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          if (textareaRef.current) textareaRef.current.style.height = "auto";
        } else {
          setErrorMsg("Submission failed. Please try again.");
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        setErrorMsg("Something went wrong. Please call us directly.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-darklight py-12 sm:py-16 lg:py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Info Details */}
          <AnimateOnScroll className="col-span-12 lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Let&apos;s Discuss Your Infrastructure Project
              </h2>
              <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Whether you need a full structural stability certificate, forensic NDT
              investigations, or stage-by-stage quality monitoring, our senior directors
              are here to advise you.
            </p>

            {/* Contacts details list */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Address */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:map-point-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Office Address
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed mt-1">
                    No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road,
                    Velachery, Chennai - 600042.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:phone-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Call Us Directly
                  </span>
                  <a
                    href="tel:+919940548833"
                    className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors mt-1"
                  >
                    +91 9940548833
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:letter-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Official Emails
                  </span>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <a
                      href="mailto:amithcivilengineering@gmail.com"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors break-all"
                    >
                      Primary: amithcivilengineering@gmail.com
                    </a>
                    <a
                      href="mailto:sales@amith.in.net"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors break-all"
                    >
                      Sales: sales@amith.in.net
                    </a>
                    <a
                      href="mailto:admin@amith.in.net"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors break-all"
                    >
                      Admin: admin@amith.in.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded map */}
            <div className="rounded-xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[260px] w-full border border-slate-200 dark:border-darkborder">
              <iframe
                src="https://www.google.com/maps?q=No.35/F3,+Sai+Krupa+Apartment,+Ramagirinagar,+Taramani+Link+Road,+Velachery,+Chennai+600042&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMITH Civil & Allied Engineering Services — Office Location"
              />
            </div>
          </AnimateOnScroll>

          {/* Right Column: Contact Form */}
          <AnimateOnScroll delay={0.15} className="col-span-12 lg:col-span-7">
            <div className="bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6">
                Request a Consultation
              </h3>

              {submitSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-2xl p-5 sm:p-6 text-center">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="48"
                    height="48"
                    className="mx-auto mb-4 text-emerald-500"
                  />
                  <h4 className="text-base sm:text-lg font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm font-medium text-emerald-600/80">
                    Thank you. A senior engineering advisor from AMITH will reach out to
                    your email or phone within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold cursor-pointer border-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder w-full"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder w-full"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">
                      Message / Project Details
                    </label>
                    <textarea
                      ref={textareaRef}
                      value={message}
                      onChange={handleTextareaChange}
                      placeholder="Describe your structural testing or auditing requirement..."
                      required
                      rows={4}
                      className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder w-full outline-hidden resize-none overflow-hidden min-h-[120px]"
                    />
                  </div>

                  {/* Trust Line */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Icon icon="solar:shield-check-linear" width="16" height="16" className="text-emerald-500 shrink-0" />
                    We typically respond within 24 hours. Your information is kept confidential.
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/20 border border-rose-500/10 p-3 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl font-bold bg-primary hover:bg-opacity-95 text-white transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer border-none text-sm sm:text-base"
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

                  {/* Option B: Alternate contact quick links */}
                  <div className="mt-2">
                    <p className="text-xs text-slate-400 font-medium text-center mb-3">Or reach us directly via</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/919940548833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-darkborder hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-green-600">WhatsApp</span>
                      </a>

                      {/* Phone */}
                      <a
                        href="tel:+919940548833"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-darkborder hover:border-primary hover:bg-primary/5 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="solar:phone-bold" width="20" height="20" className="text-primary" />
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary">Call Us</span>
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:amithcivilengineering@gmail.com"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-darkborder hover:border-primary hover:bg-primary/5 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="solar:letter-bold" width="20" height="20" className="text-primary" />
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary">Email Us</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}