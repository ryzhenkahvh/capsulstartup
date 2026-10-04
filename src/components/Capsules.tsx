import { ArrowRight, Layers } from "lucide-react";
import { CAPSULES } from "../data";
import { Reveal, SectionHead } from "./Reveal";

export default function Capsules() {
  return (
    <section id="capsules" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker="Капсулы"
          title={
            <>
              Готовые капсулы, где{" "}
              <span className="italic text-lav-ink">всё сочетается</span>
            </>
          }
          sub="Каждая вещь в капсуле работает с каждой. Покупай образ целиком или собирай свой по частям."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CAPSULES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <a
                href="#capsules"
                className="group relative block overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(19,17,18,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_45px_90px_-35px_rgba(111,91,167,0.55)]"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="glass absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-ink">
                  <Layers className="h-3.5 w-3.5 text-lav-ink" />
                  {c.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="glass rounded-3xl border border-white/50 p-5 transition-transform duration-500">
                    <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                      {c.title}
                    </h3>
                    <div className="mt-2.5 flex items-center justify-between">
                      <p className="text-sm text-ink/70">
                        <span className="font-bold text-ink">{c.items} вещей</span>{" "}
                        · {c.price}
                      </p>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:bg-lav-ink">
                        <ArrowRight className="h-4.5 w-4.5" />
                      </span>
                    </div>
                    <p className="mt-3 max-h-0 overflow-hidden text-xs font-semibold text-lav-ink transition-all duration-500 group-hover:max-h-8">
                      Смотреть капсулу · примерка включена
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
