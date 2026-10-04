/* ---------- generated imagery ---------- */
export const IMG = {
  hero: "/images/hero-model.jpg",
  tryon: "/images/tryon-model.jpg",
  cozy: "/images/capsule-cozy.jpg",
  evening: "/images/capsule-evening.jpg",
  summer: "/images/capsule-summer.jpg",
  c1: "/images/community-1.jpg",
  c2: "/images/community-2.jpg",
  c3: "/images/community-3.jpg",
  c4: "/images/community-4.jpg",
  c5: "/images/community-5.jpg",
};

/* ---------- stock product photos (Pexels) ---------- */
export const PX = {
  sweaterPile:
    "https://images.pexels.com/photos/5475173/pexels-photo-5475173.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  sweaterKnit:
    "https://images.pexels.com/photos/14642651/pexels-photo-14642651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  sweaterStack:
    "https://images.pexels.com/photos/14641596/pexels-photo-14641596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  sweaterWorn:
    "https://images.pexels.com/photos/5789010/pexels-photo-5789010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  bag: "https://images.pexels.com/photos/27174573/pexels-photo-27174573.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  sneakers:
    "https://images.pexels.com/photos/4296075/pexels-photo-4296075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  dress:
    "https://images.pexels.com/photos/36409025/pexels-photo-36409025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400",
  glasses:
    "https://images.pexels.com/photos/32677214/pexels-photo-32677214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
};

/* ---------- quick search chips ---------- */
export const QUICK_CHIPS = [
  { label: "Свитер", img: PX.sweaterPile },
  { label: "Сумка", img: PX.bag },
  { label: "Кроссовки", img: PX.sneakers },
  { label: "Платье", img: PX.dress },
  { label: "Очки", img: PX.glasses },
];

/* ---------- marketplace offers ---------- */
export type Offer = {
  name: string;
  price: string;
  oldPrice?: string;
  shop: string;
  shopColor: string;
  img: string;
  best?: boolean;
  discount?: string;
};

export const OFFERS: Offer[] = [
  {
    name: "Свитер «OGGI» оверсайз, бежевый",
    price: "75,24 ₽",
    oldPrice: "94,00 ₽",
    shop: "WILDBERRIES",
    shopColor: "#cb11ab",
    img: PX.sweaterKnit,
    best: true,
    discount: "−20%",
  },
  {
    name: "Женский свитер оверсайз вязаный",
    price: "86,78 ₽",
    shop: "OZON",
    shopColor: "#005bff",
    img: PX.sweaterPile,
    discount: "−12%",
  },
  {
    name: "Свитер оверсайз с горлом",
    price: "102,03 ₽",
    shop: "Lamoda",
    shopColor: "#131112",
    img: PX.sweaterStack,
  },
];

/* ---------- marketplaces marquee ---------- */
export const SHOPS_ROW_A = [
  { name: "WILDBERRIES", color: "#cb11ab" },
  { name: "OZON", color: "#005bff" },
  { name: "Lamoda", color: "#131112" },
  { name: "Яндекс Маркет", color: "#fc3f1d" },
  { name: "ASOS", color: "#131112" },
  { name: "ZARA", color: "#131112" },
  { name: "H&M", color: "#e50010" },
];
export const SHOPS_ROW_B = [
  { name: "Золотое яблоко", color: "#b08d2f" },
  { name: "Мегамаркет", color: "#00985f" },
  { name: "LIME", color: "#131112" },
  { name: "Befree", color: "#131112" },
  { name: "Спортмастер", color: "#e30613" },
  { name: "Sela", color: "#131112" },
  { name: "12 STOREEZ", color: "#131112" },
];

/* ---------- capsules ---------- */
export const CAPSULES = [
  {
    title: "Уютная капсула на каждый день",
    items: 12,
    price: "от 4 890 ₽",
    img: IMG.cozy,
    tag: "Повседневное",
  },
  {
    title: "Вечерняя капсула",
    items: 8,
    price: "от 7 200 ₽",
    img: IMG.evening,
    tag: "Нарядное",
  },
  {
    title: "Летняя капсула",
    items: 10,
    price: "от 3 450 ₽",
    img: IMG.summer,
    tag: "Сезонное",
  },
];

/* ---------- community feed ---------- */
export const FEED = [
  {
    img: IMG.c1,
    author: "Милана К.",
    caption: "Тренч + белые кеды — моя база на весну",
    likes: 1284,
    comments: 46,
    tag: "Весенняя капсула",
  },
  {
    img: IMG.c3,
    author: "Софья Л.",
    caption: "Лавандовый кардиган нашла по фото за 2 минуты",
    likes: 976,
    comments: 31,
    tag: "Уютная капсула",
  },
  {
    img: IMG.c2,
    author: "Алина В.",
    caption: "Белая рубашка решает всё",
    likes: 2103,
    comments: 88,
    tag: "Офисная капсула",
  },
  {
    img: IMG.c4,
    author: "Дарья М.",
    caption: "Лён, солома и никаких лишних вещей",
    likes: 1547,
    comments: 52,
    tag: "Летняя капсула",
  },
  {
    img: IMG.c5,
    author: "Ева Р.",
    caption: "Собрала вечерний образ за один вечер",
    likes: 3210,
    comments: 140,
    tag: "Вечерняя капсула",
  },
];

/* ---------- rewards ---------- */
export const TASKS = [
  { id: 1, title: "Собери 5 капсул", done: 5, total: 5, xp: 300 },
  { id: 2, title: "Найди 10 товаров по фото", done: 10, total: 10, xp: 150 },
  { id: 3, title: "Пригласи подругу", done: 0, total: 1, xp: 500 },
];
