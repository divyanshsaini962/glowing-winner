// LessonsHighlightSection
import Image from "next/image";
import SectionShell from "../ui/SectionShell";
import Button from "../ui/Button";

export default function LessonsHighlightSection() {
  return (
    <SectionShell className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image / Visual Side */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100 group">
            <Image
              src="/images/lessons-highlight.png"
              alt="Piano lessons environment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={90}
            />
            {/* Optional overlay for better text contrast if we had text on top, but effectively just a soft shine here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
            Lessons & Coaching
          </p>

          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-4">
            Master the Piano at{" "}
            <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
              Your Own Pace
            </span>
          </h2>

          <p className="text-lg text-bodyText mb-6 leading-relaxed">
            Structured, supportive lessons tailored to your goals—whether you’re
            just starting or refining years of experience.
          </p>

          <ul className="space-y-3 mb-8 text-bodyText">
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-skyTint text-primarySoft text-xs font-bold">
                ✓
              </span>
              <span>Clear curriculum designed for every stage of learning.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-skyTint text-primarySoft text-xs font-bold">
                ✓
              </span>
              <span>Personalized one-on-one guidance from experienced teachers.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-skyTint text-primarySoft text-xs font-bold">
                ✓
              </span>
              <span>Flexible online scheduling to fit busy routines.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-skyTint text-primarySoft text-xs font-bold">
                ✓
              </span>
              <span>Performance opportunities to build confidence on stage.</span>
            </li>
          </ul>

          <Button
            variant="primary"
            className="bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
