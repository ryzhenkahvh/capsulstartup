import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ImagePlus,
  MousePointer2,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import { IMG, PX, QUICK_CHIPS } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-lav/45 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-lav-soft blur-[100px]" />
        <div className="absolute left-1/2 top-24 h-40 w-[42rem] -translate-x-1/2 rounded-full bg-white/70 blur-[90px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        {/* ---------------- left ---------------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-ink/70 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-lav-deep" />
            AI-поиск · Виртуальная примерка · Капсулы
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mt-6 font-display text-balance text-[2.9rem] leading-[1.02] font-semibold text-ink sm:text-6xl lg:text-[4.6rem]"
          >
            Найди любой товар{" "}
            <span className="relative inline-block italic text-lav-ink">
              по фото
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
              >
                <path
                  d="M3 10.5C60 3.5 150 3.5 217 9.5"
                  stroke="#C8B6E2"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-smoke sm:text-lg"
          >
            Загружай фото вещи — CAPSUL найдёт похожие товары на маркетплейсах,
            сравнит цены и соберёт готовую капсулу образов под твою фигуру.
          </motion.p>

          {/* upload zone */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-8"
          >
            <div className="group flex flex-col gap-3 rounded-[1.75rem] border-2 border-dashed border-lav-deep/40 bg-white/80 p-3 pl-5 shadow-[0_20px_60px_-30px_rgba(111,91,167,0.35)] transition-colors duration-300 hover:border-lav-deep sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3.5 py-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lav-soft text-lav-ink transition-transform duration-500 group-hover:rotate-12">
                  <ImagePlus className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Загрузите фото или перетащите сюда
                  </p>
                  <p className="text-xs text-smoke">
                    JPG, PNG до 10 МБ — или скриншот из соцсетей
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-lav-ink hover:shadow-[0_12px_30px_-10px_rgba(111,91,167,0.6)]">
                <ScanSearch className="h-4.5 w-4.5" strokeWidth={2} />
                Найти
              </button>
            </div>

            {/* quick chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-smoke">
                <MousePointer2 className="h-3.5 w-3.5" /> Попробуйте
              </span>
              {QUICK_CHIPS.map((c, i) => (
                <motion.button
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.5, ease }}
                  className="flex items-center gap-2 rounded-full border border-ink/8 bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lav-deep/50 hover:shadow-md"
                >
                  <img
                    src={c.img}
                    alt={c.label}
                    className="h-8 w-8 rounded-full object-cover"
                    loading="lazy"
                  />
                  {c.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-10 flex items-center gap-8 sm:gap-10"
          >
            {[
              ["30+", "маркетплейсов"],
              ["12 млн", "товаров в базе"],
              ["98%", "точность поиска"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-semibold text-ink">
                  {v}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-smoke">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------- right visual ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[30rem]"
        >
          {/* main photo */}
          <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_40px_90px_-30px_rgba(111,91,167,0.45)]">
            <img
              src={IMG.hero}
              alt="Модель в образе"
              className="aspect-[3/4] w-full object-cover"
            />
            {/* scanning frame */}
            <div className="absolute left-[16%] top-[17%] h-[36%] w-[52%]">
              <div className="absolute inset-0 rounded-2xl border border-white/25" />
              {[
                "left-0 top-0 border-l-[3px] border-t-[3px] rounded-tl-2xl",
                "right-0 top-0 border-r-[3px] border-t-[3px] rounded-tr-2xl",
                "left-0 bottom-0 border-l-[3px] border-b-[3px] rounded-bl-2xl",
                "right-0 bottom-0 border-r-[3px] border-b-[3px] rounded-br-2xl",
              ].map((cls) => (
                <span
                  key={cls}
                  className={`absolute h-6 w-6 border-white ${cls}`}
                />
              ))}
              <div className="absolute inset-x-1.5 animate-scan">
                <div className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-lav to-transparent shadow-[0_0_18px_4px_rgba(200,182,226,0.9)]" />
              </div>
              <span className="absolute -bottom-8 left-0 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-semibold text-cream backdrop-blur">
                <Camera className="h-3 w-3 text-lav" />
                Свитер распознан · 98%
              </span>
            </div>
          </div>

          {/* floating: product match */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 top-8 w-56 rounded-3xl border border-white/60 p-3 shadow-[0_24px_60px_-20px_rgba(19,17,18,0.35)] sm:-right-8"
          >
            <div className="flex gap-3">
              <img
                src={PX.sweaterKnit}
                alt="Свитер"
                className="h-16 w-14 rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold text-ink">
                  Свитер «OGGI»
                </p>
                <p className="text-[11px] font-medium" style={{ color: "#cb11ab" }}>
                  WILDBERRIES
                </p>
                <p className="mt-1 text-sm font-bold text-ink">
                  75,24 ₽{" "}
                  <span className="text-[10px] font-medium text-smoke line-through">
                    94,00 ₽
                  </span>
                </p>
              </div>
            </div>
            <span className="mt-2.5 inline-flex w-full items-center justify-center gap-1 rounded-full bg-lav-soft py-1.5 text-[11px] font-bold text-lav-ink">
              Лучшая цена из 14 магазинов
            </span>
          </motion.div>

          {/* floating: capsule */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="glass absolute -bottom-8 -left-4 w-64 rounded-3xl border border-white/60 p-4 shadow-[0_24px_60px_-20px_rgba(19,17,18,0.35)] sm:-left-10"
          >
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold text-ink">Готовая капсула</p>
              <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-cream">
                12 вещей
              </span>
            </div>
            <div className="mt-3 flex items-center">
              {[IMG.cozy, PX.bag, PX.sneakers].map((s, i) => (
                <img
                  key={i}
                  src={s}
                  alt=""
                  className={`-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover first:ml-0`}
                  style={{ zIndex: 3 - i }}
                />
              ))}
              <span className="-ml-3 grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-lav text-[11px] font-bold text-ink">
                +9
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm font-bold text-ink">
                от 4 890 ₽{" "}
                <span className="block text-[10px] font-medium text-smoke">
                  весь образ
                </span>
              </p>
              <button className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 hover:rotate-45">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* rotating stamp */}
          <div className="absolute -top-8 left-6 hidden h-24 w-24 animate-spin-slow sm:block">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="fill-smoke text-[10.5px] uppercase tracking-[0.28em]">
                <textPath href="#circlePath">
                  твой стиль в одной капсуле · capsul ·
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
