// 1) Замінити USERNAME_HERE у index.html на свій Telegram username
// 2) Додавати товари в масив products нижче

const TELEGRAM_USERNAME = "USERNAME_HERE";

// Мінімальна структура товару:
const products = [
  {
    id: "shen-01",
    name: "Набір з 12 видів чаю Чайна Симфонія Сходу з Фуцзянь,
    category: "Подарункові набори",
    priceUAH: 399,
    unit: " г",
    tags: ["Подарунковий набір «Чайна Симфонія Сходу» — це ретельно сформована колекція з 12 різних сортів чаю, упакована в красиву червону коробку. В кожному пакетику — 4–6 грамів чаю, тобто ідеальна порція для одного заварювання, що дозволяє повністю розкрити смак і аромат обраного сорту.

Набір дає можливість спробувати різноманітні стилі китайського чаю — від класичних улунів до червоних, білих та квіткових чаїв. Він чудово підходить як для тих, хто робить перші кроки у світі китайського чаю, так і для досвідчених любителів, які хочуть спробувати щось нове.

Цей набір стане чудовим подарунком для будь-якого приводу або просто приємним доповненням до домашньої чайної колекції. Кожен сорт запакований у кольорову обгортку, що додає естетики і полегшує вибір. «Чайна Симфонія Сходу» — це зручний спосіб доторкнутись до чайної культури Китаю та знайти улюблений смак серед багатьох.

Да Хун Пао (Великий Червоний Халат) — червона упаковка. Легендарний улун з гір Уїшань. Глибокий, «вогняний» смак із м’якою солодкістю та довгим квітково-мінеральним післясмаком.

Цзінь Цзюнь Мей (Золоті Брови) — помаранчева упаковка. Вишуканий червоний чай з молодих бруньок. Смак м’який, медово-солодкий, з легкою карамеллю. Аромат теплий, затишний.

Хуан Є Сяо Чжун (Дикий Сяо Чжун) — фіолетова упаковка. Дикий чорний чай з гірських районів. Смак глибокий, трохи деревний, з природною солодкістю. Аромат — землистий і зрілий.

Те Гуань Інь (Залізна Богиня Милосердя) — темно-зелена упаковка. Класичний улун з нотами орхідеї. Смак — м’який, чистий, квітковий. Аромат — свіжий і прозорий.

Дянь Хун (Юньнанський Червоний) — жовта упаковка. Глибокий червоний чай із провінції Юньнань. Смак — насичений, з медовою основою і квітковими нюансами.

Жоу Гуй (Коричнева Кора) — бірюзова упаковка. Ароматний улун з нотами кориці. Смак — глибокий, з легкою пряністю. Аромат — теплий, деревний.

Гуй Хуа Хун Ча (Червоний Чай з Османтусом) — синя упаковка. Червоний чай з додаванням квітів османтусу. Смак — солодкий, обволікаючий, квітковий. Аромат — запашний, тривалий.

Лао Бай Ча (Витриманий Білий Чай) — світло-бежевий. Дозрілий чай зі спокійною глибиною. Смак — м’який, трохи фініковий, з легкою солодкістю. Аромат — витончений, тривалий.

Мо Лі Мао Цзянь (Жасминовий Мао Цзянь) — світло-блакитний. Зелений чай з натуральним жасмином. Смак — чистий, квітково-солодкий, освіжаючий. Аромат — весняний, делікатний.

Тан Шао Хей Улун (Копчений Темний Улун) — коричнева упаковка. Чай із тонким ароматом деревного вугілля. Смак — м’який, димно-солодкий. Аромат — благородно копчений.

Чуань Пяо Мо Лі Пяо Сюе (Жасминовий Сніг із Сичуані) — яскраво-зелена упаковка. Поетичний жасминовий зелений чай з бруньками, схожими на сніжинки. Смак — витончений, повітряний, квітковий. Аромат розливається над чашкою.

Чень Пі Бай Ча (Білий Чай з Мандариновою Цедрою) — бежевий. Ніжний білий чай у поєднанні з ароматною цедрою. Смак — фруктовий, трохи карамельний. Аромат — яскравий цитрусовий.

ЯК ЗАВАРЮВАТИ

Температура заварювання: Зелений та жасминовий чай 80–85°C; Білий чай 85–90°C; Улун 90–95°C; Червоний (чорний) чай та копчений улун 95–100°C)

Метод настоювання:  4-6г / 0,4 – 0,6  літра;  Час – 10 хв.

Заварювання проливом: 4-6г/ 100-150мл (чайник, тіпод, гайвань); Час – 15 сек*

4-6 проливів взалежності від уподобань до міцності чаю.

Перед заварюванням треба промити окропом; *Кожний наступний пролив +15 сек."],
    image: "", // сhttps://kovtok.com.ua/wp-content/uploads/2025/05/Annotatsyya-2025-06-17-130242-600x600.jpg https://kovtok.com.ua/wp-content/uploads/2025/05/Annotatsyya-2025-06-17-130810-600x600.jpg вставити url картинки або залишити пустим
    popular: 10
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
