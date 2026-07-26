import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Bilingual } from "@/lib/language";

export const Route = createFileRoute("/partners")({
  component: Partners,
});

const GROUPS: { en: string; zh: string; brands: string[] }[] = [
  {
    en: "Building Materials & Finishes",
    zh: "建材與裝修材料",
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
    en: "Doors, Hardware & Fittings",
    zh: "門類、五金與配件",
    brands: ["Kin Long", "Häfele", "Hettich", "Sogal", "Oppein", "Minfa Aluminum", "Feng Ming"],
  },
  {
    en: "Electrical & Appliances",
    zh: "電器與家電設備",
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
    en: "Steel, Cement & Structural",
    zh: "鋼材、水泥與結構材料",
    brands: ["SteelAsia", "Capitol Steel", "Pag-Asa Steel", "Atlanta Industries", "Eagle Cement", "Republic Cement"],
  },
];

function Partners() {
  return (
    <div>
      <PageHero
        eyebrow={{ en: "Our Network", zh: "合作網絡" }}
        title={{ en: "Strategic Partners & Suppliers", zh: "策略合作夥伴與供應商" }}
        subtitle={{
          en: "We work with globally recognized and trusted brands to guarantee quality and reliability in every project.",
          zh: "我們與全球知名可靠品牌合作，確保每個項目的品質與可靠性。",
        }}
      />

      <section className="mx-auto max-w-7xl space-y-14 px-6 py-20">
        {GROUPS.map((g) => (
          <div key={g.en}>
            <Bilingual as="h2" className="mb-6 font-[var(--font-display)] text-2xl font-bold text-[#1c2024]" en={g.en} zh={g.zh} />
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
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-2xl font-bold sm:text-3xl"
            en="Backed by Our Own Industrial Chain"
            zh="自有產業鏈支持"
          />
          <Bilingual
            as="p"
            className="mt-4 text-white/70"
            en="Beyond these partners, our in-house Glass Production Factory and Aluminum Alloy Processing Factory in the Philippines give us direct control over material quality, pricing, and delivery timelines — shortening every construction cycle."
            zh="除了這些合作夥伴，我們在菲律賓的自有玻璃生產工廠與鋁合金加工廠，讓我們能直接掌控材料品質、價格與交貨時程——縮短每個施工週期。"
          />
        </div>
      </section>
    </div>
  );
}
