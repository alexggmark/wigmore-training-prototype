import Image from "next/image";
import CourseTile from "../ui/CourseTile";

export default function CourseTileBlock() {
  return (
    <section className="pt-16 pb-24 bg-brand-background">
      <div className="container mx-auto">
        <div className="flex justify-between mb-10">
          <h2 className="font-heading text-brand-secondary text-5xl">
            Our <em>Course Categories</em>
          </h2>
          <button className="button-secondary">
            View Courses
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
