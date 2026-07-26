import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, MapPin, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Bilingual } from "@/lib/language";
import hqRender from "@/assets/images/hq-render.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
});

const HISTORY = [
  {
    phase: "Phase 1",
    phaseZh: "第一階段",
    range: "2003 &ndash; 2012",
    en: { title: "Foundation in China", desc: "A decade of accumulated experience and a portfolio of mature projects in China, setting the stage to look toward overseas markets." },
    zh: { title: "中國奠基期", desc: "十年深耕累積經驗，於中國建立成熟項目實績，為拓展海外市場奠定基礎。" },
  },
  {
    phase: "Phase 2",
    phaseZh: "第二階段",
    range: "2013 &ndash; 2016",
    en: { title: "Entering the Philippines", desc: "Hwa Lun's founders grounded the company at the grassroots level, blending advanced Chinese construction techniques with local Filipino architectural concepts." },
    zh: { title: "進軍菲律賓", desc: "華龍創辦人深入基層扎根發展，融合中國先進建築技術與菲律賓當地建築理念。" },
  },
  {
    phase: "Phase 3",
    phaseZh: "第三階段",
    range: "2017 &ndash; 2019",
    en: { title: "Accumulation & Formation", desc: "With office fit-out as the leading service, the company expanded into residential renovation and curtain wall decoration, earning strong client trust." },
    zh: { title: "積累與成形", desc: "以辦公室裝修為主力業務，拓展至住宅翻新與幕牆裝飾，贏得客戶高度信賴。" },
  },
  {
    phase: "Phase 4",
    phaseZh: "第四階段",
    range: "2020 &ndash; 2024",
    en: { title: "Consolidation & Industrial Integration", desc: "Commercial construction became the core business, supported by hotel renovation and residential interior design, backed by an integrated local supply chain." },
    zh: { title: "整合與產業鏈完善", desc: "商業建築成為核心業務，並以酒店翻新與住宅室內設計為輔，並有完整在地供應鏈支持。" },
  },
];

const CULTURE = [
  {
    icon: Sparkles,
    en: { title: "Hwa Lun Spirit", desc: "Uphold integrity, foster harmony, embrace tolerance, and pursue profit with righteousness." },
    zh: { title: "華龍精神", desc: "堅守誠信、崇尚和諧、包容並蓄，取財有道。" },
  },
  {
    icon: Handshake,
    en: { title: "Service Concept", desc: "Professional service and reliable assurance — pragmatic, efficient, and innovative. “Service has a beginning, but satisfaction knows no end.”" },
    zh: { title: "服務理念", desc: "專業服務、可靠保證——務實、高效、創新。「服務有始，滿意無終。」" },
  },
  {
    icon: Target,
    en: { title: "Professionalism", desc: "Concept innovation, technical performance, and persistence — balanced offense and defense in every project." },
    zh: { title: "專業精神", desc: "理念創新、技術實力、堅持不懈——每個項目皆攻守兼備。" },
  },
  {
    icon: ShieldCheck,
    en: { title: "Attitude", desc: "Work with dedication, handle matters with care, and bring joyful, human-centered service to the workplace." },
    zh: { title: "工作態度", desc: "用心工作、細心處事，將愉悅與人性化服務帶入職場。" },
  },
  {
    icon: Users,
    en: { title: "Team", desc: "Sincere cooperation, detailed management, and efficient learning. “There is no perfect individual, only a perfect team.”" },
    zh: { title: "團隊精神", desc: "真誠合作、精細管理、高效學習。「沒有完美的個人，只有完美的團隊。」" },
  },
];

const DEPARTMENTS = [
  { en: "General Manager's Office", zh: "總經理辦公室" },
  { en: "Design Department", zh: "設計部" },
  { en: "Engineering Department", zh: "工程部" },
  { en: "Commercial Department", zh: "商務部" },
  { en: "Finance Department", zh: "財務部" },
  { en: "Cost Control Department", zh: "成本控制部" },
  { en: "Legal Department", zh: "法務部" },
  { en: "Soft Furnishing Department", zh: "軟裝部" },
  { en: "Human Resources Department", zh: "人力資源部" },
  { en: "Administration Department", zh: "行政部" },
  { en: "Warehouse Department", zh: "倉庫部" },
  { en: "Production Department", zh: "生產部" },
];

const OFFICES = [
  { en: "Hwa Lun Manila Office", zh: "華龍馬尼拉辦事處", address: "Unit 2705, Bandong Tower, Binondo, Manila City" },
  { en: "Cavite Headquarters", zh: "甲米地總部", address: "Advincula Avenue, Brgy. San Sebastian, Kawit, Cavite (under construction)" },
  { en: "Fujian Branch Office", zh: "福建分公司", address: "Fujian Haozhuang Construction Engineering Co., Ltd., Fujian, China" },
];

const CERTIFICATIONS = [
  { en: "Business License", zh: "營業執照" },
  { en: "Tax Registration Certificate", zh: "稅務登記證" },
  { en: "PCAB Qualification Certificate", zh: "PCAB資格證書" },
  { en: "SEC Certificate", zh: "證券交易委員會登記證" },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow={{ en: "About Us", zh: "關於我們" }}
        title={{ en: "Hwa Lun Corporation", zh: "華龍建設集團" }}
        subtitle={{ en: "华润建设集团 — building the pinnacle of dreams since 2003.", zh: "自2003年起，築夢巔峰。" }}
      />

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <Bilingual
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            en="Overview"
            zh="公司簡介"
          />
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024]"
            en="A Decade-Plus of General Contracting, Curtain Wall & Interior Excellence"
            zh="深耕十餘年的總承包、幕牆與室內裝修專業"
          />
          <Bilingual
            as="p"
            className="mt-5 leading-relaxed text-[var(--color-steel)]"
            en="Hwa Lun Corporation has grown into the leading enterprise in the Philippine renovation and decoration industry, built on a thorough understanding of each client's cultural background, lifestyle, and design preferences. Every project benefits from rigorous on-site construction techniques, strict management systems, comprehensive supervision, and thorough post-project follow-up — with no subcontracting or outsourcing, ensuring quality and reliability throughout."
            zh="華龍建設集團已成長為菲律賓翻新裝修行業的領導企業，深入了解每位客戶的文化背景、生活方式與設計偏好。每個項目皆採用嚴謹的現場施工技術、嚴格的管理制度、全面監督及完善的後續追蹤——不轉包、不外判，全程確保品質與可靠性。"
          />
          <p className="mt-4 leading-relaxed text-[var(--color-steel)]">
            <Bilingual
              en={
                <>
                  The company adheres to the business philosophy of <strong>sincerity, professionalism, service, and
                  innovation</strong>, and a service concept built on <strong>standards, efficiency, and humanization</strong>
                  — always putting the customer's needs first, with integrity as its foundation.
                </>
              }
              zh={
                <>
                  公司秉持<strong>誠信、專業、服務、創新</strong>的經營理念，以及建立在<strong>標準化、高效率、人性化</strong>
                  之上的服務理念——始終以客戶需求為先，並以誠信為根本。
                </>
              }
            />
          </p>
        </div>
        <img src={hqRender} alt="Hwa Lun headquarters render" className="rounded-2xl shadow-xl" />
      </section>

      {/* History */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Development History"
              zh="發展歷程"
            />
            <Bilingual
              as="h2"
              className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl"
              en="Two Decades of Growth"
              zh="二十年成長歷程"
            />
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {HISTORY.map((h) => (
              <div key={h.phase} className="glass rounded-2xl border border-black/5 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  <Bilingual
                    en={
                      <>
                        {h.phase} &middot; <span dangerouslySetInnerHTML={{ __html: h.range }} />
                      </>
                    }
                    zh={
                      <>
                        {h.phaseZh} &middot; <span dangerouslySetInnerHTML={{ __html: h.range }} />
                      </>
                    }
                  />
                </p>
                <Bilingual as="h3" className="mt-3 text-lg font-bold text-[#1c2024]" en={h.en.title} zh={h.zh.title} />
                <Bilingual
                  as="p"
                  className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]"
                  en={h.en.desc}
                  zh={h.zh.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Bilingual
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            en="Company Culture"
            zh="企業文化"
          />
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl"
            en="The Values That Guide Us"
            zh="引領我們的核心價值"
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CULTURE.map(({ icon: Icon, en, zh }) => (
            <div key={en.title} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
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
      </section>

      {/* Departments */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Organization"
              zh="組織架構"
            />
            <Bilingual
              as="h2"
              className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl"
              en="A Fully Integrated Management Structure"
              zh="完整整合的管理架構"
            />
            <Bilingual
              as="p"
              className="mt-4 text-white/70"
              en="Each project is staffed with an experienced project manager, technical lead, quality inspector, safety officer, and materials & documentation controllers — backed by twelve specialized departments."
              zh="每個項目皆配備經驗豐富的項目經理、技術負責人、品質檢驗員、安全主任及物料文件管控人員——並由十二個專業部門提供支持。"
            />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {DEPARTMENTS.map((d) => (
              <div key={d.en} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium">
                <Bilingual en={d.en} zh={d.zh} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices & certifications */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Our Offices"
              zh="據點分佈"
            />
            <Bilingual as="h2" className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]" en="Where We Operate" zh="營運據點" />
            <div className="mt-6 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.en} className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  <div>
                    <Bilingual as="p" className="font-bold text-[#1c2024]" en={o.en} zh={o.zh} />
                    <p className="text-sm text-[var(--color-steel)]">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Bilingual
              as="p"
              className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              en="Licensed & Registered"
              zh="合法登記註冊"
            />
            <Bilingual as="h2" className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]" en="Certifications" zh="相關證照" />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map((c) => (
                <div key={c.en} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                  <Award className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  <Bilingual as="p" className="text-sm font-semibold text-[#1c2024]" en={c.en} zh={c.zh} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
