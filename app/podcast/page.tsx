import Image from "next/image";
import type { FC } from "react";

const featuredEpisode = {
  title: "What No One Tells You About Learning Piano",
  number: "EP 12",
  duration: "32 min",
  tag: "Deep Dive",
  description:
    "Why the hardest part of learning piano isn’t the notes or the technique — it’s managing your expectations, motivation, and mindset over time.",
};

const latestEpisodes = [
  {
    number: "EP 13",
    title: "The Secret Shadows in Your Head",
    duration: "28 min",
    type: "Mindset",
    description:
      "How your mental habits shape your practice and what to do when your own thoughts get in the way of progress.",
  },
  {
    number: "EP 11",
    title: "Practice vs. Performance",
    duration: "24 min",
    type: "Creativity",
    description:
      "The difference between playing for yourself and playing for others — and how to prepare for both.",
  },
  {
    number: "EP 10",
    title: "Building a Daily Piano Ritual",
    duration: "21 min",
    type: "Habits",
    description:
      "Simple, realistic routines that keep you at the keys even when life gets busy.",
  },
  {
    number: "EP 09",
    title: "Perfectionism at the Keyboard",
    duration: "27 min",
    type: "Mindset",
    description:
      "Why chasing flawless playing can actually hold you back, and how to shift into a growth mindset.",
  },
];

const categories = [
  {
    label: "Learning Piano",
    description: "Episodes about practice, technique, and getting unstuck.",
    emoji: "🎹",
  },
  {
    label: "Mindset & Motivation",
    description: "Stories and tools for staying consistent and kind to yourself.",
    emoji: "🧠",
  },
  {
    label: "Creativity & Story",
    description: "How to use music as an outlet for emotion and ideas.",
    emoji: "✨",
  },
  {
    label: "Behind the Studio",
    description: "Recording sessions, gear talk, and real-life lessons.",
    emoji: "🎧",
  },
];

const PodcastPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/podcast-hero.png"
            alt="Podcast microphone setup"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C7B9FF]/25 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#FFD9C8]/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
              Piano & Mind Podcast
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Conversations at the{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] bg-clip-text text-transparent">
                Piano Bench
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Honest talks about learning piano, managing your mind, and using
              music as a way to understand your own story.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                ▶ Listen to Latest Episode
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
                Browse All Episodes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                Featured Episode
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                {featuredEpisode.title}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-slate-200 font-medium">
                  {featuredEpisode.number}
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-slate-200">
                  ⏱ {featuredEpisode.duration}
                </span>
                <span className="inline-flex items-center rounded-full bg-[#E7F1FF] px-3 py-1 text-[#5B6EE1] font-medium">
                  {featuredEpisode.tag}
                </span>
              </div>
              <p className="mt-5 text-sm sm:text-base text-slate-600">
                {featuredEpisode.description}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-500">
                We talk through the emotional side of practice — comparison,
                plateaus, starting late — and how to stay in love with the
                instrument even when progress feels slow.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                  ▶ Play Episode
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-slate-800 hover:border-[#9D8CFF] hover:text-[#5B6EE1] transition-colors">
                  View Show Notes
                </button>
              </div>
            </div>

            <div>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#E7F1FF] via-white to-[#FFD9C8] blur-2xl opacity-80" />
                <div className="relative rounded-3xl bg-white shadow-[0_20px_55px_rgba(15,23,42,0.18)] overflow-hidden">
                  <div className="h-44 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src="/images/podcast-cover.png"
                        alt="Podcast Cover"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative rounded-2xl bg-white/15 border border-white/25 px-5 py-3 text-center backdrop-blur-sm">
                      <p className="text-xs text-white/90 tracking-[0.25em] uppercase">
                        Creator Hub
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Piano & Mind Podcast
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-500">
                        {featuredEpisode.number}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 mt-1 line-clamp-2">
                        {featuredEpisode.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        ⏱ {featuredEpisode.duration} • Piano • Mindset
                      </p>
                    </div>
                    <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#5B6EE1] text-white text-sm shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                      ▶
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500 text-center max-w-md mx-auto">
                *Use a realistic podcast cover image here — soft-lit grand piano
                in a studio, subtle pastel gradient, modern typography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Browse Topics
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Episodes for Every{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] to-[#5B6EE1] bg-clip-text text-transparent">
                Stage of Your Journey
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re practicing your first scales or preparing for
              a performance, there&apos;s a conversation here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-[#F9FAFF] px-5 py-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-[#E7F1FF] flex items-center justify-center text-lg">
                    {cat.emoji}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {cat.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-600">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episodes List */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                Latest Episodes
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                New Conversations from the Studio
              </h2>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                Short, honest episodes you can listen to on a walk, during
                practice breaks, or on your commute.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:border-[#9D8CFF] hover:text-[#5B6EE1] transition-colors">
              View Episode Archive
            </button>
          </div>

          <div className="rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] overflow-hidden">
            {latestEpisodes.map((ep, idx) => (
              <div
                key={ep.number}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 sm:px-6 py-4 border-t border-slate-100 first:border-t-0 hover:bg-[#F9FAFF]"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-9 w-9 rounded-2xl bg-[#E7F1FF] flex items-center justify-center text-[11px] font-semibold text-[#5B6EE1]">
                    {ep.number}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {ep.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {ep.type} • {ep.duration}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 max-w-lg">
                      {ep.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5B6EE1] text-white text-xs shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                    ▶
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-[#9D8CFF] hover:text-[#5B6EE1] transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Mic */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                Behind the Mic
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                From Real Lessons to Real Conversations
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                The podcast grows out of real questions students ask at the
                piano bench: How do I stay consistent? Am I too old to start?
                Why is this so much harder than it looks?
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Each episode is recorded with the same mindset as a good
                lesson—clear, honest, and focused on helping you see your
                playing and your mindset in a kinder, more realistic way.
              </p>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                Learn More About the Show
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#E7F1FF] via-white to-[#FFD9C8] blur-2xl opacity-70" />
                <div className="relative rounded-3xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.15)] p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#9D8CFF] to-[#5B6EE1] flex items-center justify-center text-2xl text-white">
                      🎙
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Piano & Mind Studio
                      </p>
                      <p className="text-xs text-slate-500">
                        A podcast for curious pianists & creatives
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    “I wanted a place to talk about the parts of music we rarely
                    say out loud — the doubt, the boredom, the joy, and the
                    small wins that keep us coming back.”
                  </p>
                  <p className="text-xs text-slate-500">
                    Use a realistic photo here: host sitting at a piano with a
                    podcast microphone, soft pastel lighting, modern studio
                    vibe.
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
            Ready to Make Piano Part of Your{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] to-[#F2C56D] bg-clip-text text-transparent">
              Daily Routine
            </span>
            ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Listen on your morning walk, while you tidy the studio, or right
            after practice — each episode is designed to keep you close to the
            instrument, even when you&apos;re away from the keys.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
              ▶ Listen on Site
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
              Get New Episodes by Email
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PodcastPage;
