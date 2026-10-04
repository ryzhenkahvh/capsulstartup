import { ImagePlus, ScanSearch, ShoppingBag, UserRoundCheck } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const STEPS = [
  {
    n: "01",
    Icon: ImagePlus,
    title: "Загрузи фото",
    text: "Сфотографируй вещь, сделай скрин из соцсетей или перетащи картинку — этого достаточно.",
  },
  {
    n: "02",
    Icon: ScanSearch,
    title: "Найди товары",
    text: "Компьютерное зрение ищет похожие модели на 30+ маркетплейсах и сравнивает цены.",
  },
  {
    n: "03",
    Icon: UserRoundCheck,
    title: "Примерь капсулу",
    text: "Сгенерируй модель со своими параметрами и посмотри посадку каждой вещи на себе.",
  },
  {
    n: "04",
    Icon: ShoppingBag,
    title: "Переходи к покупке",
    text: "Оформи заказ по лучшей цене у проверенного продавца — в один клик из капсулы.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          kicker="Как это работает"
          title={
            <>
              От фото до покупки —{" "}
              <span className="italic text-lav-ink">4 шага</span>
            </>
          }
          sub="Одно фото — целый образ. CAPSUL делает поиск, примерку и сравнение цен за тебя."
        />

        <div className="relative mt-14">
          {/* connector */}
          <div className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-lav-deep/30 lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="group relative h-full rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(19,17,18,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_-30px_rgba(111,91,167,0.45)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-lav-soft text-lav-ink transition-all duration-500 group-hover:rotate-6 group-hover:bg-ink group-hover:text-lav">
                      <s.Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <span className="rounded-full bg-ink px-3.5 py-1.5 font-display text-sm font-semibold italic text-cream">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-smoke">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
