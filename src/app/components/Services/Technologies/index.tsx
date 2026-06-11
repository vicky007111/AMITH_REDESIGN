"use client";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UsedTech = () => {
  const technologies = [
    {
      icon: "solar:calculator-minimalistic-linear",
      name: "STAAD.Pro & ETABS",
      desc: "Structural Analysis & Load Design"
    },
    {
      icon: "solar:ruler-pen-linear",
      name: "AutoCAD & Revit",
      desc: "CAD Detailing & Rebar Drawings"
    },
    {
      icon: "solar:document-text-linear",
      name: "IS 10262 & IS 456",
      desc: "BIS Code & Concrete Compliance"
    },
    {
      icon: "solar:shield-check-linear",
      name: "NABL Lab Testing",
      desc: "Certified Material Diagnostics"
    },
    {
      icon: "solar:soundwave-linear",
      name: "NDT Diagnostics",
      desc: "UPV & Homogeneity Sensors"
    }
  ];

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="dark:bg-darkmode py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
          Engineering Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white lg:text-start text-center leading-tight">
          Tools, Software & <span className="text-primary">Compliance Standards</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-10" aria-hidden="true" />
        <div>
          <Slider {...settings}>
            {technologies.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-grey dark:bg-darklight rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-slate-100 dark:border-darkborder shadow-sm h-48 justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon
                      icon={item.icon}
                      width="28"
                      height="28"
                    />
                  </div>
                  <div>
                    <h5 className="text-md font-bold text-slate-800 dark:text-white mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default UsedTech;
