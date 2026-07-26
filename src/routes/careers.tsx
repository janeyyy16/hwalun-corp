import { createFileRoute } from "@tanstack/react-router";
import { Globe2, GraduationCap, Mail, TrendingUp } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { supabase } from "@/lib/supabase";
import { Bilingual, useLanguage } from "@/lib/language";

export const Route = createFileRoute("/careers")({
  component: Careers,
});

const REASONS = [
  {
    icon: TrendingUp,
    en: { title: "Growth Across Four Countries", desc: "From the Philippines to China, Malaysia, and Cambodia — build a career with regional reach." },
    zh: { title: "跨足四國的成長機會", desc: "從菲律賓到中國、馬來西亞及柬埔寨——打造具區域視野的職涯發展。" },
  },
  {
    icon: GraduationCap,
    en: { title: "Learn From Experienced Teams", desc: "Work alongside senior technical personnel and project managers with decades of combined experience." },
    zh: { title: "向資深團隊學習", desc: "與擁有數十年經驗的資深技術人員及項目經理並肩工作。" },
  },
  {
    icon: Globe2,
    en: { title: "Work on Landmark Projects", desc: "Contribute to towers, hotels, and commercial developments that shape city skylines." },
    zh: { title: "參與地標建築項目", desc: "共同打造塑造城市天際線的大樓、酒店與商業開發項目。" },
  },
];

const DEPARTMENTS = [
  { en: "Design", zh: "設計部" },
  { en: "Engineering", zh: "工程部" },
  { en: "Commercial", zh: "商務部" },
  { en: "Finance", zh: "財務部" },
  { en: "Cost Control", zh: "成本控制部" },
  { en: "Legal", zh: "法務部" },
  { en: "Soft Furnishing", zh: "軟裝部" },
  { en: "Human Resources", zh: "人力資源部" },
  { en: "Administration", zh: "行政部" },
  { en: "Warehouse", zh: "倉庫部" },
  { en: "Production", zh: "生產部" },
];

type SubmitState = "idle" | "sending" | "sent" | "error";

function Careers() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const { language } = useLanguage();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const department = form.get("department") as string;
    const message = form.get("message") as string;
    const resume = form.get("resume") as File;

    setStatus("sending");

    const resumePath = `${crypto.randomUUID()}-${resume.name}`;
    const { error: uploadError } = await supabase.storage.from("resumes").upload(resumePath, resume);
    if (uploadError) {
      setStatus("error");
      return;
    }

    const { error: insertError } = await supabase
      .from("career_applications")
      .insert({ name, email, department, message, resume_path: resumePath });
    if (insertError) {
      setStatus("error");
      return;
    }

    formEl.reset();
    setStatus("sent");
  }

  return (
    <div>
      <PageHero
        eyebrow={{ en: "Careers", zh: "招聘職缺" }}
        title={{ en: "Build Your Career With Us", zh: "與我們共創職涯" }}
        subtitle={{
          en: "Join a team that has spent two decades turning ambitious designs into finished landmarks.",
          zh: "加入一個用二十年時間，將宏大設計化為地標建築的團隊。",
        }}
      />

      {/* Why join */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Bilingual
            as="p"
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            en="Why Join Hwa Lun"
            zh="為何加入華龍"
          />
          <Bilingual
            as="h2"
            className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl"
            en="A Team, Not Just a Workplace"
            zh="不僅是職場，更是團隊"
          />
          <Bilingual
            as="p"
            className="mt-4 text-[var(--color-steel)]"
            en={'"There is no perfect individual, only a perfect team." We believe in sincere cooperation, detailed management, and efficient learning — and we bring joyful, human-centered service into everything we build.'}
            zh="「沒有完美的個人，只有完美的團隊。」我們相信真誠合作、精細管理與高效學習——並將愉悅與人性化服務帶入我們建造的每一項事物。"
          />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, en, zh }) => (
            <div key={en.title} className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm">
              <div className="glow-red mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <Bilingual as="h3" className="mt-5 text-lg font-bold text-[#1c2024]" en={en.title} zh={zh.title} />
              <Bilingual as="p" className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]" en={en.desc} zh={zh.desc} />
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
              en="Where You Could Fit"
              zh="您適合的崗位"
            />
            <Bilingual as="h2" className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl" en="Departments" zh="部門一覽" />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {DEPARTMENTS.map((d) => (
              <span key={d.en} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium">
                <Bilingual en={d.en} zh={d.zh} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Openings / CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Bilingual
          as="p"
          className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
          en="Current Openings"
          zh="目前職缺"
        />
        <Bilingual
          as="h2"
          className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]"
          en="No specific openings are posted right now"
          zh="目前暫無公告特定職缺"
        />
        <Bilingual
          as="p"
          className="mt-4 leading-relaxed text-[var(--color-steel)]"
          en="We're always glad to hear from experienced professionals across design, engineering, commercial, finance, and construction management. Send us your resume and we'll reach out when an opportunity matching your background comes up."
          zh="我們始終歡迎設計、工程、商務、財務及施工管理等領域的資深專業人士。歡迎寄送履歷，當有符合您背景的機會時，我們將主動與您聯繫。"
        />
        <a
          href="mailto:hwalun168@gmail.com?subject=Career%20Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" />
          <Bilingual en="Send Your Resume" zh="寄送履歷" subClassName="opacity-80" />
        </a>
      </section>

      {/* Application form */}
      <section className="mx-auto max-w-2xl px-6 pb-20">
        <div className="glass rounded-2xl border border-black/5 p-8 shadow-sm">
          <Bilingual as="h3" className="text-xl font-bold text-[#1c2024]" en="Or Apply Directly" zh="或直接線上申請" />
          <Bilingual
            as="p"
            className="mt-1 text-sm text-[var(--color-steel)]"
            en="Submit your details and resume, and our HR team will review it."
            zh="請提交您的資料與履歷，我們的人資團隊將進行審核。"
          />
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">
                <Bilingual en="Name" zh="姓名" />
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">
                <Bilingual en="Email" zh="電子郵件" />
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">
                <Bilingual en="Department" zh="應徵部門" />
              </label>
              <select
                name="department"
                required
                defaultValue=""
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              >
                <option value="" disabled>
                  {language === "en" ? "Select a department" : "請選擇部門"}
                </option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.en} value={d.en}>
                    {language === "en" ? `${d.en} / ${d.zh}` : `${d.zh} / ${d.en}`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">
                <Bilingual en="Message (optional)" zh="留言（選填）" />
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">
                <Bilingual en="Resume (PDF or Word)" zh="履歷（PDF 或 Word 檔）" />
              </label>
              <input
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm outline-none file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-primary)] file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <Bilingual en="Submitting…" zh="提交中…" subClassName="opacity-80" />
              ) : (
                <Bilingual en="Submit Application" zh="提交申請" subClassName="opacity-80" />
              )}
            </button>
            {status === "sent" && (
              <Bilingual
                as="p"
                className="text-center text-sm font-semibold text-[var(--color-primary)]"
                en="Thanks for applying! Our HR team will review your application."
                zh="感謝您的申請！我們的人資團隊將審核您的申請資料。"
              />
            )}
            {status === "error" && (
              <Bilingual
                as="p"
                className="text-center text-sm font-semibold text-red-600"
                en="Something went wrong submitting your application. Please try again or email your resume directly."
                zh="提交申請時發生問題，請重試，或直接以電子郵件寄送履歷。"
              />
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
