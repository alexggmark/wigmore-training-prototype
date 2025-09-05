import Image from "next/image";

export default function CategorySelector() {
  return (
    <section className="mt-8 mb-24">
      <div className="container mx-auto">
        <div className="flex justify-between mb-10">
          <h2 className="font-heading text-brand-secondary text-5xl">
            Our <em>Course Categories</em>
          </h2>
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
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <ul className="list-none text-brand-secondary font-heading text-3xl italic flex flex-col items-start justify-center gap-6 h-full">
              <li>Injectables</li>
              <li>Skincare</li>
              <li>Parient Care</li>
              <li>Injectables</li>
              <li>Skincare</li>
              <li>Parient Care</li>
            </ul>
          </div>
          <div className="col-span-8">
            <div className="relative rounded-xl aspect-[9/5] overflow-hidden">
              <Image
                src="/assets/placeholder-card-tile.png"
                alt="Background image"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
