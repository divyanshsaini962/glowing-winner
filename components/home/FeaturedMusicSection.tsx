// FeaturedMusicSection
import Image from "next/image";
import SectionShell from "../ui/SectionShell";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function FeaturedMusicSection() {
  const albums = [
    {
      title: "Moonlight Reflections",
      artist: "Evening Piano Sessions",
      description: "Gentle nocturne-inspired pieces for late-night focus and calm.",
      image: "/images/music/album-moonlight.jpg",
    },
    {
      title: "Modern Melodies",
      artist: "Contemporary Collection",
      description: "Fresh, uplifting themes blending classical roots with modern sound.",
      image: "/images/music/album-modern.jpg",
    },
    {
      title: "Jazz Nights",
      artist: "Improvisation Sessions",
      description: "Warm, intimate jazz piano performances for slow evenings.",
      image: "/images/music/album-jazz.jpg",
    },
  ];

  return (
    <SectionShell className="bg-softBg">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
          Featured Music
        </p>

        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-4">
          Discover Curated{" "}
          <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
            Piano Collections
          </span>
        </h2>

        <p className="text-lg text-bodyText max-w-2xl leading-relaxed text-center text-balance w-full">
          Explore a selection of crafted albums made for focus, reflection, and
          everyday listening.
        </p>
      </div>

      {/* Album Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {albums.map((album) => (
          <Card
            key={album.title}
            premium
            className="hover-lift bg-white/90 border border-softBorder/70 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Album Artwork */}
            <div className="relative aspect-[4/3] rounded-xl mb-4 shadow-sm overflow-hidden bg-gray-100">
              <Image
                src={album.image}
                alt={album.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-heading font-semibold mb-1 text-headingText">
                {album.title}
              </h3>
              <p className="text-sm text-bodyText/70 mb-2">{album.artist}</p>
              <p className="text-sm text-bodyText mb-4 leading-relaxed">
                {album.description}
              </p>

              <Button
                variant="secondary"
                className="mt-auto w-full bg-white/80 backdrop-blur-md border border-softBorder text-headingText hover:border-lavender hover:bg-white transition-all"
              >
                Listen Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Spacer to prevent margin collapse */}
      <div className="h-12 w-full" />

      {/* View all CTA */}
      <div className="text-center pt-4">
        <Button
          variant="primary"
          className="bg-gradient-to-r  from-[#5B6EE1] to-[#8EA3F4] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          View All Music
        </Button>
      </div>
    </SectionShell>
  );
}
