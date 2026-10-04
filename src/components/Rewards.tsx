import { useState } from "react";
import {
  BadgeCheck,
  Crown,
  Frame,
  Gift,
  Image as ImageIcon,
  Sticker,
  Ticket,
  Zap,
} from "lucide-react";
import { TASKS } from "../data";
import { Reveal } from "./Reveal";

const REWARDS = [
  { Icon: Frame, title: "Рамка аватара", sub: "«Аура» – лавандовое свечение" },
  { Icon: ImageIcon, title: "Фон профиля", sub: "«Лавандовый туман»" },
  { Icon: Sticker, title: "Стикерпак", sub: "«Капсула настроения»" },
  { Icon: Ticket, title: "Промокод −10%", sub: "на первый заказ через OZON" },
];

function Task({
  task,
}: {
  task: (typeof TASKS)[number];
}) {
  const [claimed, setClaimed] = useState(false);
  const pct = Math.round((task.done / task.total) * 100);
  const complete = task.done >= task.total;
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:bg-white/[0.07]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-cream">{task.title}</p>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-lav/20 px-3 py-1 text-[11px] font-bold text-lav">
          <Zap className="h-3 w-3" /> +{task.xp} XP
        </span>
      </div>
      <div className="mt-3.5 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-lav-deep to-lav transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-bold text-white/60">
          {task.done}/{task.total}
        </span>
      </div>
      <button
        onClick={() => complete && setClaimed(true)}
        disabled={!complete || claimed}
        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold transition-all duration-300 ${
          claimed
            ? "bg-emerald-400/15 text-emerald-300"
            : complete
              ? "bg-lav text-ink hover:shadow-[0_10px_30px_-8px_rgba(200,182,226,0.6)]"
              : "cursor-not-allowed bg-white/5 text-white/30"
        }`}
      >
        {claimed ? (
          <>
            <BadgeCheck className="h-4 w-4" /> Получено
          </>
        ) : complete ? (
          <>
            <Gift className="h-4 w-4" /> Забрать награду
          </>
        ) : (
          "В процессе…"
        )}
      </button>
    </div>
  );
}

export default function Rewards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#141114] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          {/* glow */}
          <div className="pointer-events-none absolute -top-32 right-[10%] h-72 w-72 rounded-full bg-lav-deep/30 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 left-[5%] h-64 w-64 rounded-full bg-lav/15 blur-[100px]" />
          <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full border-[22px] border-lav/10" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* left — profile & rewards */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  <Crown className="h-3.5 w-3.5 text-lav" />
                  Достижения и бонусы
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.06] text-cream sm:text-5xl">
                  Твоя коллекция{" "}
                  <span className="italic text-lav">наград</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 max-w-md text-balance leading-relaxed text-white/55">
                  Собирай капсулы, ищи находки и зови подруг — открывай рамки,
                  фоны профиля, стикеры и промокоды.
                </p>
              </Reveal>

              {/* level */}
              <Reveal delay={0.2}>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-4">
                    <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-lav to-lav-deep text-xl font-bold text-white">
                      А
                      <span className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-ink text-[10px] font-bold text-lav ring-2 ring-[#141114]">
                        7
                      </span>
                    </span>
                    <div>
                      <p className="font-display text-xl font-semibold text-cream">
                        Уровень 7 · Иконка стиля
                      </p>
                      <p className="text-xs text-white/45">
                        до 8 уровня осталось 660 XP
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-lav-deep via-lav to-white/80" />
                    </div>
                    <span className="text-[11px] font-bold text-white/50">
                      2 340 / 3 000
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* reward chips */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {REWARDS.map((r, i) => (
                  <Reveal key={r.title} delay={0.25 + i * 0.06}>
                    <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lav/20 text-lav">
                        <r.Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0">
                        <p className="inline-flex items-center gap-1.5 text-sm font-bold text-cream">
                          {r.title}
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        </p>
                        <p className="truncate text-xs text-white/45">{r.sub}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* right — tasks */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  Задания недели
                </p>
              </Reveal>
              <div className="mt-5 flex flex-col gap-4">
                {TASKS.map((t, i) => (
                  <Reveal key={t.id} delay={0.1 + i * 0.08}>
                    <Task task={t} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.4}>
                <p className="mt-5 text-center text-xs text-white/35">
                  Новые задания — каждый понедельник в 10:00
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
