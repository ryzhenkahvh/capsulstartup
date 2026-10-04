import {
  Apple,
  BatteryFull,
  Bell,
  Camera,
  ChevronLeft,
  Heart,
  Play,
  ScanSearch,
  Search,
  Share2,
  ShoppingBag,
  Signal,
  Sparkles,
  Wifi,
} from "lucide-react";
import { IMG, PX } from "../data";
import { Reveal } from "./Reveal";

function StatusBar() {
  return (
    <>
      <span className="absolute left-6 top-4 z-20 text-[10px] font-bold text-ink">
        9:41
      </span>
      <span className="absolute right-5 top-4 z-20 flex items-center gap-1 text-ink">
        <Signal className="h-3 w-3" />
        <Wifi className="h-3 w-3" />
        <BatteryFull className="h-3.5 w-3.5" />
      </span>
    </>
  );
}

function Phone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-[15.5rem] rounded-[2.8rem] border border-ink/15 bg-ink p-2.5 shadow-[0_50px_100px_-30px_rgba(19,17,18,0.55)] sm:w-[16.5rem] ${className}`}
    >
      <div className="relative aspect-[9/18.6] overflow-hidden rounded-[2.15rem] bg-cream">
        <div className="absolute left-1/2 top-2.5 z-20 h-5.5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <StatusBar />
        {children}
      </div>
    </div>
  );
}

const PRODUCTS = [
  { img: PX.sweaterKnit, name: "Свитер «OGGI»", price: "75 ₽" },
  { img: PX.bag, name: "Сумка тоут", price: "129 ₽" },
  { img: PX.sneakers, name: "Кеды белые", price: "96 ₽" },
  { img: PX.dress, name: "Платье миди", price: "142 ₽" },
];

export default function AppPromo() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* text */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-lav-deep" />
                Мобильное приложение
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.06] text-ink sm:text-5xl lg:text-6xl">
                Твой стилист —{" "}
                <span className="italic text-lav-ink">в кармане</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-md text-balance leading-relaxed text-smoke">
                Увидела вещь на улице или в ленте — сфотографируй, и CAPSUL
                найдёт её раньше, чем ты дойдёшь до дома.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  Icon: Camera,
                  t: "Мгновенный поиск",
                  d: "Прямо с камеры: снял вещь — получил цены всех магазинов",
                },
                {
                  Icon: Bell,
                  t: "Уведомления о скидках",
                  d: "Сообщим, когда вещь из избранного подешевеет",
                },
                {
                  Icon: Sparkles,
                  t: "Капсула дня",
                  d: "Каждое утро — свежий образ под погоду и твой стиль",
                },
              ].map((f, i) => (
                <Reveal key={f.t} delay={0.18 + i * 0.07}>
                  <div className="flex items-center gap-4 rounded-3xl border border-ink/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lav-soft text-lav-ink">
                      <f.Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{f.t}</p>
                      <p className="text-xs leading-relaxed text-smoke">{f.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { Icon: Apple, top: "Загрузите в", bottom: "App Store" },
                  { Icon: Play, top: "Доступно в", bottom: "Google Play" },
                ].map((b) => (
                  <button
                    key={b.bottom}
                    className="flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-left text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-lav-ink hover:shadow-[0_16px_40px_-12px_rgba(111,91,167,0.7)]"
                  >
                    <b.Icon className="h-6 w-6" />
                    <span>
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-cream/60">
                        {b.top}
                      </span>
                      <span className="block text-sm font-bold leading-tight">
                        {b.bottom}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* phones */}
          <div className="relative mx-auto h-[34rem] w-full max-w-md sm:h-[36rem]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lav/40 blur-[90px]" />
            {/* back phone — capsule screen */}
            <Reveal className="absolute left-0 top-12 -rotate-[7deg]">
              <Phone>
                <div className="relative h-full">
                  <img
                    src={IMG.cozy}
                    alt="Капсула"
                    className="h-[38%] w-full object-cover"
                  />
                  <div className="absolute left-4 top-[31%] rounded-full bg-ink/85 px-3 py-1.5 text-[10px] font-bold text-cream backdrop-blur">
                    Уютная капсула
                  </div>
                  <div className="px-4 pt-4">
                    {[
                      ["Свитер крючком", "75 ₽"],
                      ["Джинсы прямые", "112 ₽"],
                      ["Ботинки челси", "189 ₽"],
                    ].map(([n, p]) => (
                      <div
                        key={n}
                        className="flex items-center justify-between border-b border-ink/5 py-2.5"
                      >
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-lav-deep" />
                          {n}
                        </span>
                        <span className="text-[10px] font-bold text-smoke">
                          {p}
                        </span>
                      </div>
                    ))}
                    <div className="mt-3 flex items-center justify-between rounded-full bg-ink px-4 py-2.5">
                      <span className="text-[10px] font-bold text-cream">
                        Купить все 12 вещей
                      </span>
                      <span className="rounded-full bg-lav px-2.5 py-0.5 text-[10px] font-bold text-ink">
                        4 890 ₽
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-4 top-10 z-20 grid h-7 w-7 place-items-center rounded-full bg-white/80 backdrop-blur">
                    <ChevronLeft className="h-4 w-4 text-ink" />
                  </div>
                  <div className="absolute right-4 top-10 z-20 grid h-7 w-7 place-items-center rounded-full bg-white/80 backdrop-blur">
                    <Share2 className="h-3.5 w-3.5 text-ink" />
                  </div>
                </div>
              </Phone>
            </Reveal>
            {/* front phone — search feed */}
            <Reveal
              delay={0.15}
              className="absolute right-0 top-0 z-10 rotate-[4deg]"
            >
              <Phone>
                <div className="flex h-full flex-col px-4 pb-16 pt-12">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-4 rounded-full border-2 border-ink" />
                      <span className="text-[12px] font-bold lowercase tracking-[0.25em] text-ink">
                        capsul
                      </span>
                    </span>
                    <Bell className="h-4 w-4 text-ink/60" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-full bg-white py-2 pl-3 pr-1.5 shadow-sm">
                    <Search className="h-3.5 w-3.5 text-smoke" />
                    <span className="flex-1 text-[10px] text-smoke">
                      Фото вещи или название…
                    </span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-ink">
                      <Camera className="h-3 w-3 text-cream" />
                    </span>
                  </div>
                  <div className="mt-2.5 flex gap-1.5">
                    {["Для тебя", "Новинки", "Скидки"].map((c, i) => (
                      <span
                        key={c}
                        className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${
                          i === 0
                            ? "bg-ink text-cream"
                            : "bg-white text-ink/60"
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 grid flex-1 grid-cols-2 gap-2">
                    {PRODUCTS.map((p) => (
                      <div
                        key={p.name}
                        className="overflow-hidden rounded-2xl bg-white shadow-sm"
                      >
                        <img
                          src={p.img}
                          alt={p.name}
                          className="h-[4.6rem] w-full object-cover"
                        />
                        <div className="p-2">
                          <p className="truncate text-[9px] font-semibold text-ink">
                            {p.name}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-lav-soft px-2 py-0.5 text-[9px] font-bold text-lav-ink">
                            {p.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass absolute inset-x-3 bottom-3 z-20 flex items-center justify-around rounded-full border border-white/60 py-2">
                  <Search className="h-4 w-4 text-ink" />
                  <span className="-mt-5 grid h-10 w-10 place-items-center rounded-full bg-ink text-lav shadow-lg">
                    <ScanSearch className="h-4.5 w-4.5" />
                  </span>
                  <Heart className="h-4 w-4 text-ink/50" />
                  <ShoppingBag className="h-4 w-4 text-ink/50" />
                </div>
              </Phone>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
