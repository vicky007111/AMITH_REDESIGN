import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-blue py-24">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 border-b border-solid border-white/30 pb-11">
            <div>
              <h2 className="text-white text-4xl leading-tight font-bold">
                Chennai Head Office
              </h2>
            </div>
            <div>
              <p className="text-lg font-normal leading-relaxed text-white/70">
                No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road, Velachery, Chennai - 600042.
              </p>
            </div>
            <div>
              <Link
                href="mailto:amithcivilengineering@gmail.com"
                className="text-lg text-white font-medium underline hover:text-white/80 block"
              >
                amithcivilengineering@gmail.com
              </Link>
              <Link
                href="mailto:admin@amith.in.net"
                className="text-md text-white/80 hover:text-white block mt-1"
              >
                admin@amith.in.net
              </Link>
              <Link
                href="tel:+919940548833"
                className="text-lg text-white/80 flex items-center gap-2 hover:text-white w-fit mt-3"
              >
                <span className="text-white/40">Call :</span>+91 9940548833
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-4 pt-12">
            <div>
              <h2 className="text-white text-3xl leading-tight font-bold">
                Testing Laboratory
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/75 font-normal leading-relaxed">
                Tech-Civil Material Testing Laboratory Pvt Ltd (NABL Accredited Partner), Perungalathur, Chennai.
              </p>
            </div>
            <div>
              <Link
                href="mailto:sales@amith.in.net"
                className="text-lg text-white hover:text-white/80 font-medium underline block"
              >
                sales@amith.in.net
              </Link>
              <span className="text-sm text-white/50 block mt-2">
                MoU Laboratory Association for Advanced Material & Concrete Testing
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
