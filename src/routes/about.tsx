import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, MapPin, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import hqRender from "@/assets/images/hq-render.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
});

const HISTORY = [
  {
    phase: "Phase 1",
    range: "2003 &ndash; 2012",
    title: "Foundation in China",
    desc: "A decade of accumulated experience and a portfolio of mature projects in China, setting the stage to look toward overseas markets.",
  },
  {
    phase: "Phase 2",
    range: "2013 &ndash; 2016",
    title: "Entering the Philippines",
    desc: "Hwa Lun's founders grounded the company at the grassroots level, blending advanced Chinese construction techniques with local Filipino architectural concepts.",
  },
  {
    phase: "Phase 3",
    range: "2017 &ndash; 2019",
    title: "Accumulation & Formation",
    desc: "With office fit-out as the leading service, the company expanded into residential renovation and curtain wall decoration, earning strong client trust.",
  },
  {
    phase: "Phase 4",
    range: "2020 &ndash; 2024",
    title: "Consolidation & Industrial Integration",
    desc: "Commercial construction became the core business, supported by hotel renovation and residential interior design, backed by an integrated local supply chain.",
  },
];

const CULTURE = [
  {
    icon: Sparkles,
    title: "Hwa Lun Spirit",
    desc: "Uphold integrity, foster harmony, embrace tolerance, and pursue profit with righteousness.",
  },
  {
    icon: Handshake,
    title: "Service Concept",
    desc: "Professional service and reliable assurance &mdash; pragmatic, efficient, and innovative. “Service has a beginning, but satisfaction knows no end.”",
  },
  {
    icon: Target,
    title: "Professionalism",
    desc: "Concept innovation, technical performance, and persistence &mdash; balanced offense and defense in every project.",
  },
  {
    icon: ShieldCheck,
    title: "Attitude",
    desc: "Work with dedication, handle matters with care, and bring joyful, human-centered service to the workplace.",
  },
  {
    icon: Users,
    title: "Team",
    desc: "Sincere cooperation, detailed management, and efficient learning. “There is no perfect individual, only a perfect team.”",
  },
];

const DEPARTMENTS = [
  "General Manager's Office",
  "Design Department",
  "Engineering Department",
  "Commercial Department",
  "Finance Department",
  "Cost Control Department",
  "Legal Department",
  "Soft Furnishing Department",
  "Human Resources Department",
  "Administration Department",
  "Warehouse Department",
  "Production Department",
];

const OFFICES = [
  {
    name: "Hwa Lun Manila Office",
    address: "Unit 2705, Bandong Tower, Binondo, Manila City",
  },
  {
    name: "Cavite Headquarters",
    address: "Advincula Avenue, Brgy. San Sebastian, Kawit, Cavite (under construction)",
  },
  {
    name: "Fujian Branch Office",
    address: "Fujian Haozhuang Construction Engineering Co., Ltd., Fujian, China",
  },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Hwa Lun Corporation"
        subtitle="华润建设集团 — building the pinnacle of dreams since 2003."
      />

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Overview</p>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024]">
            A Decade-Plus of General Contracting, Curtain Wall &amp; Interior Excellence
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--color-steel)]">
            Hwa Lun Corporation has grown into the leading enterprise in the Philippine renovation and decoration
            industry, built on a thorough understanding of each client's cultural background, lifestyle, and design
            preferences. Every project benefits from rigorous on-site construction techniques, strict management
            systems, comprehensive supervision, and thorough post-project follow-up &mdash; with no subcontracting or
            outsourcing, ensuring quality and reliability throughout.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-steel)]">
            The company adheres to the business philosophy of <strong>sincerity, professionalism, service, and
            innovation</strong>, and a service concept built on <strong>standards, efficiency, and humanization</strong>
            &mdash; always putting the customer's needs first, with integrity as its foundation.
          </p>
        </div>
        <img src={hqRender} alt="Hwa Lun headquarters render" className="rounded-2xl shadow-xl" />
      </section>

      {/* History */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Development History
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl">
              Two Decades of Growth
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {HISTORY.map((h) => (
              <div key={h.phase} className="glass rounded-2xl border border-black/5 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  {h.phase} &middot; <span dangerouslySetInnerHTML={{ __html: h.range }} />
                </p>
                <h3 className="mt-3 text-lg font-bold text-[#1c2024]">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Company Culture
          </p>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl">
            The Values That Guide Us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
              <div className="glow-red flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1c2024]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Organization
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
              A Fully Integrated Management Structure
            </h2>
            <p className="mt-4 text-white/70">
              Each project is staffed with an experienced project manager, technical lead, quality inspector, safety
              officer, and materials &amp; documentation controllers &mdash; backed by twelve specialized departments.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {DEPARTMENTS.map((d) => (
              <div key={d} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices & certifications */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Our Offices
            </p>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]">Where We Operate</h2>
            <div className="mt-6 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.name} className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  <div>
                    <p className="font-bold text-[#1c2024]">{o.name}</p>
                    <p className="text-sm text-[var(--color-steel)]">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Licensed &amp; Registered
            </p>
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]">Certifications</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Business License", "Tax Registration Certificate", "PCAB Qualification Certificate", "SEC Certificate"].map(
                (c) => (
                  <div key={c} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                    <Award className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                    <p className="text-sm font-semibold text-[#1c2024]">{c}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
