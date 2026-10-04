import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Check, Ruler, Sparkles, Wand2 } from "lucide-react";
import { IMG } from "../data";
import { Reveal } from "./Reveal";

/* ---------- body type silhouettes ---------- */
const BODY_TYPES = [
  {
    label: "Песочные часы",
    svg: <path d="M5 3 H19 L13.5 15 L19 27 H5 L10.5 15 Z" />,
  },
  { label: "Груша", svg: <path d="M12 3 L20 27 H4 Z" /> },
  { label: "Яблоко", svg: <ellipse cx="12" cy="15" rx="7.2" ry="12" /> },
  {
    label: "Прямоугольник",
    svg: <rect x="6.5" y="3" width="11" height="24" rx="3" />,
  },
  {
    label: "Перевёрнутый треугольник",
    svg: <path d="M4 3 H20 L12 27 Z" />,
  },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const SKINS = ["#f7e4d5", "#eccba9", "#d2a276", "#a06b42", "#6e4530"];
const HAIRS = [
  { name: "Блонд", c: "#e8c87a" },
  { name: "Русый", c: "#b08d57" },
  { name: "Каштан", c: "#6b4226" },
  { name: "Чёрный", c: "#211a17" },
  { name: "Рыжий", c: "#b4562f" },
];

function Slider({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-smoke">
          {label}
        </span>
        <span className="rounded-full bg-lav-soft px-2.5 py-0.5 text-xs font-bold text-lav-ink">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="caps-range"
        style={{ ["--fill" as never]: `${pct}%` }}
      />
    </div>
  );
}

export default function TryOn() {
  const [body, setBody] = useState(0);
  const [height, setHeight] = useState(172);
  const [size, setSize] = useState(2);
  const [bust, setBust] = useState(90);
  const [waist, setWaist] = useState(66);
  const [hips, setHips] = useState(94);
  const [skin, setSkin] = useState(1);
  const [hair, setHair] = useState(2);
  const [phase, setPhase] = useState<"idle" | "working" | "done">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generate = () => {
    if (phase === "working") return;
    setPhase("working");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setPhase("done");
      timer.current = setTimeout(() => setPhase("idle"), 2400);
    }, 2100);
  };

  return (
    <section id="tryon" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-br from-lav-soft via-white to-lav/40 p-6 shadow-[0_50px_120px_-60px_rgba(111,91,167,0.5)] sm:p-10 lg:p-14">
          {/* deco pill rings */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[26px] border-lav/25" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-72 rounded-full border-[20px] border-lav/15" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:gap-14">
            {/* -------- controls -------- */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cream">
                  <Wand2 className="h-3.5 w-3.5 text-lav" />
                  Виртуальная примерка
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.06] text-ink sm:text-5xl">
                  Посмотри, как вещь сядет{" "}
                  <span className="italic text-lav-ink">именно на тебя</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 max-w-md text-balance leading-relaxed text-smoke">
                  AI строит модель по твоим параметрам: тип фигуры, рост, размер
                  и внешность. Никаких сюрпризов после доставки.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-8 rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-sm">
                  {/* body type */}
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-smoke">
                    Тип фигуры
                  </p>
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {BODY_TYPES.map((b, i) => (
                      <button
                        key={b.label}
                        onClick={() => setBody(i)}
                        title={b.label}
                        className={`group flex flex-col items-center gap-1.5 rounded-2xl border px-1 py-3 transition-all duration-300 ${
                          body === i
                            ? "border-ink bg-ink text-cream shadow-md"
                            : "border-ink/10 bg-cream text-ink/60 hover:border-lav-deep hover:text-ink"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 30"
                          className="h-8 w-6"
                          fill="currentColor"
                        >
                          {b.svg}
                        </svg>
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold text-lav-ink">
                    {BODY_TYPES[body].label}
                  </p>

                  {/* sliders */}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Slider
                      label="Рост"
                      value={height}
                      min={145}
                      max={195}
                      unit="см"
                      onChange={setHeight}
                    />
                    <Slider
                      label="Грудь"
                      value={bust}
                      min={78}
                      max={120}
                      unit="см"
                      onChange={setBust}
                    />
                    <Slider
                      label="Талия"
                      value={waist}
                      min={56}
                      max={110}
                      unit="см"
                      onChange={setWaist}
                    />
                    <Slider
                      label="Бёдра"
                      value={hips}
                      min={82}
                      max={130}
                      unit="см"
                      onChange={setHips}
                    />
                  </div>

                  {/* size */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-smoke">
                      <Ruler className="h-3.5 w-3.5" /> Размер
                    </span>
                    {SIZES.map((s, i) => (
                      <button
                        key={s}
                        onClick={() => setSize(i)}
                        className={`h-9 min-w-11 rounded-full border px-3 text-xs font-bold transition-all duration-300 ${
                          size === i
                            ? "border-ink bg-ink text-cream"
                            : "border-ink/10 bg-cream text-ink/70 hover:border-lav-deep"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* appearance */}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-smoke">
                        Цвет кожи
                      </p>
                      <div className="flex gap-2">
                        {SKINS.map((c, i) => (
                          <button
                            key={c}
                            onClick={() => setSkin(i)}
                            className={`grid h-8 w-8 place-items-center rounded-full transition-all duration-300 ${
                              skin === i
                                ? "ring-2 ring-ink ring-offset-2 ring-offset-white"
                                : "hover:scale-110"
                            }`}
                            style={{ background: c }}
                            aria-label="skin tone"
                          >
                            {skin === i && (
                              <Check
                                className="h-3.5 w-3.5 text-ink/70"
                                strokeWidth={3}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-smoke">
                        Волосы
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {HAIRS.map((h, i) => (
                          <button
                            key={h.name}
                            title={h.name}
                            onClick={() => setHair(i)}
                            className={`h-8 w-8 rounded-full transition-all duration-300 ${
                              hair === i
                                ? "ring-2 ring-ink ring-offset-2 ring-offset-white"
                                : "hover:scale-110"
                            }`}
                            style={{ background: h.c }}
                            aria-label={h.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={generate}
                    disabled={phase === "working"}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-bold text-cream transition-all duration-300 hover:bg-lav-ink hover:shadow-[0_16px_40px_-12px_rgba(111,91,167,0.7)] disabled:opacity-70"
                  >
                    <Sparkles className="h-4.5 w-4.5" />
                    {phase === "working"
                      ? "Генерируем модель…"
                      : "Сгенерировать на моей фигуре"}
                  </button>
                </div>
              </Reveal>
            </div>

            {/* -------- model preview -------- */}
            <Reveal delay={0.15} className="relative">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-30px_rgba(111,91,167,0.55)]">
                <img
                  src={IMG.tryon}
                  alt="AI-модель в образе"
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-700 ${
                    phase === "working" ? "scale-[1.03]" : ""
                  }`}
                />
                {/* skin tone tint */}
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply transition-colors duration-500"
                  style={{ background: SKINS[skin], opacity: 0.16 }}
                />
                {/* top badges */}
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="glass rounded-full px-3 py-1.5 text-[11px] font-bold text-ink">
                    AI Model · v2
                  </span>
                  <span className="glass rounded-full px-3 py-1.5 text-[11px] font-bold text-lav-ink">
                    {HAIRS[hair].name}
                  </span>
                </div>
                {/* params card */}
                <div className="glass absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-smoke">
                      Параметры модели
                    </p>
                    <AnimatePresence>
                      {phase === "done" && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700"
                        >
                          <BadgeCheck className="h-3 w-3" /> Посадка обновлена
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="mt-1.5 font-display text-lg font-semibold text-ink">
                    {height} см · {SIZES[size]} · {bust}/{waist}/{hips}
                  </p>
                  <p className="text-xs text-smoke">{BODY_TYPES[body].label}</p>
                </div>

                {/* working overlay */}
                <AnimatePresence>
                  {phase === "working" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 grid place-items-center bg-white/55 backdrop-blur-[6px]"
                    >
                      <div className="absolute inset-x-8 animate-scan">
                        <div className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-lav-deep to-transparent shadow-[0_0_24px_6px_rgba(169,142,214,0.85)]" />
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <span className="relative flex h-5 w-10 items-center rounded-full border-[3px] border-ink">
                          <span className="mx-auto h-2 w-2 animate-pulse-dot rounded-full bg-lav-deep" />
                        </span>
                        <p className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream">
                          AI подбирает посадку…
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
