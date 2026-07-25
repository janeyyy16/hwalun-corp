import { createFileRoute } from "@tanstack/react-router";
import { Globe2, GraduationCap, Mail, TrendingUp } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/careers")({
  component: Careers,
});

const REASONS = [
  {
    icon: TrendingUp,
    title: "Growth Across Four Countries",
    desc: "From the Philippines to China, Malaysia, and Cambodia — build a career with regional reach.",
  },
  {
    icon: GraduationCap,
    title: "Learn From Experienced Teams",
    desc: "Work alongside senior technical personnel and project managers with decades of combined experience.",
  },
  {
    icon: Globe2,
    title: "Work on Landmark Projects",
    desc: "Contribute to towers, hotels, and commercial developments that shape city skylines.",
  },
];

const DEPARTMENTS = [
  "Design",
  "Engineering",
  "Commercial",
  "Finance",
  "Cost Control",
  "Legal",
  "Soft Furnishing",
  "Human Resources",
  "Administration",
  "Warehouse",
  "Production",
];

type SubmitState = "idle" | "sending" | "sent" | "error";

function Careers() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
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

    e.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With Us"
        subtitle="Join a team that has spent two decades turning ambitious designs into finished landmarks."
      />

      {/* Why join */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Why Join Hwa Lun
          </p>
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#1c2024] sm:text-4xl">
            A Team, Not Just a Workplace
          </h2>
          <p className="mt-4 text-[var(--color-steel)]">
            "There is no perfect individual, only a perfect team." We believe in sincere cooperation, detailed
            management, and efficient learning &mdash; and we bring joyful, human-centered service into everything we
            build.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm">
              <div className="glow-red mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1c2024]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[#141618] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Where You Could Fit
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">Departments</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {DEPARTMENTS.map((d) => (
              <span key={d} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Openings / CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Current Openings
        </p>
        <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#1c2024]">
          No specific openings are posted right now
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--color-steel)]">
          We're always glad to hear from experienced professionals across design, engineering, commercial, finance,
          and construction management. Send us your resume and we'll reach out when an opportunity matching your
          background comes up.
        </p>
        <a
          href="mailto:hwalun168@gmail.com?subject=Career%20Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" />
          Send Your Resume
        </a>
      </section>

      {/* Application form */}
      <section className="mx-auto max-w-2xl px-6 pb-20">
        <div className="glass rounded-2xl border border-black/5 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#1c2024]">Or Apply Directly</h3>
          <p className="mt-1 text-sm text-[var(--color-steel)]">
            Submit your details and resume, and our HR team will review it.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Department</label>
              <select
                name="department"
                required
                defaultValue=""
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              >
                <option value="" disabled>
                  Select a department
                </option>
                {DEPARTMENTS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Message (optional)</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Resume (PDF or Word)</label>
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
              {status === "sending" ? "Submitting…" : "Submit Application"}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm font-semibold text-[var(--color-primary)]">
                Thanks for applying! Our HR team will review your application.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-semibold text-red-600">
                Something went wrong submitting your application. Please try again or email your resume directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
