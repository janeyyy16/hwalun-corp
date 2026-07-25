interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#141618] py-24 text-center text-white">
      <div className="glow-red pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3" />
      <div className="relative mx-auto max-w-3xl px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">{eyebrow}</p>
        <h1 className="font-[var(--font-display)] text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>}
      </div>
    </section>
  );
}
