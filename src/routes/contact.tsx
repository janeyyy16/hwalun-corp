import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const OFFICES = [
  {
    name: "Manila Office (HQ)",
    address: "Unit 2705, Bandong Tower, 366 Barraca, San Nicolas, Manila",
    phone: "(02) 8361-2710 · 0915 722 6999",
    mapQuery: "Bandong Tower, Binondo, Manila",
  },
  {
    name: "Main Office & Aluminum Factory",
    address: "Road 1st, Interglobal Industrial Complex, Bustos, Bulacan",
    phone: "0915 722 6999",
    mapQuery: "Interglobal Industrial Complex, Bustos, Bulacan",
  },
  {
    name: "Cavite Headquarters",
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
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Tell us about your project, and our team will follow up with the right department."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        {/* Offices */}
        <div className="space-y-6">
          {OFFICES.map((o) => (
            <div key={o.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1c2024]">{o.name}</h3>
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
                Get Directions &rarr;
              </a>
            </div>
          ))}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#1c2024]">Email</h3>
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
          <h3 className="text-xl font-bold text-[#1c2024]">Send a Message</h3>
          <p className="mt-1 text-sm text-[var(--color-steel)]">
            Fill this out and our team will get back to you directly.
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
              <label className="mb-1.5 block text-sm font-semibold text-[#1c2024]">Message</label>
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
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm font-semibold text-[var(--color-primary)]">
                Thanks! Your message has been sent — we'll follow up soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-semibold text-red-600">
                Something went wrong sending your message. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
