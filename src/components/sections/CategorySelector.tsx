"use client";

import { useState } from "react";
import Image from "next/image";

type Cat = { label: string; img: string };

const CATS: Cat[] = [
  { label: "Injectables", img: "/assets/placeholder-card-tile.png" },
  { label: "Skincare", img: "/assets/placeholder-hero-banner.png" },
  { label: "Business", img: "/assets/placeholder-card-tile.png" },
  { label: "Health & Wellbeing", img: "/assets/placeholder-hero-banner.png" },
  { label: "Wigmore Partners", img: "/assets/placeholder-card-tile.png" },
  { label: "Online", img: "/assets/placeholder-hero-banner.png" },
];

export default function CategorySelector() {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-16 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between mb-10">
          <h2 className="font-heading text-brand-secondary text-5xl">
            Our <em>Course Categories</em>
          </h2>
          <button className="button-secondary">
            View Courses
          </button>
        </div>

        <div className="grid grid-cols-12 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <ul className="list-none flex flex-col items-start justify-center gap-4 h-full">
              {CATS.map((cat, i) => (
                <li key={i}>
                  <button
                    type="button"
                    className={`link-arrow-large`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={i === active}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="relative rounded-lg aspect-[9/5] overflow-hidden">
              {CATS.map((cat, i) => (
                <Image
                  key={i}
                  src={cat.img}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className={`object-cover absolute inset-0 transition-all duration-100 ${
                    i === active ? "opacity-100 translate-0" : "opacity-0 translate-2"
                  }`}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
