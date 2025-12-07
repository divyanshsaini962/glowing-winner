// PillarsSection
import SectionShell from "../ui/SectionShell";
import Card from "../ui/Card";
import { Music, BookOpen, Users, Lightbulb } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      title: "Music",
      description: "Original piano pieces, performances, and curated playlists.",
      Icon: Music,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Education",
      description: "Step-by-step lessons for beginners to advanced players.",
      Icon: BookOpen,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Community",
      description: "A space to share progress, feedback, and inspiration.",
      Icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Innovation",
      description: "Modern tools and ideas to explore music in new ways.",
      Icon: Lightbulb,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <SectionShell className="bg-softBg">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
          Designed for Modern Pianists
        </p>

        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-3">
          Four Pillars of Your{" "}
          <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
            Piano Studio
          </span>
        </h2>

        <p className="text-lg text-bodyText max-w-2xl leading-relaxed text-center text-balance">
          A balanced blend of music, learning, connection, and innovation to
          support every stage of your musical journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            premium
            className="text-center hover-lift bg-white/80 border border-softBorder/60 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center gap-3 py-4">
              <div
                className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center shadow-sm mb-2 transition-transform hover:scale-110 duration-300`}
              >
                <pillar.Icon className={`w-7 h-7 ${pillar.color}`} />
              </div>

              <h3 className="text-xl font-heading font-semibold text-headingText">
                {pillar.title}
              </h3>

              <p className="text-sm md:text-base text-bodyText leading-relaxed px-2">
                {pillar.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
