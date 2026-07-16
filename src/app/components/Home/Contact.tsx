"use client";

import { useState, FormEvent, useRef } from "react";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp } from "@/app/components/shared/anim";

const columnVariants = staggeredFadeUp(0.15);

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    const whatsappText = `New Consultation Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/919940548833?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitSuccess(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 section-py transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Info Details */}
          <Reveal variants={columnVariants} custom={0} className="col-span-12 lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div>
              <p className="kicker-text">
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Let&apos;s Discuss Your Infrastructure Project
              </h2>
              <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Whether you need a full structural stability certificate, forensic NDT
              investigations, or stage-by-stage quality monitoring, our senior directors
              are here to advise you.
            </p>

            {/* Contacts details list */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Address */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:map-point-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Office Address
                  </span>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-700 font-bold leading-relaxed mt-1">
                    No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road,
                    Velachery, Chennai - 600042.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:phone-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Call Us Directly
                  </span>
                  <a
                    href="tel:+919940548833"
                    className="text-xs sm:text-sm lg:text-base text-slate-700 font-bold hover:text-primary transition-colors mt-1"
                  >
                    +91 9940548833
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon icon="solar:letter-linear" width="20" height="20" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Official Emails
                  </span>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <a
                      href="mailto:amithcivilengineering@gmail.com"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 font-bold hover:text-primary transition-colors break-all"
                    >
                      Primary: amithcivilengineering@gmail.com
                    </a>
                    <a
                      href="mailto:sales@amith.in.net"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 font-bold hover:text-primary transition-colors break-all"
                    >
                      Sales: sales@amith.in.net
                    </a>
                    <a
                      href="mailto:admin@amith.in.net"
                      className="text-[11px] sm:text-xs lg:text-sm text-slate-700 font-bold hover:text-primary transition-colors break-all"
                    >
                      Admin: admin@amith.in.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded map */}
            <div className="rounded-xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[260px] w-full border border-slate-200">
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
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal variants={columnVariants} custom={1} className="col-span-12 lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6">
                Request a Consultation
              </h3>

              {submitSuccess ? (
                <div className="bg-primary/5 border border-primary/20 text-primary rounded-2xl p-8 sm:p-10 text-center">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="56"
                    height="56"
                    className="mx-auto mb-5 text-primary"
                  />
                  <h4 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-900">Thank You!</h4>
                  <p className="text-sm sm:text-base font-medium text-slate-500">
                    Thank you for considering AMITH. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-4 py-2 bg-primary hover:bg-opacity-90 text-white rounded-lg text-xs font-bold cursor-pointer border-none"
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
                        className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 w-full"
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
                        className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 w-full"
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
                      className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 w-full"
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
                      className="text-sm sm:text-base font-medium py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 w-full outline-hidden resize-none overflow-hidden min-h-[120px]"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-bold text-rose-500 bg-rose-50 border border-rose-500/10 p-3 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl font-bold bg-primary hover:bg-opacity-95 text-white transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer border-none text-sm sm:text-base"
                  >
                    <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                    Send via WhatsApp
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
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-green-600">WhatsApp</span>
                      </a>

                      {/* Phone */}
                      <a
                        href="tel:+919940548833"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="solar:phone-bold" width="20" height="20" className="text-primary" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-primary">Call Us</span>
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:amithcivilengineering@gmail.com,sales@amith.in.net,admin@amith.in.net"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group no-underline"
                      >
                        <Icon icon="solar:letter-bold" width="20" height="20" className="text-primary" />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-primary">Email Us</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}