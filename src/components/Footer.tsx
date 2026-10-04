import { ArrowRight } from "lucide-react";
import { Logo } from "./Header";
import { Reveal } from "./Reveal";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const COLS = [
  {
    title: "Разделы",
    links: ["Главная", "Как это работает", "Категории", "Капсулы", "Сообщество"],
    hrefs: ["#top", "#how", "#categories", "#capsules", "#community"],
  },
  {
    title: "Помощь",
    links: [
      "Поддержка",
      "Доставка и возврат",
      "Вопросы и ответы",
      "Размерные сетки",
      "Контакты",
    ],
    hrefs: ["#", "#", "#", "#", "#"],
  },
  {
    title: "Партнёрам",
    links: [
      "Подключить магазин",
      "API для брендов",
      "Реклама в CAPSUL",
      "Аналитика рынка",
      "Пресс-кит",
    ],
    hrefs: ["#", "#", "#", "#", "#"],
  },
];

export default function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* CTA banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-[#F1EAFB] via-[#E3D6F4] to-lav px-6 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-96 rounded-full border-[24px] border-white/35" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full border-[28px] border-white/30" />
            <div className="pointer-events-none absolute right-[12%] top-8 hidden h-10 w-20 rotate-12 rounded-full border-[8px] border-ink/10 lg:block" />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-lav-ink">
              Одно фото — целый образ
            </p>
            <h2 className="relative mx-auto mt-4 max-w-3xl font-display text-balance text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Твоя идеальная капсула{" "}
              <span className="italic">уже ждёт</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-balance text-smoke">
              Загрузи первое фото — это займёт меньше минуты. Дальше CAPSUL
              сделает всё сам: найдёт, сравнит и примерит.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="group flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-lav-ink hover:shadow-[0_20px_50px_-15px_rgba(111,91,167,0.8)]">
                Начать поиск
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#how"
                className="rounded-full border border-ink/15 bg-white/60 px-8 py-4 text-sm font-bold text-ink backdrop-blur transition-all duration-300 hover:bg-white"
              >
                Как это работает
              </a>
            </div>
          </div>
        </Reveal>

        {/* links */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
              AI-платформа стиля: поиск одежды по фото, виртуальная примерка на
              твоей фигуре и капсулы, где всё сочетается.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-lav-deep hover:shadow-md"
            >
              <InstagramIcon className="h-4.5 w-4.5 text-lav-ink" />
              @capsul.style
            </a>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-smoke">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l, i) => (
                  <li key={l}>
                    <a
                      href={c.hrefs[i]}
                      className="text-sm text-ink/65 transition-colors duration-200 hover:text-lav-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-6 sm:flex-row">
          <p className="text-xs text-smoke">
            © 2026 CAPSUL · Твой стиль в одной капсуле
          </p>
          <div className="flex items-center gap-2 text-xs text-smoke">
            <a href="#" className="rounded-full px-3 py-1.5 transition-colors hover:bg-lav-soft hover:text-ink">
              Конфиденциальность
            </a>
            <a href="#" className="rounded-full px-3 py-1.5 transition-colors hover:bg-lav-soft hover:text-ink">
              Оферта
            </a>
            <span className="hidden items-center gap-1.5 rounded-full bg-lav-soft px-3 py-1.5 font-semibold text-lav-ink sm:inline-flex">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
              Все системы работают
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
