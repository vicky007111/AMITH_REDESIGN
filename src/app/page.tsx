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
const galleryImages = [
  {
    image: "/IMG-20250323-WA0127.jpg",
    title: "Structural Audit",
    description: "Structural audit and condition assessment."
  },
  {
    image: "/IMG-20250323-WA0128.jpg",
    title: "Quality Inspection",
    description: "Quality inspection activities."
  },
  {
    image: "/IMG-20250323-WA0129.jpg",
    title: "Engineering Testing",
    description: "Engineering testing services."
  },
  {
    image: "/IMG-20250828-WA0039.jpg",
    title: "Site Inspection",
    description: "On-site inspection work."
  },
  {
    image: "/IMG-20250828-WA0062.jpg",
    title: "Construction Audit",
    description: "Construction quality audit."
  },
  {
    image: "/IMG-20241118-WA0090.jpg",
    title: "Material Testing",
    description: "Material testing and evaluation."
  }
];
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

            {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
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
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Structural Audit Consultants Chennai
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
             Structural Audit
             <span className="block text-blue-600">
              Quality Audit &
              Engineering Services
             </span>
             </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
               AMITH Civil & Allied Engineering provides Structural Audit,
               Quality Audit, Material Testing and Engineering Consultancy
               Services for buildings, bridges and infrastructure projects.
            </p>

            <div className="mt-8 flex gap-4">
  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
    Our Services
  </button>

  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition">
    Contact Us
  </button>
</div>
          </div>

          <div>
            <img
              src="/Amenity Blg.jpg"
              alt="Structural Audit Service"
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
              Engineering Services & Solutions
            </h2>

            <p className="mt-4 text-gray-600">
              Professional inspection, testing and engineering solutions tailored to client requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Structural Inspection
              </h3>

              <p className="text-gray-600">
                Comprehensive structural inspection services to assess safety, durability and compliance of buildings and infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                UPV Testing
              </h3>

              <p className="text-gray-600">
                Advanced Ultrasonic Pulse Velocity testing to evaluate concrete quality and detect internal defects.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Engineering Consultancy
              </h3>

              <p className="text-gray-600">
                Expert engineering consultation and technical guidance for industrial, commercial and infrastructure projects.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
    Structural Audit
  </h3>

  <p className="text-gray-600">
    Detailed auditing of buildings, bridges and RCC structures to assess safety, stability and durability.
  </p>
</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
    Quality Audit & TPQM
  </h3>

  <p className="text-gray-600">
    Independent quality monitoring and third-party quality management for construction projects.
  </p>
</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
    NDT Testing
  </h3>

  <p className="text-gray-600">
    Non-Destructive Testing methods including Rebound Hammer and UPV testing for concrete evaluation.
  </p>
</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
    Material Testing
  </h3>

  <p className="text-gray-600">
    Testing of concrete, steel, bricks, soil and construction materials through NABL associated laboratories.
  </p>
</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">
    Restoration & Rehabilitation
  </h3>

  <p className="text-gray-600">
    Repair, retrofitting and rehabilitation solutions for damaged structures and infrastructure.
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
            <p className="mt-3">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
  <Counter end={50} />
</h3>
            <p className="mt-3">Inspection Services</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
  <Counter end={15} />
</h3>
            <p className="mt-3">Technical Experts</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">24/7</h3>
            <p className="mt-3">Client Support</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      {/* About Section */}

<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <img
        src="/UPV-1.jpg"
        alt="AMITH Services"
        className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
      />
    </div>

    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        About AMITH
      </h2>

      <p className="text-lg text-gray-600 mb-6">
        AMITH specializes in professional inspection, testing and
        engineering services. Our mission is to ensure safety,
        compliance and quality across industrial, infrastructure
        and commercial projects.
      </p>

      <p className="text-lg text-gray-600">
        With experienced professionals and industry expertise,
        we help organizations make confident engineering decisions
        through accurate testing, analysis and consultation.
      </p>
      <div className="mt-8">
  <h3 className="text-2xl font-bold text-blue-600 mb-3">
    Our Vision
  </h3>

  <p className="text-gray-600 mb-6">
    To become a trusted leader in structural auditing,
    quality assurance and engineering consultancy by
    delivering innovative and durable solutions for
    buildings and infrastructure.
  </p>

  <h3 className="text-2xl font-bold text-blue-600 mb-3">
    Our Mission
  </h3>

  <p className="text-gray-600">
    To provide reliable engineering inspection, testing,
    auditing and consultancy services that improve safety,
    quality, durability and performance of structures.
  </p>
</div>
    </div>

  </div>
  </section>
  {/* Leadership Team */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">
        Board of Directors
      </h2>

      <p className="mt-4 text-gray-600">
        Experienced professionals driving excellence in engineering,
        structural auditing and quality assurance.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[180px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Prof. Dr. Devadas Manoharan M
        </h3>

        <p className="text-gray-600 text-base">
          Former Vice Chancellor and Civil Engineering expert with
          37+ years of academic and industrial experience.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[220px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Col. Dr. Nallathambi P
        </h3>

        <p className="text-gray-600 text-base">
          Retired Army Engineering Officer and Structural Consultant
          specializing in PEB, RCC and infrastructure projects.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[220px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Er. Kalaimony R
        </h3>

        <p className="text-gray-600 text-base">
          Senior Engineering Consultant with expertise in quality
          monitoring, housing projects and infrastructure development.
        </p>
      </div>

    </div>

  </div>
</section>

  {/* Gallery Section */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">
        Project Gallery
      </h2>

      <p className="mt-4 text-gray-600">
        Showcasing structural audits, testing activities, quality inspections and rehabilitation projects.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

  {[
  {
    image: "/IMG-20250323-WA0127.jpg",
    title: "Structural Audit",
  },
  {
    image: "/IMG-20250323-WA0128.jpg",
    title: "Quality Inspection",
  },
  {
    image: "/IMG-20250323-WA0129.jpg",
    title: "Engineering Testing",
  },
  {
    image: "/IMG-20250828-WA0039.jpg",
    title: "Site Inspection",
  },
  {
    image: "/IMG-20250828-WA0062.jpg",
    title: "Construction Audit",
  },
  {
    image: "/IMG-20241118-WA0090.jpg",
    title: "Material Testing",
  },
].map((photo, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
  >
    <img
      src={photo.image}
      alt={photo.title}
      className="h-[250px] w-full object-cover"
    />

    <div className="p-4">
      <h3 className="font-semibold text-blue-600">
        {photo.title}
      </h3>
    </div>
  </div>
))}

</div>

    </div>
</section>
      {/* Contact Section */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Contact AMITH
    </h2>

    <p className="text-gray-600 mb-12">
      Get in touch with our team for inspection, testing and engineering services.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[220px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Phone
        </h3>
        <p className="text-gray-600 text-base">
          +91 9940548833
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[220px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Email
        </h3>
        <p className="text-gray-600 text-sm break-words">
          amithcivilengineering@gmail.com
        </p>
        <p className="text-gray-600 text-sm break-words">
          sales@amith.in.net
        </p>

        <p className="text-gray-600 text-sm break-words">
          admin@amith.in.net
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[220px]">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          Location
        </h3>
        <p className="text-gray-600 text-base">
          No.35/F3, Sai Krupa Apartment,
          Ramagirinagar,
          Taramani Link Road,
          Velachery,
          Chennai - 600042
        </p>
      </div>

    </div>

  </div>
</section>
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
       
          <h2 className="text-5xl font-bold text-gray-900">
            Need Structural Audit & Engineering Support?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Partner with AMITH for structural auditing, quality assurance, testing and engineering consultancy services.
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
      AMITH Civil & Allied Engineering
    </h3>

    <p className="text-gray-300 mb-2">
      Structural Audit Consultants Chennai
    </p>

    <p className="text-gray-300 mb-2">
      Quality Audit Services Chennai
    </p>

    <p className="text-gray-400 mt-4">
      📧 amithcivilengineering@gmail.com
    </p>

    <p className="text-gray-400">
      📧 sales@amith.in.net
    </p>

    <p className="text-gray-400">
    📧 admin@amith.in.net
    </p>

    <p className="text-gray-400">
      📞 +91 9940548833
    </p>

    <p className="text-gray-400">
      📍 No.35/F3, Sai Krupa Apartment, Ramagirinagar,
      Taramani Link Road, Velachery, Chennai - 600042
    </p>
    <p className="mt-6 text-gray-500">
      © {new Date().getFullYear()} AMITH Civil & Allied Engineering. All Rights Reserved.
    </p>

  </div>
</footer>
    </main>
  );
}