import Image from "next/image";

export default function CourseTile() {
  return (
    <div className="shadow-md rounded-xl overflow-hidden font-body">
      <div className="relative aspect-[9/6]">
        <Image
          src="/assets/placeholder-product.png"
          alt="Background image"
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 p-4 z-10 h-full flex flex-col items-start gap-2">
          <span className="rounded-full bg-[#264653]/50 px-3 py-1.5 text-brand-light text-xs">Beginner Level</span>
          <span className="rounded-full bg-brand-light/70 px-3 py-1.5 text-brand-secondary text-xs">3 CDP points</span>
        </div>
      </div>
      <div className="">
        <div className="p-6 flex flex-col items-start justify-end h-full max-w-[480px]">
          <h3 className="font-heading text-2xl mb-3">Courses</h3>
          <p className="font-body text-sm mb-4">
            Explore our wide range of CPD-certified in-person and online aesthetics courses for medical and non-medical professionals
          </p>
          <button className="flex flex-row justify-center w-full text-base gap-2 rounded-full border border-transparent bg-brand-secondary text-brand-light px-5 py-2.5">
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
