import SectionShell from "../ui/SectionShell";
import Button from "../ui/Button";
import Image from "next/image";

export default function PodcastHighlightSection() {
  return (
    <SectionShell className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Content */}
        <div>
          {/* Label */}
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
            Podcast
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-4">
            The Piano{" "}
            <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
              Podcast
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-bodyText/80 mb-8 leading-relaxed max-w-xl">
            Insightful conversations about music, creativity, and the piano world.
            Featuring interviews with pianists, composers, and educators—from emerging
            artists to seasoned professionals.
          </p>

          {/* Episode List */}
          <div className="space-y-5 mb-10">
            {/* Episode 01 */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                <Image
                  src="/images/music/album-jazz.jpg"
                  alt="Latest Episode"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-headingText">
                  Latest Episode
                </h4>
                <p className="text-sm text-bodyText/70">The Art of Improvisation</p>
              </div>
            </div>

            {/* Episode 02 */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                <Image
                  src="/images/music/album-modern.jpg"
                  alt="Popular Episode"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-headingText">
                  Popular Episode
                </h4>
                <p className="text-sm text-bodyText/70">Mastering Technique</p>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-8" />

          {/* CTA Button */}
          <Button
            variant="primary"
            className="bg-gradient-to-r from-[#5B6EE1] to-[#8EA3F4] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Listen to Podcast
          </Button>
        </div>

        {/* Featured Podcast Image */}
        <div>
          <div className="aspect-square rounded-2xl bg-white shadow-lg relative overflow-hidden group">
            <Image
              src="/images/podcast/main-feature.png"
              alt="The Piano Podcast"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for text contrast if needed, or just aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
