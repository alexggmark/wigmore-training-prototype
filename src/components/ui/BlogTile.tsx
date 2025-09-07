import Image from "next/image";

export default function BlogTile() {
  return (
    <div className="font-body bg-brand-light min-w-[360px]">
      <div className="relative aspect-[9/8] rounded-lg overflow-hidden">
        <Image
          src="/assets/placeholder-product.png"
          alt="Background image"
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="font-fody">
        <div className="flex py-4 flex-col items-start justify-end max-w-[320px]">
          <h3 className="text-sm text-brand-dark font-semibold mb-2">Hand Rejuvenation Injection Masterclass</h3>
          <p className="text-[13px] mb-3">
            Explore our wide range of CPD-certified in-person and online aesthetics courses for professionals.
          </p>
          <button className="cursor-pointer hover:no-underline text-sm underline underline-offset-4 text-brand-secondary-700 flex flex-row items-center gap-1.5">
            <span>View Courses</span>
            <Image src="/assets/icon-arrow-plain.svg" alt="Go" className="rotate-180" width={10} height={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
