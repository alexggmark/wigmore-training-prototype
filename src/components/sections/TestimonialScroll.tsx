'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TestimonialTile from '../ui/TestimonialTile';

export default function TestimonialScroll() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false,
    dragFree: true,
  });

  const groupSize = 3; // slides per dot
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [groupCount, setGroupCount] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    if (!embla) return;

    const updateStates = () => {
      setGroupCount(Math.ceil(embla.scrollSnapList().length / groupSize));
      setSelectedIndex(Math.floor(embla.selectedScrollSnap() / groupSize));
      setPrevDisabled(!embla.canScrollPrev());
      setNextDisabled(!embla.canScrollNext());
    };

    embla.on('init', updateStates);
    embla.on('reInit', updateStates);
    embla.on('select', updateStates);

    // run once in case init already fired
    updateStates();

    return () => {
      embla.off('init', updateStates);
      embla.off('reInit', updateStates);
      embla.off('select', updateStates);
    };
  }, [embla]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const scrollToGroup = useCallback(
    (groupIndex: number) => {
      if (!embla) return;
      embla.scrollTo(groupIndex * groupSize);
    },
    [embla]
  );

  return (
    <section>
      <div className="relative">
        <Image
          src="/assets/placeholder-hero-banner.png"
          alt="Background image"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover absolute left-0 right-0 top-0 bottom-0 -z-10"
        />

        <div className="pointer-events-none absolute inset-0 bg-brand-secondary-700/70 -z-10" />

        <div className="container mx-auto z-10 pt-20 pb-24">
          <div className="grid grid-cols-2 pb-16 gap-6">
            <div className="col-span-1">
              <h2 className="font-heading text-5xl leading-tight text-brand-light">
                Guaranteed <em>Professional Training</em> with 30+ Years of Experience
              </h2>
            </div>
            <div className="col-span-1 font-body text-brand-light font-light text-lg md:pt-2">
              Wigmore Training is a leading provider of CPD-certified medical aesthetics training, based in London with a longstanding reputation in the industry. We deliver expert-led, small-group aesthetics courses in our CQC-registered facility.
            </div>
          </div>

          {/* Viewport */}
          <div className="touch-pan-y select-none" ref={emblaRef}>
            {/* Track */}
            <div className="flex gap-10 cursor-grab active:cursor-grabbing">
              <TestimonialTile />
              <TestimonialTile />
              <TestimonialTile />
              <TestimonialTile />
              <TestimonialTile />
              <TestimonialTile />
              <TestimonialTile />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Dot pagination (grouped by 3) */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Carousel progress">
              {Array.from({ length: groupCount }).map((_, i) => {
                const active = i === selectedIndex;
                return (
                  <button
                    key={i}
                    onClick={() => scrollToGroup(i)}
                    className={[
                      "h-1 w-5 rounded-full cursor-pointer",
                      active
                        ? "bg-brand-tertiary"
                        : "bg-brand-background/50 hover:bg-brand-light/80"
                    ].join(" ")}
                    aria-label={`Go to group ${i + 1}`}
                    aria-selected={active}
                    role="tab"
                  />
                );
              })}
            </div>

            <div className="flex gap-3.5">
              <button
                onClick={scrollPrev}
                disabled={prevDisabled}
                className="rounded-full border border-brand-light flex justify-center items-center w-14 h-14 text-sm hover:bg-brand-background/20 disabled:hover:bg-transparent disabled:opacity-40 disabled:cursor-auto cursor-pointer"
                aria-label="Previous"
                aria-disabled={prevDisabled}
              >
                <Image src="/assets/icon-arrow-plain-white.svg" alt="Previous" width={18} height={18} />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextDisabled}
                className="rounded-full border border-brand-light flex justify-center items-center w-14 h-14 text-sm hover:bg-brand-background/20 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-auto cursor-pointer"
                aria-label="Next"
                aria-disabled={nextDisabled}
              >
                <Image className="rotate-180" src="/assets/icon-arrow-plain-white.svg" alt="Next" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
