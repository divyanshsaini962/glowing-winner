// TestimonialsSection

import SectionShell from "../ui/SectionShell";
import Card from "../ui/Card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Piano Student",
      content:
        "The lessons have completely transformed my playing. Everything is explained clearly and at a pace that feels just right.",
      rating: 5,
      accent: "from-lavender/60 to-skyTint/60",
    },
    {
      name: "Michael Chen",
      role: "Music Enthusiast",
      content:
        "The podcast is incredibly inspiring. I always walk away with a new idea about practice, creativity, or listening.",
      rating: 5,
      accent: "from-peach/60 to-lavender/60",
    },
    {
      name: "Emily Rodriguez",
      role: "Professional Pianist",
      content:
        "A wonderful community of musicians. The resources and structure here feel thoughtful, modern, and truly supportive.",
      rating: 5,
      accent: "from-skyTint/60 to-[#5B6EE1]/20",
    },
  ];

  return (
    <SectionShell className="bg-softBg">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-bodyText/70 mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-headingText mb-4">
          What People{" "}
          <span className="bg-gradient-to-r from-[#C7B9FF] to-[#5B6EE1] text-transparent bg-clip-text">
            Are Saying
          </span>
        </h2>

        <p className="text-lg text-bodyText/80 max-w-2xl mx-auto leading-relaxed">
          Stories from students, listeners, and fellow musicians who have
          grown with the help of this piano-focused space.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            premium
            className="hover-lift bg-white/90 border border-softBorder/70 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Accent bar / subtle top gradient */}
            <div
              className={`h-1.5 w-full rounded-t-2xl bg-gradient-to-r ${testimonial.accent}`}
            />

            <div className="p-6 flex flex-col h-full">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-[#F4B86A] text-lg leading-none mr-1"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-bodyText mb-6 italic leading-relaxed">
                “{testimonial.content}”
              </p>

              {/* Name + Role */}
              <div className="mt-auto pt-2">
                <div className="font-heading font-semibold text-headingText">
                  {testimonial.name}
                </div>
                <div className="text-sm text-bodyText/70">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
