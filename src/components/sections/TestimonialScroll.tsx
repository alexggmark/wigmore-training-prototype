import Image from "next/image";

export default function TestimonialScroll() {
  return (
    <section>
      <div className="relative overflow-hidden min-h-[56svh] md:min-h-[26rem]">
        <Image
          src="/assets/placeholder-hero-banner.png"
          alt="Background image"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover absolute left-0 right-0 top-0 bottom-0"
        />

        <div className="pointer-events-none absolute inset-0 bg-brand-overlay/60" />

        <div className="absolute inset-0 z-10 h-full pt-20 pb-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 pb-16 gap-6">
              <div className="col-span-1">
                <h2 className="font-heading text-5xl leading-tight text-brand-light">
                  See What Our <em>Previous Delegates</em> Say About Their Experience
                </h2>
              </div>
              <div className="col-span-1 font-body font-light text-brand-light text-lg md:pt-2">
                Wigmore Training is a leading provider of CPD-certified medical aesthetics training, based in London with a longstanding reputation in the industry. We deliver expert-led, small-group aesthetics courses in our CQC-registered facility.
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
