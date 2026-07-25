import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/partners")({
  component: Partners,
});

const GROUPS: { title: string; brands: string[] }[] = [
  {
    title: "Building Materials & Finishes",
    brands: [
      "Tubao",
      "Dow",
      "Davies",
      "Boysen",
      "Xinyi Glass (XYG)",
      "Monalisa Tiles",
      "Dongpeng Ceramics",
      "Marco Polo Tiles",
      "Wood Solid",
      "Nature Flooring",
      "Anxin Flooring",
      "Power Dekor",
      "DTC",
    ],
  },
  {
    title: "Doors, Hardware & Fittings",
    brands: ["Kin Long", "Häfele", "Hettich", "Sogal", "Oppein", "Minfa Aluminum", "Feng Ming"],
  },
  {
    title: "Electrical & Appliances",
    brands: [
      "Schneider Electric",
      "Siemens",
      "Panasonic",
      "Mitsubishi Electric",
      "Daikin",
      "Gree",
      "NVC Lighting",
      "Pak Lighting",
      "Fotile",
      "Kohler",
      "TOTO",
      "HSGJJG",
      "Philflex",
      "Bull",
    ],
  },
  {
    title: "Steel, Cement & Structural",
    brands: ["SteelAsia", "Capitol Steel", "Pag-Asa Steel", "Atlanta Industries", "Eagle Cement", "Republic Cement"],
  },
];

function Partners() {
  return (
    <div>
      <PageHero
        eyebrow="Our Network"
        title="Strategic Partners & Suppliers"
        subtitle="We work with globally recognized and trusted brands to guarantee quality and reliability in every project."
      />

      <section className="mx-auto max-w-7xl space-y-14 px-6 py-20">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h2 className="mb-6 font-[var(--font-display)] text-2xl font-bold text-[#1c2024]">{g.title}</h2>
            <div className="flex flex-wrap gap-3">
              {g.brands.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-steel)] shadow-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#141618] py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[var(--font-display)] text-2xl font-bold sm:text-3xl">
            Backed by Our Own Industrial Chain
          </h2>
          <p className="mt-4 text-white/70">
            Beyond these partners, our in-house Glass Production Factory and Aluminum Alloy Processing Factory in the
            Philippines give us direct control over material quality, pricing, and delivery timelines &mdash;
            shortening every construction cycle.
          </p>
        </div>
      </section>
    </div>
  );
}
