import Image from "next/image";
import CourseTile from "../ui/CourseTile";

export default function CourseTileBlock() {
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
        <div className="grid grid-cols-3 gap-10">
          <CourseTile />
          <CourseTile />
          <CourseTile />
        </div>
      </div>
    </section>
  );
}
