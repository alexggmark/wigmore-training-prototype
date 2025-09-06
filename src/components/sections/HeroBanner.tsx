import Image from "next/image";

export default function HeroBanner({ transparent = false }: { transparent?: boolean }) {
  const desktopHeight = transparent ? 'md:min-h-[calc(40rem+var(--header-h))]' : 'md:min-h-[40rem]';
  const desktopContentPadding = transparent ? 'md:pt-[var(--header-h)]' : '';

  return (
    <section>
      <div className={`
        relative overflow-hidden min-h-[56svh] ${desktopHeight}
      `}>
        {/* Background image */}
        <Image
          src="/assets/placeholder-hero-banner.png"
          alt="Background image"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover absolute left-0 right-0 top-0 bottom-0"
        />

        {/* Gradient overlay (left-to-right) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

        {/* Content (left column) */}
        <div className={`absolute top-0 left-0 right-0 bottom-0 z-10 h-full ${desktopContentPadding}`}>
          <div className="container mx-auto flex items-center h-full">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-heading md:text-[70px]">
                Advance Your Career in <em>Medical Aesthetics</em>
              </h1>
              <p className="mt-4 text-lg text-white/90 font-light max-w-[480px]">
                Beginner or advanced, learn from industry experts through accredited training courses and live online webinars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
