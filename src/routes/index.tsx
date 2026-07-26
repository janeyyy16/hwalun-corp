import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, DoorOpen, Layers, PaintBucket, Wrench, Zap } from "lucide-react";
import heroImage from "@/assets/images/hq-aerial.jpeg";
import paragonImg from "@/assets/images/project-paragon-centre.jpeg";
import titanicImg from "@/assets/images/project-grand-titanic-tower.jpeg";
import somersetImg from "@/assets/images/project-dowel-somerset.jpeg";
import marinaImg from "@/assets/images/project-marina-bay.jpeg";
import { Bilingual } from "@/lib/language";

export const Route = createFileRoute("/")({
  component: Home,
});

const SERVICES = [
  {
    icon: Building2,
    en: { title: "General Contracting", desc: "Civil, structural, and architectural works for warehouses, hotels, and residential towers." },
    zh: { title: "總承包工程", desc: "為倉庫、酒店及住宅大樓提供土木、結構與建築工程服務。" },
  },
  {
    icon: PaintBucket,
    en: { title: "Interior Fit-Out & Design", desc: "From model units to full clubhouse and hotel interiors, tailored to every brief." },
    zh: { title: "室內裝修與設計", desc: "從樣品屋到會所、酒店整體室內設計，依需求量身打造。" },
  },
  {
    icon: Layers,
    en: { title: "Curtain Wall Systems", desc: "Glass, aluminum panel, and stone curtain walls engineered for scale and durability." },
    zh: { title: "幕牆系統工程", desc: "玻璃、鋁板與石材幕牆工程，兼顧規模與耐久性。" },
  },
  {
    icon: Wrench,
    en: { title: "Glass Production", desc: "In-house glass manufacturing for full control over quality and lead times." },
    zh: { title: "玻璃生產製造", desc: "自有玻璃生產工廠，全面掌控品質與交期。" },
  },
  {
    icon: DoorOpen,
    en: { title: "Aluminum Doors & Windows", desc: "A 5,000 sqm processing facility producing precision aluminum alloy fittings." },
    zh: { title: "鋁合金門窗", desc: "5,000平方公尺加工廠，生產精密鋁合金構件。" },
  },
  {
    icon: Zap,
    en: { title: "MEP Installation", desc: "Mechanical, electrical, and auxiliary works delivered in step with construction." },
    zh: { title: "機電安裝工程", desc: "機械、電氣及配套工程與施工進度同步推進。" },
  },
];

const PROJECTS = [
  { img: paragonImg, en: "Paragon Centre", zh: "柏樂中心", height: "177m" },
  { img: titanicImg, en: "Grand Titanic Commercial Tower", zh: "泰坦尼克商業大樓", height: "173m" },
  { img: somersetImg, en: "Dowel Somerset Residence Tower", zh: "杜威薩默塞特住宅大樓", height: "146m" },
  { img: marinaImg, en: "Marina Bay South Shore", zh: "濱海灣南岸", height: "125m" },
];

const ADVANTAGES = [
  {
    en: { title: "Forward-Thinking Design Team", desc: "A design team that stays ahead of trends while tailoring every project to local culture and client needs." },
    zh: { title: "前瞻設計團隊", desc: "掌握潮流趨勢，並依當地文化與客戶需求量身規劃每個項目。" },
  },
  {
    en: { title: "Mature Construction Management", desc: "A unified China–Philippines management structure that keeps quality, cost, and schedule on track." },
    zh: { title: "成熟施工管理", desc: "中菲一體化管理架構，全面掌控品質、成本與工期。" },
  },
  {
    en: { title: "Efficient Logistics Network", desc: "Strategic partnerships with major manufacturers guarantee material quality and delivery timelines." },
    zh: { title: "高效物流網絡", desc: "與主要製造商策略合作，確保材料品質與交貨時程。" },
  },
  {
    en: { title: "Established Local Supply Chain", desc: "In-house aluminum, glass, and furniture factories in the Philippines shorten every construction cycle." },
    zh: { title: "在地供應鏈完備", desc: "菲律賓當地自有鋁材、玻璃與傢俱工廠，縮短每個施工週期。" },
  },
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
            <Bilingual
              as="h1"
              className="max-w-2xl font-[var(--font-display)] text-5xl font-bold leading-[1.05] text-white sm:text-6xl"
              en="Strive for Excellence, Building the Pinnacle of Dreams"
              zh="精益求精，築夢巔峰"
            />
            <Bilingual
              as="p"
              className="mt-6 max-w-xl text-lg text-white/80"
              en="A large-scale integrated construction company specializing in general contracting, interior fit-out, and curtain wall decoration — delivering private and public building projects across Southeast Asia."
              zh="大型綜合性建築企業，專精總承包工程、室內裝修與幕牆裝飾，於東南亞各地承建公私營建築項目。"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                <Bilingual en="Explore Our Services" zh="探索服務項目" subClassName="opacity-80" />
              </Link>
              <Link
                to="/contact"
                className="glass rounded-full px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                <Bilingual en="Contact Us" zh="聯絡我們" subClassName="opacity-80" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center sm:grid-cols-4">
          {[
            ["20+", "Years of Experience", "年經驗"],
            ["4", "Countries Served", "服務國家"],
            ["177m", "Tallest Landmark Delivered", "最高建築紀錄"],
            ["40+", "Trusted Global Partners", "全球合作夥伴"],
          ].map(([stat, labelEn, labelZh]) => (
            <div key={labelEn}>
              <p className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-primary)]">{stat}</p>
              <Bilingual as="p" className="mt-1 text-sm text-[var(--color-steel)]" en={labelEn} zh={labelZh} />
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Bilingual
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            en="What We Do"
            zh="我們的業務"
          />
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl"
            en="Full-Scope Construction Services"
            zh="全方位建築服務"
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, en, zh }) => (
            <div
              key={en.title}
              className="glass rounded-2xl border border-black/5 p-7 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="glow-red flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <Bilingual as="h3" className="mt-5 text-lg font-bold text-[#1c2024]" en={en.title} zh={zh.title} />
              <Bilingual
                as="p"
                className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]"
                en={en.desc}
                zh={zh.desc}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="text-sm font-bold text-[var(--color-primary)] hover:underline">
            <Bilingual en="View All Services →" zh="查看所有服務 →" />
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Portfolio"
              zh="項目實績"
            />
            <Bilingual
              as="h2"
              className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl"
              en="Landmark Projects"
              zh="地標建築項目"
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p) => (
              <div key={p.en} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.en}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">{p.height}</p>
                  <Bilingual as="p" className="mt-1 font-semibold leading-tight" en={p.en} zh={p.zh} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Bilingual
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            en="Why Hwa Lun"
            zh="為何選擇華龍"
          />
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl"
            en="Built on Four Core Advantages"
            zh="立基於四大核心優勢"
          />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {ADVANTAGES.map((a, i) => (
            <div key={a.en.title} className="flex gap-5">
              <span className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-primary)]/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <Bilingual as="h3" className="text-lg font-bold text-[#1c2024]" en={a.en.title} zh={a.zh.title} />
                <Bilingual
                  as="p"
                  className="mt-1.5 text-sm leading-relaxed text-[var(--color-steel)]"
                  en={a.en.desc}
                  zh={a.zh.desc}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-16 text-center text-white">
        <Bilingual
          as="h2"
          className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl"
          en="Ready to Build With Us?"
          zh="準備好與我們攜手打造了嗎？"
        />
        <Bilingual
          as="p"
          className="mx-auto mt-3 max-w-xl text-white/85"
          en="Tell us about your project and our team will get back to you with a tailored proposal."
          zh="告訴我們您的項目需求，我們的團隊將為您量身提供提案。"
        />
        <Link
          to="/contact"
          className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--color-primary)] shadow-lg transition-transform hover:scale-105"
        >
          <Bilingual en="Get in Touch" zh="立即聯絡" subClassName="opacity-70" />
        </Link>
      </section>
    </div>
  );
}
