import { useState } from "react";
import { Heart, MessageCircle, Plus, Users } from "lucide-react";
import { FEED } from "../data";
import { Kicker, Reveal } from "./Reveal";

function Card({
  item,
  index,
}: {
  item: (typeof FEED)[number];
  index: number;
}) {
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  return (
    <Reveal delay={(index % 3) * 0.08} className="mb-5 break-inside-avoid">
      <div className="group overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white shadow-[0_20px_50px_-30px_rgba(19,17,18,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-30px_rgba(111,91,167,0.45)]">
        <div className="relative overflow-hidden">
          <img
            src={item.img}
            alt={item.caption}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] ${
              index % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"
            }`}
            loading="lazy"
          />
          <span className="glass absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-ink">
            {item.tag}
          </span>
          <button
            onClick={() => setLiked(!liked)}
            className="glass absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-ink transition-transform duration-300 hover:scale-105"
            aria-label="лайк"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                liked ? "fill-rose-500 text-rose-500" : ""
              }`}
            />
            {(item.likes + (liked ? 1 : 0)).toLocaleString("ru-RU")}
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-lav to-lav-deep text-sm font-bold text-white">
              {item.author[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">
                {item.author}
              </p>
              <p className="text-[11px] text-smoke">
                {(3 + index * 4).toFixed(1)}k подписчиц
              </p>
            </div>
            <button
              onClick={() => setFollowed(!followed)}
              className={`rounded-full px-4 py-2 text-[11px] font-bold transition-all duration-300 ${
                followed
                  ? "bg-lav-soft text-lav-ink"
                  : "bg-ink text-cream hover:bg-lav-ink"
              }`}
            >
              {followed ? "Вы подписаны" : "Подписаться"}
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            {item.caption}
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs font-medium text-smoke">
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              {item.comments} комментариев
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Community() {
  return (
    <section id="community" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <Reveal>
              <Kicker>Сообщество</Kicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-balance text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                Капсулы от{" "}
                <span className="italic text-lav-ink">живых людей</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="inline-flex items-start gap-2.5 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm text-smoke">
                <Users className="mt-0.5 h-4.5 w-4.5 shrink-0 text-lav-ink" />
                Подруги могут загружать фото и искать товары вместе с тобой —
                делитесь находками и собирайте капсулы вдвоём.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <button className="group flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-bold text-cream transition-all duration-300 hover:bg-lav-ink hover:shadow-[0_16px_40px_-12px_rgba(111,91,167,0.7)]">
              <Plus className="h-4.5 w-4.5 transition-transform duration-500 group-hover:rotate-90" />
              Выложить свою капсулу
            </button>
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {FEED.map((item, i) => (
            <Card key={item.author} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
