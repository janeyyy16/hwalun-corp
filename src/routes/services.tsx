import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Wind } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import interiorImg from "@/assets/images/interior-living-room.jpeg";
import titanicImg from "@/assets/images/project-grand-titanic-tower.jpeg";
import marinaImg from "@/assets/images/project-marina-bay.jpeg";

export const Route = createFileRoute("/services")({
  component: Services,
});

const PILLARS = [
  {
    title: "General Contracting",
    img: marinaImg,
    desc: "End-to-end civil, structural, and architectural works, plus mechanical, electrical, plumbing, sanitary, and fire protection (MEPF) installation.",
    items: ["Warehouses", "Luxury Residential Buildings", "Luxury Hotels", "Villas", "Showrooms"],
  },
  {
    title: "Interior Fit-Out & Design",
    img: interiorImg,
    desc: "Full interior fit-out and soft furnishing design, from single model units to complete hotels, malls, and clubhouses.",
    items: ["Fully-Furnished Rooms", "Model Units", "Villas", "Hotels", "Offices", "Malls", "KTV & Entertainment", "Clubhouses", "Showrooms"],
  },
  {
    title: "Curtain Wall & Facade Systems",
    img: titanicImg,
    desc: "Engineered glass, aluminum panel, and stone curtain walls, along with doors, windows, and metal railing systems.",
    items: ["Glass Curtain Wall", "Aluminum Panel Curtain Wall", "Stone Curtain Wall", "Canopies", "Aluminum Alloy Doors & Windows", "Glass & Metal Railings", "Metal Grilles", "Electric Doors & Windows"],
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From general contracting to in-house glass and aluminum manufacturing — a fully integrated construction offering."
      />

      {/* Pillars */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        {PILLARS.map((p, i) => (
          <div key={p.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={p.img} alt={p.title} className="rounded-2xl shadow-xl" />
            <div>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024]">{p.title}</h2>
              <p className="mt-4 leading-relaxed text-[var(--color-steel)]">{p.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-[#1c2024]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Manufacturing */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              In-House Manufacturing
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
              Our Own Supply Chain, Start to Finish
            </h2>
            <p className="mt-4 text-white/70">
              A well-established downstream supply chain, with warehousing and transportation capability, gives us
              cost advantages and maximum control over quality and schedule.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">Glass Production Factory</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A dedicated glass production and processing plant that keeps material quality, pricing, and lead
                times under our direct control.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">Aluminum Alloy Processing Factory</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A 5,000-square-meter facility equipped with top-tier aluminum alloy processing equipment for doors,
                windows, and curtain wall components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilated facade tech highlight */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass grid gap-10 rounded-3xl border border-black/5 p-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="glow-red flex h-16 w-16 items-center justify-center rounded-2xl">
            <Wind className="h-8 w-8 text-[var(--color-primary)]" />
          </div>
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Technology
            </p>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]">
              Ventilated Double-Skin Facade &mdash; "Let Buildings Breathe"
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-steel)]">
              In warm climates, motorized louvers at the air inlets and outlets of our curtain wall cavities work with
              the chimney effect to circulate air rapidly, carrying away solar radiant heat. Combined with external
              shading, this forms a thermal barrier that keeps outdoor heat from reaching the interior &mdash; a
              healthier, more energy-efficient building envelope.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-16 text-center text-white">
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">Have a Project in Mind?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Speak with our team about your general contracting, fit-out, or curtain wall requirements.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--color-primary)] shadow-lg transition-transform hover:scale-105"
        >
          Request a Consultation
        </Link>
      </section>
    </div>
  );
}
