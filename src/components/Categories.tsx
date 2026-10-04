import {
  ArrowUpRight,
  Footprints,
  Gem,
  Handbag,
  Ribbon,
  Shirt,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const CATS = [
  {
    Icon: Shirt,
    name: "Одежда",
    count: "2 340 000 товаров",
    g: "linear-gradient(135deg,#F3EDFB,#E2D5F4)",
  },
  {
    Icon: Footprints,
    name: "Обувь",
    count: "860 000 товаров",
    g: "linear-gradient(135deg,#F5F0E4,#EADFC9)",
  },
  {
    Icon: Handbag,
    name: "Сумки",
    count: "410 000 товаров",
    g: "linear-gradient(135deg,#FAEEEC,#F3D9D4)",
  },
  {
    Icon: Ribbon,
    name: "Нижнее бельё",
    count: "290 000 товаров",
    g: "linear-gradient(135deg,#F9EFF4,#F0DBE9)",
  },
  {
    Icon: Gem,
    name: "Аксессуары",
    count: "1 120 000 товаров",
    g: "linear-gradient(135deg,#EEF5EF,#DBEBDF)",
  },
  {
    Icon: Sparkles,
    name: "Косметика",
    count: "640 000 товаров",
    g: "linear-gradient(135deg,#EFF3F9,#DDE8F5)",
  },
];

const TAGS = [
  { label: "Школьное", n: "1 240 капсул" },
  { label: "Нарядное", n: "980 капсул" },
  { label: "Повседневное", n: "4 560 капсул" },
  { label: "Спортивное", n: "2 130 капсул" },
  { label: "Вечернее", n: "870 капсул" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker="Популярные категории"
          title={
            <>
              Весь гардероб — <span className="italic text-lav-ink">здесь</span>
            </>
          }
          sub="Ищем в каждой категории сразу по всем магазинам — от базы до вечерних образов."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {CATS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <button
                className="group flex h-48 w-full flex-col justify-between rounded-[1.75rem] border border-white p-5 text-left shadow-[0_18px_45px_-28px_rgba(19,17,18,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(111,91,167,0.4)]"
                style={{ background: c.g }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <c.Icon className="h-5.5 w-5.5" strokeWidth={1.7} />
                  </span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-ink/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold leading-tight text-ink">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ink/50">
                    {c.count}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* style capsule tags */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="mr-1 text-xs font-bold uppercase tracking-[0.2em] text-smoke">
              Стилевые капсулы
            </span>
            {TAGS.map((t) => (
              <button
                key={t.label}
                className="group flex items-center gap-2.5 rounded-full border border-ink/10 bg-white py-2.5 pl-5 pr-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink"
              >
                <span className="text-sm font-semibold text-ink transition-colors group-hover:text-cream">
                  {t.label}
                </span>
                <span className="rounded-full bg-lav-soft px-2.5 py-1 text-[11px] font-bold text-lav-ink transition-colors group-hover:bg-lav group-hover:text-ink">
                  {t.n}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
