import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { BilingualLabel, useLanguage, type Bi } from "@/lib/language";

const NAV_LINKS: { to: string; label: Bi }[] = [
  { to: "/", label: { en: "Home", zh: "首頁" } },
  { to: "/about", label: { en: "About", zh: "關於我們" } },
  { to: "/services", label: { en: "Services", zh: "服務項目" } },
  { to: "/careers", label: { en: "Careers", zh: "招聘職缺" } },
  { to: "/partners", label: { en: "Partners", zh: "合作夥伴" } },
  { to: "/contact", label: { en: "Contact", zh: "聯絡我們" } },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggle } = useLanguage();

  return (
    <header className="glass sticky top-0 z-50 border-b border-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Hwa Lun Corporation" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold text-[var(--color-steel)] transition-colors hover:text-[var(--color-primary)]"
              activeProps={{ className: "text-[var(--color-primary)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              <BilingualLabel en={l.label.en} zh={l.label.zh} />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold text-[var(--color-steel)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            aria-label="Toggle language"
          >
            {language === "en" ? "中文" : "EN"}
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            <BilingualLabel en="Get a Quote" zh="免費報價" className="flex-row gap-1.5" subClassName="opacity-80" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="glass flex flex-col gap-1 border-t border-black/5 px-6 py-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-semibold text-[var(--color-steel)] hover:bg-black/5 hover:text-[var(--color-primary)]"
              activeProps={{ className: "text-[var(--color-primary)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              <BilingualLabel en={l.label.en} zh={l.label.zh} className="items-start" />
            </Link>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="mt-2 self-start rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold text-[var(--color-steel)]"
          >
            {language === "en" ? "切換至中文" : "Switch to EN"}
          </button>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            <BilingualLabel en="Get a Quote" zh="免費報價" subClassName="opacity-80" />
          </Link>
        </nav>
      )}
    </header>
  );
}
