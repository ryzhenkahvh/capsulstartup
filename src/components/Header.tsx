import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";

const NAV = [
  { label: "Главная", href: "#top" },
  { label: "Как это работает", href: "#how" },
  { label: "Категории", href: "#categories" },
  { label: "Капсулы", href: "#capsules" },
  { label: "Сообщество", href: "#community" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative flex h-4 w-8 items-center rounded-full border-[2.5px] border-current transition-transform duration-500 group-hover:rotate-90">
        <span className="mx-auto h-1.5 w-1.5 rounded-full bg-lav-deep" />
      </span>
      <span
        className={`text-lg font-semibold tracking-[0.32em] lowercase ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        capsul
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-ink/5 py-3 shadow-[0_8px_40px_-20px_rgba(19,17,18,0.15)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors duration-300 hover:bg-lav-soft hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          {[
            { Icon: Search, badge: null },
            { Icon: Bell, badge: "dot" },
            { Icon: Heart, badge: null },
            { Icon: ShoppingBag, badge: "2" },
          ].map(({ Icon, badge }, i) => (
            <button
              key={i}
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink/80 transition-all duration-300 hover:bg-lav-soft hover:text-ink"
              aria-label="icon"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              {badge === "dot" && (
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-lav-deep ring-2 ring-cream" />
              )}
              {badge === "2" && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-ink px-1 text-[10px] font-bold text-cream">
                  2
                </span>
              )}
            </button>
          ))}
          <button className="ml-1 hidden h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-lav to-lav-deep text-[13px] font-bold text-white ring-2 ring-white transition-transform duration-300 hover:scale-105 sm:grid">
            А
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-lav-soft lg:hidden"
            aria-label="menu"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.8} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-b border-ink/5 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-lav-soft"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
