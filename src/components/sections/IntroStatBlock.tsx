import Image from "next/image";

export default function IntroStatBlock() {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 pb-16 gap-6 border-b border-brand-teriary">
          <div className="col-span-1">
            <h2 className="font-heading text-5xl text-brand-secondary">
              Guaranteed <em>Professional Training</em> with 30+ Years of Experience
            </h2>
          </div>
          <div className="col-span-1 font-body font-light">
            Wigmore Training is a leading provider of CPD-certified medical aesthetics training, based in London with a longstanding reputation in the industry. We deliver expert-led, small-group aesthetics courses in our CQC-registered facility.
          </div>
        </div>

        <div className="grid grid-cols-4 pt-14">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="col-span-1" key={i}>
              <div className="flex flex-col max-w-[180px]">
                <span className="font-heading text-brand-secondary text-4xl pb-2">200+</span>
                <span className="font-body">Young professionals went before you</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
