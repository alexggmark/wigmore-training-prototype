import Image from "next/image";

export default function TestimonialTile() {
  return (
    <div className="shadow-sm rounded-xl overflow-hidden font-body bg-brand-light min-w-[calc(50%-1.5rem)]">
      <div className="">
        <div className="flex p-8 flex-col items-start justify-end max-w-[480px]">
          <p className="mb-6 text-brand-tertiary tracking-wider text-2xl">★★★★★</p>
          <p className="font-heading text-lg italic tracking-wide mb-4">
            Explore our wide range of CPD-certified in-person and online aesthetics courses for medical and non-medical professionals
          </p>
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
        </div>
      </div>
    </div>
  );
}
