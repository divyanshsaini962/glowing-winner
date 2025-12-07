import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

const formats = [
  {
    title: "1:1 Private Lessons",
    tag: "Personalized",
    description:
      "Fully tailored piano coaching for your goals, pace, and schedule.",
    icon: "🎹",
  },
  {
    title: "Online Sessions",
    tag: "Flexible",
    description:
      "High-quality video calls with screen sharing, notation, and feedback.",
    icon: "💻",
  },
  {
    title: "Group Classes",
    tag: "Community",
    description:
      "Learn together with other students, share progress, and stay motivated.",
    icon: "👥",
  },
  {
    title: "Self-Guided Tracks",
    tag: "On Your Time",
    description:
      "Structured practice plans and guided videos you can follow anytime.",
    icon: "📚",
  },
];

const levels = [
  {
    label: "Beginner",
    subtitle: "Brand New or Returning",
    description:
      "Start from the absolute basics: posture, simple pieces, and reading music in a friendly way.",
    focus: ["Hand position & posture", "Simple melodies", "Reading notes"],
  },
  {
    label: "Intermediate",
    subtitle: "Building Confidence",
    description:
      "Develop technique, timing, and expression with more complex pieces and structured practice.",
    focus: [
      "Scales & chords",
      "Dynamic expression",
      "Playing with metronome",
    ],
  },
  {
    label: "Advanced",
    subtitle: "Performance & Depth",
    description:
      "Refine your tone, interpretation, and performance skills with detailed feedback.",
    focus: ["Interpretation", "Advanced repertoire", "Performance prep"],
  },
];

const plans = [
  {
    name: "Starter",
    idealFor: "Curious beginners",
    price: "$79/mo",
    detail: "30 min weekly sessions",
    bullets: [
      "1 x 30 minute lesson per week",
      "Beginner-friendly curriculum",
      "Basic practice roadmap",
    ],
  },
  {
    name: "Standard",
    idealFor: "Committed learners",
    price: "$129/mo",
    detail: "45 min weekly sessions",
    highlight: true,
    bullets: [
      "1 x 45 minute lesson per week",
      "Personalized lesson plan",
      "Practice feedback between sessions",
    ],
  },
  {
    name: "Intensive",
    idealFor: "Serious students",
    price: "$199/mo",
    detail: "60 min weekly sessions",
    bullets: [
      "1 x 60 minute lesson per week",
      "Advanced technique coaching",
      "Performance & exam prep support",
    ],
  },
];

const faq = [
  {
    q: "Do I need any prior experience?",
    a: "No. Many students start as complete beginners. We'll build everything step by step from the basics.",
  },
  {
    q: "Do I need my own piano or keyboard?",
    a: "Yes, you’ll need at least a basic keyboard at home so you can practice between lessons.",
  },
  {
    q: "How are online lessons run?",
    a: "We meet over video call, share sheet music on screen, and you’ll play from your own instrument at home.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can adjust your plan as your goals, schedule, or budget change.",
  },
];

const LessonsPage: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/lessons-hero.png"
            alt="Piano lesson close-up"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/60 -z-10" />
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C7B9FF]/25 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#FFD9C8]/30 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 shadow-sm">
            Piano Lessons
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Learn Piano with{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] via-[#5B6EE1] to-[#F2C56D] bg-clip-text text-transparent">
              Calm, Structured Lessons
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re just starting or returning to the keys, follow a
            guided path designed to fit your pace, goals, and lifestyle.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
              Book Intro Session
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
              View Lesson Plans
            </button>
          </div>
        </div>
      </section>

      {/* Lesson Formats */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Lesson Formats
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Choose the{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] to-[#5B6EE1] bg-clip-text text-transparent">
                Way You Learn Best
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              In-person, online, solo, or group—each format is designed to keep
              you progressing with clear structure and support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] p-5 flex flex-col hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)] transition-all"
              >
                <div className="h-9 w-9 rounded-full bg-[#E7F1FF] flex items-center justify-center mb-3 text-lg">
                  {f.icon}
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-1">
                  {f.tag}
                </p>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-600 flex-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels / Path */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Learning Path
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              A Clear Journey from{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] to-[#F2C56D] bg-clip-text text-transparent">
                First Notes
              </span>{" "}
              to Confident Playing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Lessons are structured into levels so you always know where you
              are, what&apos;s next, and how far you&apos;ve come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {levels.map((level, idx) => (
              <div
                key={level.label}
                className="relative rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-[#F9FAFF] p-6 shadow-sm"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 rounded-2xl bg-[#E7F1FF] flex items-center justify-center text-xs font-semibold text-[#5B6EE1] shadow-sm">
                  {idx + 1}
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                  {level.label}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  {level.subtitle}
                </h3>
                <p className="mt-3 text-xs text-slate-600">
                  {level.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                  {level.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[3px] h-3 w-3 rounded-full bg-[#E7F1FF] flex items-center justify-center text-[9px] text-[#5B6EE1]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans / Pricing */}
      <section className="py-16 sm:py-20 bg-[#F9FAFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              Lesson Plans
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Choose a Plan That{" "}
              <span className="bg-gradient-to-r from-[#9D8CFF] to-[#5B6EE1] bg-clip-text text-transparent">
                Fits Your Practice
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              All plans include guided curriculum, feedback, and support—only
              the pace and depth change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border bg-white p-6 flex flex-col shadow-sm ${plan.highlight
                  ? "border-[#5B6EE1]/60 shadow-[0_24px_60px_rgba(37,99,235,0.18)]"
                  : "border-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                  }`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                  {plan.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {plan.idealFor}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-500">per month</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">{plan.detail}</p>

                <ul className="mt-4 space-y-2 text-xs text-slate-600 flex-1">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[3px] h-3 w-3 rounded-full bg-[#E7F1FF] flex items-center justify-center text-[9px] text-[#5B6EE1]">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold transition-colors ${plan.highlight
                    ? "bg-[#5B6EE1] text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4]"
                    : "border border-slate-200 bg-white text-slate-800 hover:border-[#9D8CFF] hover:text-[#5B6EE1]"
                    }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* How it works */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                How It Works
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                Simple Steps to Start{" "}
                <span className="bg-gradient-to-r from-[#9D8CFF] to-[#F2C56D] bg-clip-text text-transparent">
                  Learning Piano
                </span>
              </h2>
              <ol className="mt-6 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-[2px] h-6 w-6 rounded-full bg-[#E7F1FF] flex items-center justify-center text-xs font-semibold text-[#5B6EE1]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Book a free intro call
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      We&apos;ll talk about your goals, experience, and what
                      you&apos;d like to play.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[2px] h-6 w-6 rounded-full bg-[#E7F1FF] flex items-center justify-center text-xs font-semibold text-[#5B6EE1]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Get a personalized lesson plan
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      You&apos;ll receive a clear path with weekly focus points
                      and practice guidance.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[2px] h-6 w-6 rounded-full bg-[#E7F1FF] flex items-center justify-center text-xs font-semibold text-[#5B6EE1]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Start your weekly lessons
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Meet regularly, get feedback, and watch your playing
                      improve over time.
                    </p>
                  </div>
                </li>
              </ol>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
                Schedule Intro Call
              </button>
            </div>

            {/* FAQ */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
                FAQ
              </p>
              <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-900">
                Common Questions About Lessons
              </h3>
              <div className="mt-6 space-y-4">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-slate-100 bg-[#F9FAFF] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.q}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F9FAFF] to-[#E7F1FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-[#9D8CFF] to-[#F2C56D] bg-clip-text text-transparent">
              Piano Journey
            </span>
            ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Take the first step with a relaxed intro session—no pressure, just a
            chance to explore whether these lessons feel right for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#5B6EE1] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B6EE1]/30 hover:bg-[#4a5fd4] transition-colors">
              Book Intro Session
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-800 hover:border-[#9D8CFF] hover:bg-white transition-colors">
              Explore Lesson Plans
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LessonsPage;
