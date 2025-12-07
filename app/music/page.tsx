import Image from "next/image";
import type { FC } from "react";

const featuredAlbums = [
  {
    title: "Moonlight Reflections",
    tag: "Calm • Nocturne",
    description: "Gentle nocturne-inspired pieces for late-night focus and reflection.",
    image: "/images/album-moonlight.png",
  },
  {
    title: "Modern Melodies",
    tag: "Contemporary • Uplifting",
    description: "Bright, expressive themes blending classical roots with modern sound.",
    image: "/images/album-modern.png",
  },
  {
    title: "Jazz Nights",
    tag: "Smooth • Intimate",
    description: "Warm, cozy jazz piano sessions perfect for slow evenings.",
    image: "/images/album-jazz.png",
  },
];

const moods = [
  {
    label: "Focus & Deep Work",
    description: "Steady, minimalist patterns that keep your mind clear.",
    emoji: "🎧",
  },
  {
    label: "Peaceful Nights",
    description: "Soft, slow pieces for unwinding at the end of the day.",
    emoji: "🌙",
  },
  {
    label: "Morning Coffee",
    description: "Warm, uplifting tracks to start your day gently.",
    emoji: "☕",
  },
  {
    label: "Emotional Stories",
    description: "Melancholic, cinematic themes with rich harmony.",
    emoji: "💫",
  },
];

const tracks = [
  { title: "Serenity in Motion", length: "3:42" },
  { title: "Still Waters", length: "2:58" },
  { title: "Midnight Practice Room", length: "4:03" },
  { title: "Steps of Light", length: "3:19" },
  { title: "Soft Conversations", length: "3:03" },
  { title: "Blue Lantern", length: "2:45" },
];

const MusicPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/music-hero.png"
            alt="Atmospheric piano setting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C7B9FF]/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#FFD9C8]/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
            Music Library
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Discover the Beauty of{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] bg-clip-text text-transparent">
              Piano Music
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Explore curated albums crafted for focus, reflection, and
            inspiration—designed to fit your everyday moments.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
              ▶ Start Listening
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
              View All Albums
            </button>
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Featured Music
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Discover Curated{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] to-[#5B6EE1] bg-clip-text text-transparent">
                Piano Collections
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Explore a selection of crafted albums made for focus, reflection,
              and everyday listening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredAlbums.map((album) => (
              <div
                key={album.title}
                className="group rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col"
              >
                <div className="px-6 pt-6">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={album.image}
                      alt={album.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-1">
                    {album.tag}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {album.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-1">
                    {album.description}
                  </p>
                  <button className="inline-flex items-center justify-center self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 group-hover:border-[#9D8CFF] group-hover:text-[#5B6EE1] transition-colors">
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood Playlists */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Browse by Mood
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Find Music That Matches Your Mood
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Choose playlists crafted to help you focus, unwind, or simply
              enjoy the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moods.map((mood) => (
              <div
                key={mood.label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-[#F9FAFF] px-5 py-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-[#E7F1FF] flex items-center justify-center text-lg">
                    {mood.emoji}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {mood.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-600">{mood.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tracks */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                Popular Tracks
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                Trending Piano Pieces
              </h2>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                Listener favorites that are played on repeat across the
                Creator&nbsp;Hub community.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:border-[#9D8CFF] hover:text-[#5B6EE1] transition-colors">
              View Full Tracklist
            </button>
          </div>

          <div className="rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] overflow-hidden">
            {tracks.map((track, i) => (
              <div
                key={track.title}
                className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3 border-t border-slate-100 first:border-t-0 hover:bg-[#F9FAFF]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#E7F1FF] flex items-center justify-center text-xs font-semibold text-[#5B6EE1]">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {track.title}
                    </p>
                    <p className="text-xs text-slate-500">Piano Solo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xs text-slate-500">{track.length}</span>
                  <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5B6EE1] text-white text-xs shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Composer Spotlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                Composer Spotlight
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                Meet the Mind Behind the Music
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Blending classical technique with modern storytelling, our
                featured composer creates expressive pieces that resonate with
                listeners across all stages of their musical journey.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                From quiet late-night writing sessions to full studio
                recordings, each track is crafted to feel personal, emotional,
                and endlessly replayable.
              </p>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                Learn About the Process
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#E7F1FF] via-white to-[#FFD9C8] blur-2xl opacity-70" />
                <div className="relative rounded-3xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.15)] p-6 flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#9D8CFF] to-[#5B6EE1] flex items-center justify-center text-3xl text-white mb-4">
                    🎹
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Alex Carter
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Modern Piano Composer & Educator
                  </p>
                  <p className="text-sm text-slate-600">
                    “Every piece starts as a quiet idea at the piano. My goal is
                    to turn those small moments into music that feels like home
                    to whoever is listening.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F9FAFF] to-[#E7F1FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Ready to Explore More{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] to-[#F2C56D] bg-clip-text text-transparent">
              Beautiful Piano Music
            </span>
            ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Start with a curated album, build a focus playlist, or simply press
            play and let the piano set the tone for your day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
              ▶ Start Listening
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
              Explore Albums
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MusicPage;
