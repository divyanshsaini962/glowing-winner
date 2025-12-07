// app/store/page.tsx

import Image from "next/image";

const products = [
  {
    name: "Classical Piano Sheet Music Pack",
    price: "$12.99",
    category: "Digital Download",
    desc: "A curated collection of timeless classical pieces for daily practice.",
    image: "/images/product-sheet-classical.png",
  },
  {
    name: "Piano Technique Lesson Book",
    price: "$19.99",
    category: "Educational",
    desc: "A structured learning guide for developing finger strength and musical expression.",
    image: "/images/product-lesson-book.png",
  },
  {
    name: "Digital Metronome (Pro Edition)",
    price: "$7.99",
    category: "Software",
    desc: "A highly accurate digital metronome perfect for practice and performance.",
    image: "/images/product-metronome.png",
  },
  {
    name: "Piano Pedal Set (Black Matte)",
    price: "$29.99",
    category: "Accessories",
    desc: "High-quality sustain pedal with smooth action and durable build.",
    image: "/images/product-pedal.png",
  },
  {
    name: "Jazz Improvisation Sheet Pack",
    price: "$14.99",
    category: "Digital Download",
    desc: "Learn expressive jazz licks and improvisation patterns with this printable pack.",
    image: "/images/product-sheet-jazz.png",
  },
  {
    name: "Piano Studio Poster (Minimal Edition)",
    price: "$9.99",
    category: "Printable",
    desc: "Elegant wall art designed for piano enthusiasts and home studios.",
    image: "/images/product-poster.png",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden isolate">
        {/* Soft Gradient Background */}
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/store-hero.png"
            alt="Musical store flatlay"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute top-0 right-[-120px] h-72 w-72 bg-[#C7B9FF]/30 blur-3xl rounded-full -z-10"></div>
        <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 bg-[#FFD9C8]/30 blur-3xl rounded-full -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
            Store
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
            Everything You Need for Your{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] bg-clip-text text-transparent">
              Piano Journey
            </span>
          </h1>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Sheet music, learning materials, accessories, and digital tools—
            thoughtfully crafted to support musicians at every level.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center mb-10">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-5"
              >
                {/* PRODUCT IMAGE AREA */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner group-hover:shadow-md transition-shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* PRODUCT DETAILS */}
                <div className="mt-5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {product.category}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mt-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2">{product.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#5B6EE1]">
                      {product.price}
                    </span>

                    <a
                      href="https://www.ebay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#5B6EE1] hover:bg-[#4a5fd4] text-white text-xs font-semibold shadow-md shadow-[#5B6EE1]/30 transition-all"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-14">
            <a
              href="https://www.ebay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-[#5B6EE1] hover:bg-[#4a5fd4] text-white text-sm font-semibold shadow-md shadow-[#5B6EE1]/30 transition-transform hover:scale-[1.03]"
            >
              Browse Full Store
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#E7F1FF] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Level Up Your Practice Experience
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          Get access to premium sheet music, exclusive learning tools, and
          studio-grade accessories that help you grow faster.
        </p>

        <a
          href="https://www.ebay.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-[#5B6EE1] hover:bg-[#4a5fd4] text-white text-sm font-semibold shadow-lg shadow-[#5B6EE1]/30 transition-transform hover:scale-[1.03]"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
}
