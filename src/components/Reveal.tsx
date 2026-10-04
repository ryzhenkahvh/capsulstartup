import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">
      <span className="h-1.5 w-1.5 rounded-full bg-lav-deep" />
      {children}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <Kicker>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-balance text-4xl leading-[1.08] font-semibold text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-balance text-base leading-relaxed text-smoke sm:text-lg">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
