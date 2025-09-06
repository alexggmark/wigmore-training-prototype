import Image from "next/image";

export default function CtaBlock() {
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

        <div className="absolute inset-0 z-10 h-full">
          <div className="container mx-auto flex justify-center items-center h-full">
            <div className="max-w-xl text-white text-center flex flex-col gap-4 items-center">
              <h1 className="text-5xl font-heading leading-tight">
                Awarded for our Aesthetics Training Excellence
              </h1>
              <p className="font-body mt-4 text-base text-white/90 max-w-[480px]">
                Beginner or advanced, learn from industry experts through accredited training courses and live online webinars.
              </p>
              <button className="button-tertiary">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
