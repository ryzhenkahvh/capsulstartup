import { SHOPS_ROW_A, SHOPS_ROW_B } from "../data";
import { Reveal } from "./Reveal";

function Row({
  shops,
  slow = false,
}: {
  shops: { name: string; color: string }[];
  slow?: boolean;
}) {
  const list = [...shops, ...shops];
  return (
    <div className="mask-fade-x group overflow-hidden">
      <div
        className={`flex w-max items-center gap-4 py-2 ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={slow ? { animationDirection: "reverse" } : undefined}
      >
        {list.map((s, i) => (
          <span
            key={s.name + i}
            className="flex items-center gap-2.5 rounded-full border border-ink/8 bg-white px-6 py-3 text-sm font-bold tracking-wide shadow-sm transition-transform duration-300 hover:scale-105"
            style={{ color: s.color }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lav" />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marketplaces() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-ink/5 bg-gradient-to-b from-white to-lav-soft/50 px-6 py-12 lg:py-14">
            <div className="mb-9 text-center">
              <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                CAPSUL ищет по{" "}
                <span className="italic text-lav-ink">всем популярным</span>{" "}
                сайтам
              </p>
              <p className="mt-2 text-sm text-smoke">
                Один запрос — и цены со всех маркетплейсов перед тобой
              </p>
            </div>
            <div className="space-y-4">
              <Row shops={SHOPS_ROW_A} />
              <Row shops={SHOPS_ROW_B} slow />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
