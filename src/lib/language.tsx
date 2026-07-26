import { createContext, useContext, useEffect, useState, type ElementType, type ReactNode } from "react";

export type Language = "en" | "zh";

export type Bi = { en: ReactNode; zh: ReactNode };

interface LanguageContextValue {
  language: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "hwalun-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  }, [language]);

  function toggle() {
    setLanguage((l) => (l === "en" ? "zh" : "en"));
  }

  return <LanguageContext.Provider value={{ language, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

interface BilingualProps extends Bi {
  as?: ElementType;
  className?: string;
  subClassName?: string;
}

/** Renders the active language on top, the other language as smaller subtext underneath. */
export function Bilingual({ en, zh, as: Tag = "span", className, subClassName }: BilingualProps) {
  const { language } = useLanguage();
  const primary = language === "en" ? en : zh;
  const secondary = language === "en" ? zh : en;

  return (
    <Tag className={className}>
      <span className="block">{primary}</span>
      <span className={`mt-1 block text-[0.7em] font-normal opacity-60 ${subClassName ?? ""}`}>{secondary}</span>
    </Tag>
  );
}

/** Compact stacked variant for short labels (nav links, buttons, chips). */
export function BilingualLabel({ en, zh, className, subClassName }: Bi & { className?: string; subClassName?: string }) {
  const { language } = useLanguage();
  const primary = language === "en" ? en : zh;
  const secondary = language === "en" ? zh : en;

  return (
    <span className={`flex flex-col items-center leading-tight ${className ?? ""}`}>
      <span>{primary}</span>
      <span className={`text-[0.7em] font-normal opacity-60 ${subClassName ?? ""}`}>{secondary}</span>
    </span>
  );
}
