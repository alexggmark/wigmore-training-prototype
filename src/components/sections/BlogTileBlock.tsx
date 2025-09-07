'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BlogTile from '../ui/BlogTile';

export default function BlogTileBlock() {
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
    <section className="pt-16 pb-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between mb-10">
          <h2 className="font-heading text-brand-secondary text-5xl">
            Latest <em>Aesthetics Training</em> News
          </h2>
          <button className="button-secondary">View Latest News</button>
        </div>

        {/* Viewport */}
        <div className="touch-pan-y select-none" ref={emblaRef}>
          {/* Track */}
          <div className="flex gap-10 cursor-grab active:cursor-grabbing">
            <BlogTile /><BlogTile /><BlogTile /><BlogTile /><BlogTile />
            <BlogTile /><BlogTile /><BlogTile /><BlogTile /><BlogTile />
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
                      ? "bg-brand-secondary"
                      : "bg-brand-secondary/30 hover:bg-brand-secondary/60"
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
              className="rounded-full border border-brand-secondary-700 flex justify-center items-center w-14 h-14 text-sm hover:bg-[#f3f2f2] disabled:opacity-40 disabled:cursor-auto cursor-pointer"
              aria-label="Previous"
              aria-disabled={prevDisabled}
            >
              <Image src="/assets/icon-arrow-plain.svg" alt="Previous" width={18} height={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextDisabled}
              className="rounded-full border border-brand-secondary-700 flex justify-center items-center w-14 h-14 text-sm hover:bg-[#f3f2f2] disabled:opacity-40 disabled:cursor-auto cursor-pointer"
              aria-label="Next"
              aria-disabled={nextDisabled}
            >
              <Image className="rotate-180" src="/assets/icon-arrow-plain.svg" alt="Next" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
