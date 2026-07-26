import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { supabase } from "@/lib/supabase";
import { Bilingual } from "@/lib/language";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const OFFICES = [
  {
    en: "Manila Office (HQ)",
    zh: "馬尼拉辦事處（總部）",
    address: "Unit 2705, Bandong Tower, 366 Barraca, San Nicolas, Manila",
    phone: "(02) 8361-2710 · 0915 722 6999",
    mapQuery: "Bandong Tower, Binondo, Manila",
  },
  {
    en: "Main Office & Aluminum Factory",
    zh: "總部暨鋁材工廠",
    address: "Road 1st, Interglobal Industrial Complex, Bustos, Bulacan",
    phone: "0915 722 6999",
    mapQuery: "Interglobal Industrial Complex, Bustos, Bulacan",
  },
  {
    en: "Cavite Headquarters",
    zh: "甲米地總部",
    address: "Advincula Avenue, Brgy. San Sebastian, Kawit, Cavite (under construction)",
    phone: "",
    mapQuery: "Advincula Avenue, Kawit, Cavite",
  },
];

type SubmitState = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    setStatus("sending");
    const { error } = await supabase.from("contact_submissions").insert({ name, email, message });
    if (error) {
      setStatus("error");
      return;
    }
    e.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <div>
      <PageHero
        eyebrow={{ en: "Get In Touch", zh: "與我們聯繫" }}
        title={{ en: "Contact Us", zh: "聯絡我們" }}
        subtitle={{
          en: "Tell us about your project, and our team will follow up with the right department.",
          zh: "告訴我們您的項目需求，我們的團隊將由對應部門與您聯繫。",
        }}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        {/* Offices */}
        <div className="space-y-6">
          {OFFICES.map((o) => (
            <div key={o.en} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <Bilingual as="h3" className="text-lg font-bold text-[#1c2024]" en={o.en} zh={o.zh} />
              <div className="mt-4 space-y-2.5 text-sm text-[var(--color-steel)]">
                <p className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  {o.address}
                </p>
                {o.phone && (
                  <p className="flex gap-2.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                    {o.phone}
                  </p>
                )}
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-bold text-[var(--color-primary)] hover:underline"
              >
                <Bilingual en="Get Directions →" zh="取得路線 →" />
              </a>
            </div>
          ))}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <Bilingual as="h3" className="text-lg font-bold text-[#1c2024]" en="Email" zh="電子郵件" />
            <p className="mt-4 flex gap-2.5 text-sm text-[var(--color-steel)]">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <a href="mailto:hwalun168@gmail.com" className="hover:text-[var(--color-primary)]">
                hwalun168@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl border border-black/5 p-8 shadow-sm">
          <Bilingual as="h3" className="text-xl font-bold text-[#1c2024]" en="Send a Message" zh="傳送訊息" />
          <Bilingual
            as="p"
            className="mt-1 text-sm text-[var(--color-steel)]"
            en="Fill this out and our team will get back to you directly."
            zh="請填寫以下表單，我們的團隊將直接與您聯繫。"
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
                <Bilingual en="Message" zh="訊息內容" />
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <Bilingual en="Sending…" zh="傳送中…" subClassName="opacity-80" />
              ) : (
                <Bilingual en="Send Message" zh="傳送訊息" subClassName="opacity-80" />
              )}
            </button>
            {status === "sent" && (
              <Bilingual
                as="p"
                className="text-center text-sm font-semibold text-[var(--color-primary)]"
                en="Thanks! Your message has been sent — we'll follow up soon."
                zh="感謝您！訊息已成功傳送，我們將盡快與您聯繫。"
              />
            )}
            {status === "error" && (
              <Bilingual
                as="p"
                className="text-center text-sm font-semibold text-red-600"
                en="Something went wrong sending your message. Please try again or email us directly."
                zh="傳送訊息時發生問題，請重試，或直接以電子郵件與我們聯繫。"
              />
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
