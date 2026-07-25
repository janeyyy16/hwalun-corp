import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, DoorOpen, Layers, PaintBucket, Wrench, Zap } from "lucide-react";
import heroImage from "@/assets/images/hq-aerial.jpeg";
import paragonImg from "@/assets/images/project-paragon-centre.jpeg";
import titanicImg from "@/assets/images/project-grand-titanic-tower.jpeg";
import somersetImg from "@/assets/images/project-dowel-somerset.jpeg";
import marinaImg from "@/assets/images/project-marina-bay.jpeg";

export const Route = createFileRoute("/")({
  component: Home,
});

const SERVICES = [
  { icon: Building2, title: "General Contracting", desc: "Civil, structural, and architectural works for warehouses, hotels, and residential towers." },
  { icon: PaintBucket, title: "Interior Fit-Out & Design", desc: "From model units to full clubhouse and hotel interiors, tailored to every brief." },
  { icon: Layers, title: "Curtain Wall Systems", desc: "Glass, aluminum panel, and stone curtain walls engineered for scale and durability." },
  { icon: Wrench, title: "Glass Production", desc: "In-house glass manufacturing for full control over quality and lead times." },
  { icon: DoorOpen, title: "Aluminum Doors & Windows", desc: "A 5,000 sqm processing facility producing precision aluminum alloy fittings." },
  { icon: Zap, title: "MEP Installation", desc: "Mechanical, electrical, and auxiliary works delivered in step with construction." },
];

const PROJECTS = [
  { img: paragonImg, name: "Paragon Centre", height: "177m" },
  { img: titanicImg, name: "Grand Titanic Commercial Tower", height: "173m" },
  { img: somersetImg, name: "Dowel Somerset Residence Tower", height: "146m" },
  { img: marinaImg, name: "Marina Bay South Shore", height: "125m" },
];

const ADVANTAGES = [
  { title: "Forward-Thinking Design Team", desc: "A design team that stays ahead of trends while tailoring every project to local culture and client needs." },
  { title: "Mature Construction Management", desc: "A unified China–Philippines management structure that keeps quality, cost, and schedule on track." },
  { title: "Efficient Logistics Network", desc: "Strategic partnerships with major manufacturers guarantee material quality and delivery timelines." },
  { title: "Established Local Supply Chain", desc: "In-house aluminum, glass, and furniture factories in the Philippines shorten every construction cycle." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImage} alt="Hwa Lun Corporation headquarters" className="h-[640px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="glow-red pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[900px] -translate-x-1/2" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Est. 2003 &middot; Philippines &middot; China &middot; Malaysia &middot; Cambodia
            </p>
            <h1 className="max-w-2xl font-[var(--font-display)] text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
              Strive for Excellence, Building the Pinnacle of Dreams
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              A large-scale integrated construction company specializing in general contracting, interior fit-out,
              and curtain wall decoration &mdash; delivering private and public building projects across Southeast Asia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="glass rounded-full px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center sm:grid-cols-4">
          {[
            ["20+", "Years of Experience"],
            ["4", "Countries Served"],
            ["177m", "Tallest Landmark Delivered"],
            ["40+", "Trusted Global Partners"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-primary)]">{stat}</p>
              <p className="mt-1 text-sm text-[var(--color-steel)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">What We Do</p>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl">
            Full-Scope Construction Services
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-2xl border border-black/5 p-7 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="glow-red flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1c2024]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="text-sm font-bold text-[var(--color-primary)] hover:underline">
            View All Services &rarr;
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Portfolio</p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">Landmark Projects</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">{p.height}</p>
                  <p className="mt-1 font-semibold leading-tight">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Why Hwa Lun</p>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl">
            Built on Four Core Advantages
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {ADVANTAGES.map((a, i) => (
            <div key={a.title} className="flex gap-5">
              <span className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-primary)]/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#1c2024]">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-steel)]">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-16 text-center text-white">
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">Ready to Build With Us?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Tell us about your project and our team will get back to you with a tailored proposal.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--color-primary)] shadow-lg transition-transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
