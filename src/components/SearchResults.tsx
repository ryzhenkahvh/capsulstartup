import {
  BadgeCheck,
  ExternalLink,
  Heart,
  ScanSearch,
  Trophy,
} from "lucide-react";
import { IMG, OFFERS, PX } from "../data";
import { Reveal, SectionHead } from "./Reveal";

const SPECS = [
  {
    label: "Состав",
    value: "60% хлопок, 40% акрил",
    extra: "мягкая вязка, не колется",
  },
  { label: "Артикулы", value: "WB 182 401 552", extra: "OZON 441 902 · Lamoda RT523" },
];

export default function SearchResults() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker="Поиск по фото"
          title={
            <>
              Одно фото —{" "}
              <span className="italic text-lav-ink">все предложения</span>
            </>
          }
          sub="CAPSUL собирает цены, характеристики и фото покупателей со всех маркетплейсов в один экран."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* query photo */}
          <Reveal>
            <div className="relative h-full">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(19,17,18,0.4)]">
                <img
                  src={PX.sweaterWorn}
                  alt="Загруженное фото"
                  className="aspect-[3/4] w-full object-cover"
                />
                <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-ink">
                  <ScanSearch className="h-3.5 w-3.5 text-lav-ink" />
                  Ваш запрос
                </span>
              </div>
              <div className="glass absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/60 px-5 py-3.5 shadow-lg">
                <p className="text-xs font-semibold text-ink">
                  AI нашёл <span className="text-lav-ink">1 284 похожих товара</span>{" "}
                  за 1,8 секунды
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/8">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-lav to-lav-deep" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* offers */}
          <div className="flex flex-col gap-4">
            {OFFERS.map((o, i) => (
              <Reveal key={o.shop} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-4 rounded-[1.75rem] border p-4 transition-all duration-500 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-5 ${
                    o.best
                      ? "border-lav-deep/60 bg-lav-soft/70 shadow-[0_25px_60px_-25px_rgba(111,91,167,0.5)]"
                      : "border-ink/5 bg-white shadow-[0_18px_45px_-30px_rgba(19,17,18,0.3)] hover:shadow-[0_28px_55px_-25px_rgba(111,91,167,0.35)]"
                  }`}
                >
                  {o.best && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold text-cream shadow-md">
                      <Trophy className="h-3.5 w-3.5 text-lav" />
                      Самая низкая цена
                    </span>
                  )}
                  <img
                    src={o.img}
                    alt={o.name}
                    className="h-24 w-20 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-24"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-ink">
                      {o.name}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-bold tracking-wide"
                        style={{
                          color: o.shopColor,
                          background: `${o.shopColor}14`,
                        }}
                      >
                        {o.shop}
                      </span>
                      {o.discount && (
                        <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-600">
                          {o.discount}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-smoke">
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
                        продавец проверен
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-2">
                      <span
                        className={`font-display text-2xl font-bold ${
                          o.best ? "text-lav-ink" : "text-ink"
                        }`}
                      >
                        {o.price}
                      </span>
                      {o.oldPrice && (
                        <span className="text-sm text-smoke line-through">
                          {o.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                    <button
                      className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
                      aria-label="в избранное"
                    >
                      <Heart className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-cream transition-all duration-300 hover:bg-lav-ink">
                      На сайт
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* characteristics */}
            <Reveal delay={0.3}>
              <div className="rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-[0_18px_45px_-30px_rgba(19,17,18,0.3)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-smoke">
                  Характеристики товара · собраны со всех площадок
                </p>
                <div className="mt-4 grid gap-5 sm:grid-cols-3">
                  {SPECS.map((s) => (
                    <div key={s.label}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-smoke">
                        {s.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-ink">{s.value}</p>
                      <p className="text-xs text-smoke">{s.extra}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-smoke">
                      Цвет
                    </p>
                    <div className="mt-1.5 flex gap-1.5">
                      {["#d9c6a5", "#efe6d8", "#b9a27e", "#8a8f98"].map((c) => (
                        <span
                          key={c}
                          className="h-6 w-6 rounded-full border border-ink/10"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-smoke">бежевый, молочный</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink/5 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-smoke">
                    Размерный ряд
                  </span>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-bold text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="ml-auto text-xs font-medium text-lav-ink">
                    96% отзывов: соответствует размеру
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-smoke">
                    Фото покупателей
                  </span>
                  <div className="flex">
                    {[IMG.c3, PX.sweaterWorn, IMG.c1, PX.sweaterKnit].map(
                      (s, i) => (
                        <img
                          key={i}
                          src={s}
                          alt=""
                          className="-ml-2.5 h-11 w-11 rounded-full border-2 border-white object-cover first:ml-0"
                          loading="lazy"
                        />
                      )
                    )}
                    <span className="-ml-2.5 grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-lav-soft text-[11px] font-bold text-lav-ink">
                      +214
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
