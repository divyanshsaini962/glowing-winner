// FinalCtaSection

import SectionShell from "../ui/SectionShell";
import Button from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <SectionShell>
      <div className="relative overflow-hidden rounded-3xl bg-softBg shadow-md flex items-center justify-center">

        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#E0E7FF]" />

        {/* Polish overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        {/* Content Wrapper (perfectly centered) */}
        <div className="relative z-10 text-center pt-20  px-6 max-w-3xl mx-auto flex flex-col items-center justify-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-6 leading-tight">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
              Musical Journey?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-bodyText/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join a welcoming community of learners, listeners, and creators —
            and take your next step toward mastering the piano.
          </p>

          {/* Centered Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">

            <Button
              variant="primary"
              className="px-8 py-3 bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Button>

            <Button
              variant="secondary"
              className="px-8 py-3 bg-white/70 backdrop-blur-md border border-softBorder text-headingText hover:bg-white/90 hover:border-lavender transition-all"
            >
              Learn More
            </Button>

          </div>
        </div>
      </div>
    </SectionShell>
  );
}
