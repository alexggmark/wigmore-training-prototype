import Image from "next/image";

export default function CardTile() {
  return (
    <div className="relative rounded-xl aspect-[9/6] overflow-hidden font-body">
      <Image
        src="/assets/placeholder-card-tile.png"
        alt="Background image"
        fill
        sizes="(min-width: 1024px) 1200px, 100vw"
        className="object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 text-brand-light">
        <div className="p-6 flex flex-col items-start justify-end h-full max-w-[480px]">
          <h3 className="font-heading text-5xl mb-3">Courses</h3>
          <p className="font-body text-sm mb-4">
            Explore our wide range of CPD-certified in-person and online aesthetics courses for medical and non-medical professionals
          </p>
          <button className="flex flex-row text-base gap-2 rounded-full border border-transparent bg-brand-secondary text-brand-light px-5 py-2.5">
            <span>View Courses</span>
            <Image
              className="dark:invert"
              src="/assets/icon-arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              priority
            />
          </button>
        </div>
      </div>
    </div>
  );
}
