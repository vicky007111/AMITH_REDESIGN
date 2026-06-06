"use client";
import { useEffect, useState } from "react";

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}+</>;
}
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-bold text-blue-600">
            AMITH
          </h1>

          <ul className="hidden md:flex items-center gap-10">

            {["Home", "Services", "Solutions", "About", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Website Redesign Prototype
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Building Modern
              <span className="text-blue-600"> Digital Experiences</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A modern redesign concept focused on user experience,
              accessibility, responsive layouts and visual consistency.
              Designed to deliver a cleaner and more engaging digital
              presence.
            </p>

            <div className="mt-8 flex gap-4">
  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
    Explore Services
  </button>

  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition">
    Learn More
  </button>
</div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Office Workspace"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose AMITH
            </h2>

            <p className="mt-4 text-gray-600">
              Delivering innovative and scalable digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Modern UI
              </h3>

              <p className="text-gray-600">
                Clean, professional and visually appealing interface
                focused on usability and accessibility.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Responsive Design
              </h3>

              <p className="text-gray-600">
                Optimized experience across desktop, tablet and mobile
                devices.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Better Performance
              </h3>

              <p className="text-gray-600">
                Fast loading pages and smooth navigation experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold">
  <Counter end={100} />
</h3>
            <p className="mt-3">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
  <Counter end={50} />
</h3>
            <p className="mt-3">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
  <Counter end={15} />
</h3>
            <p className="mt-3">Industry Experts</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">24/7</h3>
            <p className="mt-3">Support Available</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold text-gray-900">
            Ready To Start Your Next Project?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let's build modern, scalable and impactful digital
            experiences together.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg">
            Contact Us
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold mb-3">
            AMITH
          </h3>

          <p className="text-gray-400">
            Building better digital experiences through innovation.
          </p>

          <p className="mt-6 text-gray-500">
            © 2026 AMITH. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}