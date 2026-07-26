import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Wind } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Bilingual } from "@/lib/language";
import interiorImg from "@/assets/images/interior-living-room.jpeg";
import titanicImg from "@/assets/images/project-grand-titanic-tower.jpeg";
import marinaImg from "@/assets/images/project-marina-bay.jpeg";

export const Route = createFileRoute("/services")({
  component: Services,
});

const PILLARS = [
  {
    img: marinaImg,
    en: {
      title: "General Contracting",
      desc: "End-to-end civil, structural, and architectural works, plus mechanical, electrical, plumbing, sanitary, and fire protection (MEPF) installation.",
      items: ["Warehouses", "Luxury Residential Buildings", "Luxury Hotels", "Villas", "Showrooms"],
    },
    zh: {
      title: "總承包工程",
      desc: "涵蓋土木、結構與建築工程，並提供機電、給排水、衛生及消防（MEPF）安裝服務。",
      items: ["倉庫", "豪華住宅大樓", "豪華酒店", "別墅", "展示中心"],
    },
  },
  {
    img: interiorImg,
    en: {
      title: "Interior Fit-Out & Design",
      desc: "Full interior fit-out and soft furnishing design, from single model units to complete hotels, malls, and clubhouses.",
      items: ["Fully-Furnished Rooms", "Model Units", "Villas", "Hotels", "Offices", "Malls", "KTV & Entertainment", "Clubhouses", "Showrooms"],
    },
    zh: {
      title: "室內裝修與設計",
      desc: "提供完整室內裝修與軟裝設計，從單一樣品屋到整體酒店、商場及會所。",
      items: ["精裝套房", "樣品屋", "別墅", "酒店", "辦公室", "商場", "KTV娛樂場所", "會所", "展示中心"],
    },
  },
  {
    img: titanicImg,
    en: {
      title: "Curtain Wall & Facade Systems",
      desc: "Engineered glass, aluminum panel, and stone curtain walls, along with doors, windows, and metal railing systems.",
      items: ["Glass Curtain Wall", "Aluminum Panel Curtain Wall", "Stone Curtain Wall", "Canopies", "Aluminum Alloy Doors & Windows", "Glass & Metal Railings", "Metal Grilles", "Electric Doors & Windows"],
    },
    zh: {
      title: "幕牆與外牆系統",
      desc: "提供工程化玻璃、鋁板與石材幕牆，並包含門窗與金屬欄杆系統。",
      items: ["玻璃幕牆", "鋁板幕牆", "石材幕牆", "雨棚", "鋁合金門窗", "玻璃與金屬欄杆", "金屬格柵", "電動門窗"],
    },
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow={{ en: "What We Do", zh: "我們的業務" }}
        title={{ en: "Our Services", zh: "服務項目" }}
        subtitle={{
          en: "From general contracting to in-house glass and aluminum manufacturing — a fully integrated construction offering.",
          zh: "從總承包工程到自有玻璃與鋁材製造——提供全方位整合建築服務。",
        }}
      />

      {/* Pillars */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        {PILLARS.map((p, i) => (
          <div
            key={p.en.title}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <img src={p.img} alt={p.en.title} className="rounded-2xl shadow-xl" />
            <div>
              <Bilingual as="h2" className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024]" en={p.en.title} zh={p.zh.title} />
              <Bilingual as="p" className="mt-4 leading-relaxed text-[var(--color-steel)]" en={p.en.desc} zh={p.zh.desc} />
              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {p.en.items.map((it, idx) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-[#1c2024]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                    <Bilingual en={it} zh={p.zh.items[idx]} />
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
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="In-House Manufacturing"
              zh="自有製造工廠"
            />
            <Bilingual
              as="h2"
              className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl"
              en="Our Own Supply Chain, Start to Finish"
              zh="從頭到尾的自有供應鏈"
            />
            <Bilingual
              as="p"
              className="mt-4 text-white/70"
              en="A well-established downstream supply chain, with warehousing and transportation capability, gives us cost advantages and maximum control over quality and schedule."
              zh="完善的下游供應鏈，具備倉儲與運輸能力，讓我們在成本上更具優勢，並能全面掌控品質與工期。"
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Bilingual as="h3" className="text-xl font-bold" en="Glass Production Factory" zh="玻璃生產工廠" />
              <Bilingual
                as="p"
                className="mt-3 text-sm leading-relaxed text-white/70"
                en="A dedicated glass production and processing plant that keeps material quality, pricing, and lead times under our direct control."
                zh="專屬玻璃生產加工廠，讓材料品質、價格與交期完全在我們掌控之中。"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Bilingual as="h3" className="text-xl font-bold" en="Aluminum Alloy Processing Factory" zh="鋁合金加工廠" />
              <Bilingual
                as="p"
                className="mt-3 text-sm leading-relaxed text-white/70"
                en="A 5,000-square-meter facility equipped with top-tier aluminum alloy processing equipment for doors, windows, and curtain wall components."
                zh="佔地5,000平方公尺，配備頂級鋁合金加工設備，生產門窗與幕牆構件。"
              />
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
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Technology"
              zh="技術優勢"
            />
            <Bilingual
              as="h2"
              className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]"
              en='Ventilated Double-Skin Facade — "Let Buildings Breathe"'
              zh="通風雙層幕牆——「讓建築呼吸」"
            />
            <Bilingual
              as="p"
              className="mt-3 leading-relaxed text-[var(--color-steel)]"
              en="In warm climates, motorized louvers at the air inlets and outlets of our curtain wall cavities work with the chimney effect to circulate air rapidly, carrying away solar radiant heat. Combined with external shading, this forms a thermal barrier that keeps outdoor heat from reaching the interior — a healthier, more energy-efficient building envelope."
              zh="在炎熱氣候下，幕牆空腔進出風口的電動百葉配合煙囪效應，快速循環空氣、帶走太陽輻射熱。搭配外部遮陽，形成隔熱屏障，阻絕室外熱氣進入室內——打造更健康、更節能的建築外殼。"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-16 text-center text-white">
        <Bilingual
          as="h2"
          className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl"
          en="Have a Project in Mind?"
          zh="有項目構想嗎？"
        />
        <Bilingual
          as="p"
          className="mx-auto mt-3 max-w-xl text-white/85"
          en="Speak with our team about your general contracting, fit-out, or curtain wall requirements."
          zh="與我們的團隊討論您的總承包、裝修或幕牆需求。"
        />
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--color-primary)] shadow-lg transition-transform hover:scale-105"
        >
          <Bilingual en="Request a Consultation" zh="立即預約諮詢" subClassName="opacity-70" />
        </Link>
      </section>
    </div>
  );
}
