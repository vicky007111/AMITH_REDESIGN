"use client";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UsedTech = () => {
  const technologies = [
    {
      icon: "lucide:calculator",
      name: "STAAD.Pro & ETABS",
      desc: "Structural Analysis & Load Design"
    },
    {
      icon: "lucide:pencil-ruler",
      name: "AutoCAD & Revit",
      desc: "CAD Detailing & Rebar Drawings"
    },
    {
      icon: "lucide:file-text",
      name: "IS 10262 & IS 456",
      desc: "BIS Code & Concrete Compliance"
    },
    {
      icon: "lucide:shield-check",
      name: "NABL Lab Testing",
      desc: "Certified Material Diagnostics"
    },
    {
      icon: "lucide:audio-waveform",
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
    <section className="section-py">
      <div className="section-container">
        <p className="kicker-text">
          Engineering Stack
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 lg:text-start text-center leading-tight">
          Tools, Software & <span className="text-primary">Compliance Standards</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-10" aria-hidden="true" />
        <div>
          <Slider {...settings}>
            {technologies.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-surface-soft rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-slate-100 shadow-sm h-48 justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon
                      icon={item.icon}
                      width="28"
                      height="28"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-800 mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-slate-500 font-medium">
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
