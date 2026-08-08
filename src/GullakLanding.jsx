import { useEffect, useRef } from "react";
import {
  Download,
  Target,
  Users,
  PieChart,
  Sparkles,
  ShieldAlert,
  Lock,
  Wallet,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

import noBGLogoSrc from "../public/RS.png";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as: Tag = "div", className = "", children, delay = 0 }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`gk-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Primary flow - grounded in Idea 10 (Savings Goals), Idea 2 (Parent Link),
// Idea 4 (Smart Spending Tracker) and Idea 18 (Achievements/Streaks).
const FEATURES = [
  {
    icon: Target,
    tint: "emerald",
    title: "Set a goal",
    body: "Name it, give it a target amount and a date. A new phone, Eid money, an emergency cushion - whatever it is.",
  },
  {
    icon: Users,
    tint: "pink",
    title: "Parents send money in",
    body: "Link a parent account so they can top up your jar directly, or set up a weekly or monthly allowance that arrives on its own.",
  },
  {
    icon: PieChart,
    tint: "blue",
    title: "See where it goes",
    body: "Every purchase is sorted into a category automatically, so you can see food, subscriptions and outings at a glance.",
  },
  {
    icon: Sparkles,
    tint: "orange",
    title: "Break it open",
    body: "Hit your target, cash out, and get a badge for it. The jar resets, ready for whatever you're saving toward next.",
  },
];

// Bucket cards - one real feature idea from each bucket in the doc.
const BUCKETS = [
  {
    icon: Wallet,
    tint: "pink",
    bucket: "Receive",
    title: "Parent/Guardian Link",
    bullets: [
      "Parent sends money directly, no bank app switching",
      "Set up a recurring weekly or monthly allowance",
      "Teen gets notified the moment money lands",
    ],
  },
  {
    icon: PieChart,
    tint: "blue",
    bucket: "Spend",
    title: "Smart Spending Tracker",
    bullets: [
      "Purchases auto-sorted into food, subscriptions, gaming, outings",
      "A simple chart shows the breakdown for the week or month",
      "Tap any category to see the individual transactions",
    ],
  },
  {
    icon: Target,
    tint: "emerald",
    bucket: "Save",
    title: "Savings Goals",
    bullets: [
      "Create a goal with a target amount and date",
      "Watch a visual progress bar fill as you add money",
      "Top up manually, or automatically on a schedule",
    ],
  },
  {
    icon: SlidersHorizontal,
    tint: "yellow",
    bucket: "Budget",
    title: "Simple Budget Planner",
    bullets: [
      "Adjustable sliders split money across spend, save and invest",
      "A gentle warning shows up before you overspend a category",
      "Resets every month, with the option to carry balances over",
    ],
  },
  {
    icon: TrendingUp,
    tint: "lilac",
    bucket: "Invest",
    title: "Beginner Investing Explainer",
    bullets: [
      "Jargon-free \"investing 101\" lessons made for teens",
      "A demo portfolio to practice with - no real money at risk",
      "Short quizzes so the lessons actually stick",
    ],
  },
  {
    icon: Lock,
    tint: "orange",
    bucket: "Stay safe",
    title: "Privacy Mode",
    bullets: [
      "Lock the app with a PIN or biometrics",
      "Auto-locks itself after a few minutes of inactivity",
      "Blocks screenshots and screen recording of your balance",
    ],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Download the APK",
    body: "Tap the download button above on your Android phone, or transfer the file from your computer.",
  },
  {
    n: "02",
    title: "Allow this source",
    body: (
      <>
        When prompted, open <b>Settings</b> and enable{" "}
        <code>Install unknown apps</code> for your browser or file manager.
      </>
    ),
  },
  {
    n: "03",
    title: "Install Gullak",
    body: (
      <>
        Open the downloaded file and tap <b>Install</b>. It'll be on your
        home screen in a few seconds.
      </>
    ),
  },
  {
    n: "04",
    title: "Open & start a jar",
    body: "Launch the app, create your first goal, and make your first drop. That's it - you're saving.",
  },
];

const CHIPS = [
  { label: "Travel", tint: "lilac" },
  { label: "Gadget", tint: "orange" },
  { label: "Emergency", tint: "blue" },
  { label: "Gift", tint: "pink" },
  { label: "Eid", tint: "yellow" },
];

export default function GullakLanding() {
  return (
    <div className="gk-root">
      <style>{CSS}</style>
      <nav className="gk-nav">
        <div className="gk-wrap gk-nav-inner">
          <div className="gk-brand">
            <img src={noBGLogoSrc} alt="Gullak icon" width={32} height={32} />
            <span>Gullak</span>
          </div>
          <a className="gk-nav-cta" href="https://github.com/muhammadzayan19/gullak-landing/releases/download/Beta/gullak-beta.apk" download target="_blank"
  rel="noopener noreferrer">
            <Download size={10} strokeWidth={2.3} />
            <span className="gk-btn-meta">
            <strong>Download</strong>
            </span>
        </a>
        </div>
      </nav>

      <header className="gk-hero">
        <div className="gk-hero-glow" aria-hidden="true" />
        <div className="gk-hero-ring" aria-hidden="true" />
        <div className="gk-wrap gk-hero-inner">
          <div className="gk-eyebrow">
            <span className="gk-eyebrow-dot" />
            Private beta &nbsp;·&nbsp; Android
          </div>

          <img
            className="gk-logo"
            src={noBGLogoSrc}
            alt="Gullak - an ornately hand-painted piggy bank jar"
            width={220}
            height={220}
          />

          <h1 className="gk-headline">
            Every rupee
            <br />
            deserves <em>its own jar</em>.
          </h1>
          <p className="gk-sub">
            Gullak is a savings app teens and parents actually use together -
            set goals, get allowance sent straight in, and see exactly where
            every rupee goes. This build is for testers only.
          </p>

          <div className="gk-cta-row" id="download">
            <a className="gk-btn-primary" href="https://github.com/muhammadzayan19/gullak-landing/releases/download/Beta/gullak-beta.apk" download target="_blank"
  rel="noopener noreferrer">
              <Download size={19} strokeWidth={2.3} />
              <span className="gk-btn-meta">
                <small>Gullak Beta · v0.1</small>
                <strong>Download APK</strong>
              </span>
            </a>
          </div>
        </div>
      </header>

      <div className="gk-seam" aria-hidden="true">
        {["#EC4899", "#EAB308", "#3B82F6", "#22C55E", "#F97316", "#A855F7", "#EC4899"].map(
          (c, i) => (
            <span
              key={i}
              style={{ background: c, width: i === 3 ? 12 : 9, height: i === 3 ? 12 : 9 }}
            />
          )
        )}
      </div>

      <section className="gk-section">
        <div className="gk-wrap">
          <Reveal className="gk-section-head">
            <div className="gk-kicker">Why it feels different</div>
            <h2>Saving, made visible</h2>
            <p>
              No spreadsheets, no guilt-tripping notifications. Just jars you
              fill, one drop at a time - with your parents in the loop, not
              just checking up on you.
            </p>
          </Reveal>

          <div className="gk-features">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} className={`gk-fcard gk-tint-${f.tint}`} delay={i * 70}>
                <div className="gk-fcard-icon">
                  <f.icon size={21} strokeWidth={2.1} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="gk-chip-row" delay={120}>
            {CHIPS.map((c) => (
              <span key={c.label} className={`gk-chip gk-chip-${c.tint}`}>
                <i /> {c.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="gk-section">
        <div className="gk-wrap">
          <Reveal className="gk-section-head">
            <div className="gk-kicker">Everything in one place</div>
            <h2>Six ways Gullak covers you</h2>
            <p>
              Receiving, spending, saving, budgeting and investing - all
              tracked from the same jar, with a lock on it when it matters.
            </p>
          </Reveal>

          <div className="gk-buckets">
            {BUCKETS.map((b, i) => (
              <Reveal key={b.title} className={`gk-bcard gk-tint-${b.tint}`} delay={i * 60}>
                <div className="gk-bcard-top">
                  <div className="gk-bcard-icon">
                    <b.icon size={19} strokeWidth={2.1} />
                  </div>
                  <span className="gk-bcard-bucket">{b.bucket}</span>
                </div>
                <h3>{b.title}</h3>
                <ul>
                  {b.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gk-section" id="install">
        <div className="gk-wrap">
          <Reveal as="div" className="gk-steps-panel">
            <div className="gk-section-head">
              <div className="gk-kicker gk-kicker-dark">Getting started</div>
              <h2 className="gk-h2-dark">Install in four steps</h2>
              <p className="gk-p-dark">
                Android will warn you about installing outside the Play
                Store - that's expected for a beta build.
              </p>
            </div>

            <div className="gk-steps">
              {STEPS.map((s) => (
                <div className="gk-step" key={s.n}>
                  <span className="gk-step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="gk-beta-note" delay={80}>
            <div className="gk-beta-badge">
              <ShieldAlert size={20} strokeWidth={2.2} />
            </div>
            <div>
              <h3>You're testing a work in progress</h3>
              <p>
                Things may break or look unfinished - that's exactly what
                this build is for. Found a bug or have thoughts? Send them
                our way, they shape what ships next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="gk-footer">
        <div className="gk-wrap">
          <div className="gk-foot-row">
            <div className="gk-foot-brand">
              <img src={noBGLogoSrc} alt="Gullak icon" width={24} height={24} />
              <span>Gullak</span>
            </div>
            <div className="gk-foot-credits">
              Developed by{" "}
              <a href="https://muhammadzayan.com" target="_blank" rel="noopener noreferrer">
                Muhammad Zayan
              </a>{" "}
              &amp;{" "}
              <a href="https://archatriwala.com" target="_blank" rel="noopener noreferrer">
                Abdul Rafay
              </a>
            </div>
          </div>
          <div className="gk-foot-divider" />
          <p className="gk-foot-copy">
            Gullak · Private beta build · Not available on the Play Store yet
          </p>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,380;0,9..144,600;0,9..144,680;0,9..144,900;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap');

.gk-root{
  /* Locking color-scheme stops Chrome/Linux's "auto dark mode for web
     content" from re-inverting our own dark buttons and making their
     white text disappear against their own background. */
  color-scheme: light only;

  --emerald:#22C55E; --emerald-dark:#15803D; --emerald-light:#DCFCE7;
  --mint:#4ADE80; --mint-soft:#F0FDF4;
  --charcoal:#0F172A; --charcoal-light:#1E293B; --slate:#334155; --slate-faint:#64748B;
  --cloud:#94A3B8; --light-gray:#F1F5F9; --bg-light:#F8FAFC; --cream:#FAF9F5; --white:#FFFFFF;
  --lilac:#A855F7; --lilac-soft:#F3E8FF; --orange:#F97316; --orange-soft:#FFEDD5;
  --blue:#3B82F6; --blue-soft:#DBEAFE; --pink:#EC4899; --pink-soft:#FCE7F3;
  --yellow:#EAB308; --yellow-soft:#FEF9C3;
  --border-light: rgba(226, 232, 240, 0.8);
  --glass-white: rgba(255, 255, 255, 0.72);
  --shadow-color: rgba(15, 23, 42, 0.08);
  --display: "Fraunces", Georgia, serif;
  --body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  font-family: var(--body);
  background: var(--cream);
  color: var(--charcoal);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: "cv02","cv03","cv04","cv11";
  overflow-x: hidden;
}
.gk-root *{ box-sizing: border-box; }
.gk-root img{ display:block; max-width:100%; }
.gk-root a{ color:inherit; text-decoration:none; }
.gk-root :focus-visible{ outline: 2.5px solid var(--emerald-dark); outline-offset: 3px; border-radius: 4px; }
@media (prefers-reduced-motion: reduce){ .gk-root *{ animation-duration:.001ms !important; transition-duration:.001ms !important; } }

.gk-wrap{ max-width: 1100px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 28px); }

/* Nav */
.gk-nav{ position: sticky; top:0; z-index:50; background: var(--glass-white); backdrop-filter: blur(14px) saturate(160%); -webkit-backdrop-filter: blur(14px) saturate(160%); border-bottom: 1px solid var(--border-light); }
.gk-nav-inner{ display:flex; align-items:center; justify-content:space-between; height:68px; }
.gk-brand{ display:flex; align-items:center; gap:9px; font-family: var(--display); font-weight:600; font-size:1.22rem; letter-spacing:-0.01em; }
.gk-nav-cta{
  display:inline-flex; align-items:center; gap:7px;
  background: var(--charcoal); color:#FFFFFF !important;
  padding: 9px 16px; border-radius:999px; font-weight:600; font-size:0.86rem;
  transition: transform .18s ease, background .18s ease;
}
.gk-nav-cta, .gk-nav-cta *{ color:#FFFFFF !important; }
.gk-nav-cta svg{ stroke:#FFFFFF !important; }
.gk-nav-cta:hover{ background: var(--emerald-dark); transform: translateY(-1px); }

/* Seam / signature divider */
.gk-seam{ display:flex; align-items:center; justify-content:center; gap:14px; padding: 26px 0; }
.gk-seam span{ border-radius:50%; display:inline-block; }

/* Hero */
.gk-hero{ position:relative; padding: 84px 0 36px; overflow:hidden; text-align:center; }
.gk-hero-glow{ position:absolute; inset:0; z-index:0; pointer-events:none;
  background:
    radial-gradient(600px 400px at 50% 4%, rgba(74,222,128,0.24), transparent 60%),
    radial-gradient(440px 340px at 86% 26%, rgba(168,85,247,0.11), transparent 65%),
    radial-gradient(440px 340px at 8% 30%, rgba(249,115,22,0.10), transparent 65%);
}
.gk-hero-ring{ position:absolute; z-index:0; top:-90px; left:50%; transform:translateX(-50%); width:640px; height:640px; max-width:150vw; border-radius:50%;
  background: radial-gradient(circle at 50% 42%, var(--mint-soft) 0%, rgba(240,253,244,0) 66%); pointer-events:none; }
.gk-hero-inner{ position:relative; z-index:1; }

.gk-eyebrow{ display:inline-flex; align-items:center; gap:8px; background: var(--emerald-light); color: var(--emerald-dark);
  font-weight:700; font-size:0.75rem; letter-spacing:0.07em; text-transform:uppercase; padding:7px 14px; border-radius:999px; margin-bottom:28px; }
.gk-eyebrow-dot{ width:6px; height:6px; border-radius:50%; background: var(--emerald-dark); animation: gk-pulse 1.8s ease-in-out infinite; }
@keyframes gk-pulse{ 0%,100%{opacity:1;} 50%{opacity:.32;} }

.gk-logo{ width:220px; height:220px; margin:0 auto 32px; animation: gk-rise .9s cubic-bezier(.2,.8,.2,1) both, gk-float 6s ease-in-out 1s infinite; }
@keyframes gk-rise{ from{opacity:0; transform:translateY(18px) scale(.96);} to{opacity:1; transform:none;} }
@keyframes gk-float{ 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-8px);} }

.gk-headline{ font-family: var(--display); font-weight:680; font-optical-sizing:auto; font-size: clamp(2.5rem, 6.4vw, 4.8rem);
  line-height:1.02; letter-spacing:-0.025em; max-width:820px; margin:0 auto 22px; }
.gk-headline em{ font-style:italic; font-weight:500; color: var(--emerald-dark);
  background: linear-gradient(180deg, transparent 60%, var(--emerald-light) 60%); padding:0 3px; }

.gk-sub{ font-size:1.15rem; color: var(--slate); max-width:560px; margin:0 auto 40px; line-height:1.62; font-weight:400; }

.gk-cta-row{ display:flex; flex-direction:column; align-items:center; gap:16px; }
.gk-btn-primary{
  display:inline-flex; align-items:center; gap:12px;
  background: var(--charcoal); color:#FFFFFF !important;
  padding:17px 28px; border-radius:16px; font-weight:700; box-shadow: 0 10px 26px rgba(15,23,42,.18);
  transition: transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s ease, background .2s ease;
}
.gk-btn-primary, .gk-btn-primary *{ color:#FFFFFF !important; }
.gk-btn-primary svg{ stroke:#FFFFFF !important; }
.gk-btn-primary:hover{ background: var(--emerald-dark); transform: translateY(-3px); box-shadow: 0 16px 34px rgba(21,128,61,.28); }
.gk-btn-meta{ display:flex; flex-direction:column; align-items:flex-start; line-height:1.22; }
.gk-btn-meta small{ font-weight:500; opacity:.72; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.05em; }
.gk-btn-meta strong{ font-size:1.05rem; font-family: var(--body); }
.gk-btn-ghost{ display:inline-flex; align-items:center; gap:6px; font-size:0.9rem; font-weight:600; color: var(--slate-faint); padding:6px 4px; transition: color .18s ease, gap .18s ease; }
.gk-btn-ghost:hover{ color: var(--emerald-dark); }

/* Section shell */
.gk-section{ padding: 22px 0 68px; position:relative; }
.gk-section-head{ text-align:center; max-width:600px; margin:0 auto 44px; }
.gk-kicker{ font-size:0.75rem; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; color: var(--emerald-dark); margin-bottom:12px; }
.gk-kicker-dark{ color: var(--mint); }
.gk-root h2{ font-family: var(--display); font-weight:600; letter-spacing:-0.02em; font-size: clamp(1.85rem, 3.3vw, 2.4rem); margin-bottom:12px; }
.gk-h2-dark{ color: var(--white); }
.gk-section-head p{ color: var(--slate); line-height:1.62; font-size:1.02rem; }
.gk-p-dark{ color: var(--cloud) !important; }

/* Reveal */
.gk-reveal{ opacity:0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
.gk-reveal.in-view{ opacity:1; transform:none; }

/* Feature cards */
.gk-features{ display:grid; grid-template-columns: repeat(4,1fr); gap:16px; }
.gk-fcard{ background: var(--white); border:1px solid var(--border-light); border-radius:20px; padding:26px 22px;
  box-shadow: 0 1px 2px var(--shadow-color); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.gk-fcard:hover{ transform: translateY(-5px); box-shadow: 0 18px 32px var(--shadow-color); border-color: transparent; }
.gk-fcard-icon{ width:44px; height:44px; border-radius:13px; display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
.gk-fcard h3{ font-family: var(--display); font-size:1.06rem; font-weight:600; margin-bottom:8px; letter-spacing:-0.01em; }
.gk-fcard p{ font-size:0.91rem; color: var(--slate-faint); line-height:1.56; }

/* Bucket cards */
.gk-buckets{ display:grid; grid-template-columns: repeat(3,1fr); gap:16px; }
.gk-bcard{ background: var(--white); border:1px solid var(--border-light); border-radius:20px; padding:24px 22px;
  box-shadow: 0 1px 2px var(--shadow-color); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.gk-bcard:hover{ transform: translateY(-5px); box-shadow: 0 18px 32px var(--shadow-color); border-color: transparent; }
.gk-bcard-top{ display:flex; align-items:center; gap:10px; margin-bottom:14px; }
.gk-bcard-icon{ width:36px; height:36px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.gk-bcard-bucket{ font-size:0.72rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color: var(--slate-faint); }
.gk-bcard h3{ font-family: var(--display); font-size:1.08rem; font-weight:600; margin-bottom:12px; letter-spacing:-0.01em; }
.gk-bcard ul{ margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:8px; }
.gk-bcard li{ font-size:0.87rem; color: var(--slate-faint); line-height:1.5; padding-left:16px; position:relative; }
.gk-bcard li::before{ content:""; position:absolute; left:0; top:0.55em; width:5px; height:5px; border-radius:50%; background: var(--cloud); }

.gk-tint-emerald .gk-fcard-icon, .gk-tint-emerald .gk-bcard-icon{ background: var(--emerald-light); color: var(--emerald-dark); }
.gk-tint-pink .gk-fcard-icon, .gk-tint-pink .gk-bcard-icon{ background: var(--pink-soft); color: var(--pink); }
.gk-tint-blue .gk-fcard-icon, .gk-tint-blue .gk-bcard-icon{ background: var(--blue-soft); color: var(--blue); }
.gk-tint-orange .gk-fcard-icon, .gk-tint-orange .gk-bcard-icon{ background: var(--orange-soft); color: var(--orange); }
.gk-tint-yellow .gk-fcard-icon, .gk-tint-yellow .gk-bcard-icon{ background: var(--yellow-soft); color: #A16207; }
.gk-tint-lilac .gk-fcard-icon, .gk-tint-lilac .gk-bcard-icon{ background: var(--lilac-soft); color: var(--lilac); }

.gk-chip-row{ display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top:44px; }
.gk-chip{ display:inline-flex; align-items:center; gap:8px; padding:9px 16px; border-radius:999px; font-size:0.85rem; font-weight:600; border:1px solid var(--border-light); background: var(--white); }
.gk-chip i{ width:8px; height:8px; border-radius:50%; display:inline-block; }
.gk-chip-lilac i{ background: var(--lilac);} .gk-chip-lilac{ color:#7e22ce; }
.gk-chip-orange i{ background: var(--orange);} .gk-chip-orange{ color:#c2410c; }
.gk-chip-blue i{ background: var(--blue);} .gk-chip-blue{ color:#1d4ed8; }
.gk-chip-pink i{ background: var(--pink);} .gk-chip-pink{ color:#be185d; }
.gk-chip-yellow i{ background: var(--yellow);} .gk-chip-yellow{ color:#a16207; }

/* Steps panel */
.gk-steps-panel{ background: var(--charcoal); border-radius:28px; padding: 54px clamp(18px,5vw,60px); color: var(--white); position:relative; overflow:hidden; }
.gk-steps-panel::before{ content:""; position:absolute; inset:0; background: radial-gradient(520px 320px at 88% -10%, rgba(74,222,128,0.18), transparent 60%); pointer-events:none; }
.gk-steps{ display:grid; grid-template-columns: repeat(4,1fr); gap:18px; position:relative; z-index:1; }
.gk-step{ background: rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); border-radius:18px; padding:22px 20px; }
.gk-step-num{ font-family: var(--display); font-weight:600; font-size:1.5rem; color: var(--mint); margin-bottom:12px; display:block; }
.gk-step h3{ font-size:0.96rem; font-weight:700; margin-bottom:8px; color:#FFFFFF; }
.gk-step p{ font-size:0.86rem; color: var(--cloud); line-height:1.55; }
.gk-step code{ background: rgba(255,255,255,0.09); padding:1px 6px; border-radius:5px; font-size:0.82em; font-family: ui-monospace, monospace; color: var(--mint); }

.gk-beta-note{ display:flex; gap:18px; align-items:flex-start; background: var(--mint-soft); border:1px solid var(--emerald-light); border-radius:20px; padding:28px 30px; margin-top:20px; }
.gk-beta-badge{ flex-shrink:0; width:42px; height:42px; border-radius:12px; background: var(--emerald); color:#FFFFFF; display:flex; align-items:center; justify-content:center; }
.gk-beta-badge svg{ stroke:#FFFFFF !important; }
.gk-beta-note h3{ font-family: var(--display); font-size:1.02rem; font-weight:600; margin-bottom:6px; }
.gk-beta-note p{ font-size:0.91rem; color: var(--slate); line-height:1.6; }

/* Footer */
.gk-footer{ border-top:1px solid var(--border-light); padding:42px 0 32px; background: var(--bg-light); }
.gk-foot-row{ display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; }
.gk-foot-brand{ display:flex; align-items:center; gap:9px; }
.gk-foot-brand span{ font-family: var(--display); font-weight:600; font-size:1.02rem; }
.gk-foot-credits{ font-size:0.84rem; color: var(--slate-faint); text-align:right; }
.gk-foot-credits a{ color: var(--slate); font-weight:600; border-bottom:1px solid var(--cloud); }
.gk-foot-credits a:hover{ color: var(--emerald-dark); border-color: var(--emerald-dark); }
.gk-foot-divider{ height:1px; background: var(--border-light); margin:26px 0 18px; }
.gk-foot-copy{ font-size:0.79rem; color: var(--cloud); text-align:center; }

@media (max-width: 880px){
  .gk-features{ grid-template-columns: repeat(2,1fr); }
  .gk-buckets{ grid-template-columns: repeat(2,1fr); }
  .gk-steps{ grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 560px){
  .gk-hero{ padding-top:52px; }
  .gk-logo{ width:168px; height:168px; }
  .gk-features{ grid-template-columns: 1fr; }
  .gk-buckets{ grid-template-columns: 1fr; }
  .gk-steps{ grid-template-columns: 1fr; }
  .gk-foot-row{ flex-direction:column; align-items:flex-start; }
  .gk-foot-credits{ text-align:left; }
  .gk-beta-note{ flex-direction:column; }
}
`;