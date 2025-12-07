"use client";

import Link from "next/link";

export default function YouTubeSection() {
  const videos = [
    {
      id: "g8F66kX7", // YouTube Video ID
      title: "What No One Tells You About Learning Piano",
    },
    {
      id: "g2DQd2Hn",
      title: "Does It Even Matter If God Exists? — Podcast Episode",
    },
    {
      id: "gPVBKzMR",
      title: "The Secret Shadows in Your Head Explained",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E7F1FF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Latest on{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] text-transparent bg-clip-text">
              YouTube
            </span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Watch lessons, podcasts, improvisations, creative thoughts, and music performances.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white hover:-translate-y-1 transition-all"
            >
              <iframe
                width="100%"
                height="220"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900 text-sm">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Creator Card */}
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg text-center max-w-lg w-full">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C7B9FF] to-[#5B6EE1] rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
              🎥
            </div>

            <h3 className="text-2xl font-bold mt-4 text-slate-900">Creator Hub YouTube</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Subscribe for music breakdowns, piano lessons, creative storytelling,
              podcast clips, and behind-the-scenes content.
            </p>

            {/* Subscribe Button */}
            <Link
              href="https://www.youtube.com/@lukeskywahlker"
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 transition-all shadow-md hover:shadow-xl hover:scale-[1.03]"
            >
              <span>🔔</span> Subscribe on YouTube
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
