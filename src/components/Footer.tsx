import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/images/logo-white.png";

export function Footer() {
  return (
    <footer className="bg-[#1a1d21] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Hwa Lun Corporation" className="h-9 w-auto" />
          <p className="mt-4 text-sm leading-relaxed">
            A large-scale integrated construction company delivering general contracting, interior fit-out, and
            curtain wall decoration projects across the Philippines and beyond.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/careers", "Careers"],
              ["/partners", "Partners"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Manila Office</h3>
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
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Main Office &amp; Factory</h3>
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
