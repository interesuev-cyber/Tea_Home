// 1) Замінити USERNAME_HERE у index.html на свій Telegram username
// 2) Додавати товари в масив products нижче

const TELEGRAM_USERNAME = "https://t.me/tea_homeeee";

// Мінімальна структура товару:
const products = [
  {
    {
  id: "shu-02",
  name: "Шу Пуер • Кремовий профіль",
  category: "Пуер",
  priceUAH: 420,
  unit: "50 г",
  tags: ["спокій", "після їжі"],
  image: "",
  popular: 5
},
  },
  {
    id: "dahongpao-01",
    name: "Да Хун Пао (Уішань)",
    category: "Улун",
    priceUAH: 450,
    unit: "50 г",
    tags: ["смак", "тепло"],
    image: "",
    popular: 8
  },
  {
    id: "teaware-01",
    name: "Гайвань • біла",
    category: "Посуд",
    priceUAH: 520,
    unit: "1 шт",
    tags: ["церемонія"],
    image: "",
    popular: 6
  }
];

const els = {
  grid: document.getElementById("grid"),
  empty: document.getElementById("empty"),
  q: document.getElementById("q"),
  cat: document.getElementById("cat"),
  sort: document.getElementById("sort"),
};

function ua(n){ return new Intl.NumberFormat("uk-UA").format(n); }

function buildCategories() {
  const cats = Array.from(new Set(products.map(p => p.category))).sort();
  for (const c of cats) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    els.cat.appendChild(opt);
  }
}

function telegramLink(p){
  const text = Привіт! Хочу замовити: ${p.name} (${p.unit}). Ціна: ${p.priceUAH} грн.;
  return https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)};
}

function card(p){
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
  meta.innerHTML = `
    <span class="badge">${p.category}</span>
    <span class="badge">${p.unit}</span>
    ${p.tags?.slice(0,2).map(t => `<span class="badge">#${t}</span>`).join("") || ""}
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
    try { await navigator.clipboard.writeText(t); copy.textContent = "Скопійовано ✓"; }
    catch { copy.textContent = "Не вдалось"; }
    setTimeout(()=>copy.textContent="Скопіювати текст", 1200);
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

function applyFilters(){
  const q = (els.q.value || "").trim().toLowerCase();
  const cat = els.cat.value;
  const sort = els.sort.value;

  let list = [...products];

  if (cat !== "all") list = list.filter(p => p.category === cat);

  if (q) {
    list = list.filter(p => {
      const hay = ${p.name} ${p.category} ${(p.tags||[]).join(" ")}.toLowerCase();
      return hay.includes(q);
    });
  }

  if (sort === "price_asc") list.sort((a,b)=>a.priceUAH-b.priceUAH);
  if (sort === "price_desc") list.sort((a,b)=>b.priceUAH-a.priceUAH);
  if (sort === "popular") list.sort((a,b)=>(b.popular||0)-(a.popular||0));

  els.grid.innerHTML = "";
  for (const p of list) els.
    grid.appendChild(card(p));

  els.empty.classList.toggle("hidden", list.length !== 0);
}

buildCategories();
applyFilters();
els.q.addEventListener("input", applyFilters);
els.cat.addEventListener("change", applyFilters);
els.sort.addEventListener("change", applyFilters);
