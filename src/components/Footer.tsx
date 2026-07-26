import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/images/logo-white.png";
import { Bilingual } from "@/lib/language";

const QUICK_LINKS: { to: string; en: string; zh: string }[] = [
  { to: "/about", en: "About Us", zh: "關於我們" },
  { to: "/services", en: "Services", zh: "服務項目" },
  { to: "/careers", en: "Careers", zh: "招聘職缺" },
  { to: "/partners", en: "Partners", zh: "合作夥伴" },
  { to: "/contact", en: "Contact", zh: "聯絡我們" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1d21] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Hwa Lun Corporation" className="h-9 w-auto" />
          <Bilingual
            as="p"
            className="mt-4 text-sm leading-relaxed"
            en="A large-scale integrated construction company delivering general contracting, interior fit-out, and curtain wall decoration projects across the Philippines and beyond."
            zh="大型綜合性建築企業，於菲律賓及海外提供總承包工程、室內裝修與幕牆裝飾服務。"
          />
        </div>

        <div>
          <Bilingual
            as="h3"
            className="mb-4 text-sm font-bold uppercase tracking-wide text-white"
            en="Quick Links"
            zh="快速連結"
          />
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  <Bilingual en={l.en} zh={l.zh} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Bilingual
            as="h3"
            className="mb-4 text-sm font-bold uppercase tracking-wide text-white"
            en="Manila Office"
            zh="馬尼拉辦事處"
          />
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>Unit 2705 Bandong Tower, 366 Barraca, San Nicolas, Manila</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>(02) 8361-2710 &middot; 0915 722 6999</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <a href="mailto:hwalun168@gmail.com" className="hover:text-white">
                hwalun168@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Bilingual
            as="h3"
            className="mb-4 text-sm font-bold uppercase tracking-wide text-white"
            en="Main Office & Factory"
            zh="總部暨工廠"
          />
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>Road 1st, Interglobal Industrial Complex, Bustos, Bulacan</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>0915 722 6999</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Hwa Lun Corporation. All rights reserved.
      </div>
    </footer>
  );
}
