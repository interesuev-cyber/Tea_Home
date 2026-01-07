// 1) Замінити USERNAME_HERE у index.html на свій Telegram username
// 2) Додавати товари в масив products нижче

const TELEGRAM_USERNAME = "tea_homeeeee";

// Мінімальна структура товару:
const products = [
  {
    id: "shu-02",
    name: "Шу Пуер",
    category: "Пуер",
    priceUAH: 420,
    unit: "50 г",
    tags: ["спокій", "після їжі"],
    image: "",
    popular: 5,
  },
  {
    id: "dahongpao-01",
    name: "Да Хун Пао",
    category: "Улун",
    priceUAH: 450,
    unit: "50 г",
    tags: ["смак", "тепло"],
    image: "",
    popular: 8,
  },
  {
    id: "flower-dragon-120g",
    name: "Квітковий чай Перлини Дракона (120 г)",
    category: "Чай",
    priceUAH: 359,
    unit: "120 г",
    tags: ["квітковий", "подарунковий", "смак"],
    image: "",
    popular: 12,
  },
  {
    id: "tea-set-symphony-east",
    name: "Набір Чайна Симфонія Сходу (12 видів)",
    category: "Набори",
    priceUAH: 749,
    unit: "12 шт",
    tags: ["набір", "подарунковий", "різноманіття"],
    image:
      "https://kovtok.com.ua/wp-content/uploads/2023/03/photo_2023-04-06_19-32-48-2.jpg",
    popular: 18,
  },
];

const els = {
  q: document.getElementById("q"),
  cat: document.getElementById("cat"),
  sort: document.getElementById("sort"),
  grid: document.getElementById("grid"),
  empty: document.getElementById("empty"),
};

function ua(n) {
  return new Intl.NumberFormat("uk-UA").format(n);
}

function telegramLink(p) {
  const text = Хочу замовити ${p.name} (${p.unit}). Ціна: ${p.priceUAH} грн;
  return "https://t.me/" + TELEGRAM_USERNAME + "?text=" + encodeURIComponent(text);
}

function buildCategories() {
  // очистити й додати "Всі"
  els.cat.innerHTML = "";
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = "Всі";
  els.cat.appendChild(all);

  // додати категорії
  const cats = Array.from(new Set(products.map((p) => p.category))).sort();
  for (const c of cats) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    els.cat.appendChild(opt);
  }
}

function card(p) {
  const div = document.createElement("div");
  div.className = "card";

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  if (p.image) {
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name;
    thumb.appendChild(img);
  } else {
    thumb.textContent = "Фото";
  }

  const body = document.createElement("div");
  body.className = "body";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = p.name;

  const meta = document.createElement("div");
  meta.className = "meta";

  const tagsHtml = (p.tags || [])
    .slice(0, 2)
    .map((t) => `<span class="badge">#${t}</span>`)
    .join("");

  meta.innerHTML = `
    <span class="badge">${p.category}</span>
    <span class="badge">${p.unit}</span>
    ${tagsHtml || ""}
  `;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = ${ua(p.priceUAH)} грн;

  const actions = document.createElement("div");
  actions.className = "actions";

  const buy = document.createElement("a");
  buy.className = "btn primary";
  buy.target = "_blank";
  buy.rel = "noopener";
  buy.href = telegramLink(p);
  buy.textContent = "Замовити";

  const copy = document.createElement("button");
  copy.className = "btn";
  copy.type = "button";
  copy.textContent = "Скопіювати текст";
  copy.onclick = async () => {
    const t = Замовлення: ${p.name} (${p.unit}) — ${p.priceUAH} грн;
    try {
      await navigator.clipboard.writeText(t);
      copy.textContent = "Скопійовано ✓";
    } catch {
      copy.textContent = "Не вдалось";
    }
    setTimeout(() => (copy.textContent = "Скопіювати текст"), 1200);
  };

  actions.appendChild(buy);
  actions.appendChild(copy);

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(price);
  body.appendChild(actions);

  div.appendChild(thumb);
  div.appendChild(body);

  return div;
}

function applyFilters() {
  const q = (els.q.value || "").trim().
