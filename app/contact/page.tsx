import Image from "next/image";

// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/contact-hero.png"
            alt="Cozy workspace desk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#C7B9FF]/30 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-[#FFD9C8]/40 blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
            Contact
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] bg-clip-text text-transparent">
              Creator Hub
            </span>
          </h1>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Whether you want to book lessons, collaborate, or simply say hello—we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] border border-slate-100 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9D8CFF]/40 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9D8CFF]/40 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9D8CFF]/40 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9D8CFF]/40 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5B6EE1] hover:bg-[#4a5fd4] text-white py-3 rounded-xl font-semibold shadow-md shadow-[#5B6EE1]/30 transition-all"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-between">

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="text-sm font-semibold text-slate-700">Email</p>
                  <p className="text-slate-600">support@creatorhub.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">Phone</p>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">Studio Location</p>
                  <p className="text-slate-600">
                    Lafayette, Indiana, United States
                  </p>
                </div>

              </div>

              {/* Social Icons */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-slate-700 mb-4">Follow Us</p>
                <div className="flex gap-4">

                  <a className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#5B6EE1] hover:border-[#5B6EE1] transition-all shadow-sm" href="#">
                    <span>🎧</span>
                  </a>

                  <a className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-rose-500 hover:border-rose-500 transition-all shadow-sm" href="#">
                    <span>📸</span>
                  </a>

                  <a className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:border-red-500 transition-all shadow-sm" href="#">
                    <span>▶</span>
                  </a>

                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            {/* MAP IMAGE */}
            <div className="mt-10">
              <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/images/contact-map.png"
                  alt="Studio Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/50 flex items-center gap-3 shadow-lg">
                  <div className="h-10 w-10 rounded-full bg-[#5B6EE1] flex items-center justify-center text-white shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Studio</p>
                    <p className="text-sm text-slate-600">Lafayette, Indiana</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-[#E7F1FF] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Ready to Start Your Piano Journey?
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Reach out today and let’s build something beautiful together — from music lessons to creative collaborations.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-[#5B6EE1] hover:bg-[#4a5fd4] text-white text-sm font-semibold shadow-lg shadow-[#5B6EE1]/20 transition-transform hover:scale-[1.03]">
          Book a Session
        </button>
      </section>

    </main>
  );
}
