import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Piano-1.png"
          alt="Elegant grand piano on stage"
          fill
          priority
          quality={90}
          className="object-cover"
        />

        {/* Soft light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-28 md:pt-32 pb-16">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headingText leading-tight md:leading-[1.15] mb-4">
          Discover the Art of{" "}
          <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
            Piano Music
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-bodyText/90 max-w-xl mt-6 mb-10 leading-relaxed font-medium">
          Learn, play, and explore through a beautifully crafted experience
          designed to inspire creativity and musical growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full">
          {/* Primary */}
          <Button
            variant="primary"
            className="bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Explore Music
          </Button>

          {/* Secondary */}
          <Button
            variant="secondary"
            className="bg-white/70 backdrop-blur-md border border-softBorder text-headingText hover:border-[#C7B9FF] hover:bg-white/90 transition-all shadow-sm"
          >
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
}
