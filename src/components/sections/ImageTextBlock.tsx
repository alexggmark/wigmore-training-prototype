import Image from "next/image";

export default function ImageTextBlock() {
  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 md:gap-20">
          <div className="col-span-5">
            <div className="relative rounded-xl aspect-[12/13] overflow-hidden">
              <Image
                src="/assets/placeholder-card-tile.png"
                alt="Background image"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-7">
            <h2 className="font-heading text-brand-secondary text-5xl mb-6">
              Room Hire
            </h2>
            <p className="font-body font-light text-lg">
              Wigmore Medical boasts a state-of-the-art training facility that hosts practical courses and is also available for hire. Conveniently located in central London, and open seven days a week, our training facility is regularly hired by fellow training companies and product manufacturers.
            </p>
            <ul className="bullet-list-large mt-6 mb-10">
              <li>Lecture style setup with classroom chairs</li>
              <li>Minor ops practical training treatment area</li>
              <li>1-2 treatment couches for practical training</li>
              <li>55-inch Smart TV, laptop and HDMI connections</li>
              <li>Registered with the Care Quality Commission</li>
            </ul>
            <button className="button-primary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
