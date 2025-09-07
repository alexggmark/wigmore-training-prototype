import Image from "next/image";

export default function CourseTile() {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden font-body bg-brand-light min-w-[360px]">
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
        <div className="flex p-4 flex-col items-start justify-end max-w-[480px] border-b border-brand-border">
          <h3 className="font-heading text-xl text-brand-secondary-700 font-bold">Hand Rejuvenation Injection Masterclass</h3>
        </div>
        <div className="flex p-4 flex-col items-start justify-end max-w-[480px]">
          <div className="flex flex-row gap-3 mb-3">
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src="/assets/placeholder-person-profile.png"
                alt="Profile image"
                fill
                className="object-cover absolute inset-0"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-heading font-bold text-brand-secondary-700 mb-1">Dr Lorenzo Garagnani</p>
              <p className="text-xs">Hand Injection Masterclass Trainer</p>
            </div>
          </div>
          <p className="font-body text-sm mb-4">
            Explore our wide range of CPD-certified in-person and online aesthetics courses for medical and non-medical professionals
          </p>
          <div className="flex flex-row gap-4 mb-4">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/icon-clock.svg"
                alt="arrow"
                width={24}
                height={24}
                priority
              />
              <span className="text-sm">1 Day Duration</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/icon-pin.svg"
                alt="arrow"
                width={24}
                height={24}
                priority
              />
              <span className="text-sm">London - W1U 1PJ</span>
            </div>
          </div>
          <button className="button-primary large w-full">
            View Courses
          </button>
        </div>
      </div>
    </div>
  );
}
