import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/about-hero.png"
            alt="Creative studio environment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute -top-20 -right-20 h-60 w-60 bg-[#C7B9FF]/40 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 bg-[#FFD9C8]/40 blur-3xl rounded-full -z-10" />

        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
            About
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            A Creator Who Blends
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] text-transparent bg-clip-text">
              {" "}Music, Teaching, Business & Storytelling
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A modern creative journey — where artistry meets education, online business,
            long-form conversation, and a passion for sharing knowledge.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-[#F9FAFF]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* TEXT */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-3">
              Story
            </p>

            <h2 className="text-3xl font-bold mb-6">
              A Creative Journey Rooted in Curiosity
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              The story begins with a passion for piano — teaching early students, playing
              small performances, and experimenting with original compositions. What started
              as local piano lessons slowly evolved into a multi-discipline creative career.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              Over the years, teaching inspired deeper empathy and connection. E-commerce offered
              the thrill of business ownership. Podcasts opened a space for deeper thought and
              reflections on life, creativity, and personal growth. YouTube became a place to
              share those ideas instantly with thousands.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Today, all of these worlds come together into one ecosystem — one creator, one brand,
              one mission.
            </p>
          </div>

          {/* IMAGE with AI Prompt */}
          <div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
              <Image
                src="/images/about-story.png"
                alt="Piano story beginning"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* CREATOR BIO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* BIO TEXT */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-500 mb-3">
              Creator Bio
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              A Teacher, Entrepreneur, Podcaster & YouTuber —
              <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] text-transparent bg-clip-text">
                {" "}unified in one creative identity
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Teaching has shaped emotional awareness and communication. E-commerce added
              structure, business management, and resilience. Podcasting built a space for long-form
              storytelling. YouTube helped capture spontaneous creativity and reach a global audience.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              These aren’t separate careers — they’re different expressions of one purpose: to create,
              teach, inspire, and share what makes life meaningful.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              This page brings all of those worlds into harmony.
            </p>
          </div>

          {/* CARD IMAGE */}
          <div>
            <div className="p-6 border border-slate-100 rounded-3xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">

              <div className="relative h-56 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-creator.png"
                  alt="Creator profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  <a href="https://portfolio-website-zeta-six-83.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B6EE1] transition-colors">
                    Divyanshu Saini
                  </a>
                </h3>
                <p className="text-sm text-slate-600">
                  A unique blend of teaching, creativity, storytelling, and digital business.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-[#F9FAFF]">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10">
            The Journey So Far
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold">2007 — E-Commerce Begins</h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Selling collectibles and unique items online — learning business, customer service,
                marketing, and the fast-changing world of online retail.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2010 — Piano Teaching Expands</h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Over 100+ students taught, shaping a deep understanding of education, empathy,
                structure, and personal growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2022 — YouTube & Content Creation</h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Music videos, creative thoughts, storytelling, and moments of inspiration shared with
                thousands online.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2024 — Podcast Series Launched</h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Deep conversations on creativity, mindset, teaching, and the emotional side of music.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            To inspire, educate, and empower musicians and creators through meaningful content,
            accessible learning, honest storytelling, and modern digital tools — uniting creativity
            with human depth.
          </p>

          <button
            className="mt-8 px-8 py-3 rounded-full bg-[#5B6EE1] text-white text-sm font-semibold shadow-lg shadow-[#5B6EE1]/20 hover:scale-[1.03] transition-transform"
          >
            Start Learning Today
          </button>
        </div>
      </section>

    </main>
  );
}
