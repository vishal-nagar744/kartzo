import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const head = (title, description) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              DEFAULT: "#1A56F0",
              dark: "#123FBE",
              bar: "#1246D0",
              ink: "#0E1730",
              muted: "#4E5D78",
              soft: "#F4F8FF"
            }
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"]
          },
          boxShadow: {
            card: "0 8px 24px rgba(16, 42, 110, 0.08)"
          }
        }
      }
    };
  </script>
  <link rel="stylesheet" href="assets/kartzo.css">
</head>
<body id="top" class="overflow-x-hidden bg-white font-sans text-brand-ink antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-bold focus:text-brand">Skip to content</a>

  <div class="bg-brand-bar text-white">
    <div class="pad flex h-10 w-full items-center justify-between gap-4 text-[12.5px] font-semibold sm:h-11 sm:text-[13px]">
      <p class="flex min-w-0 items-center gap-2">
        <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>
        <span class="truncate">Free Shipping on orders ₹499+</span>
      </p>
      <ul class="hidden items-center gap-8 md:flex">
        <li class="flex items-center gap-2"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 4v4h4"/></svg>7 Days Easy Returns</li>
        <li class="flex items-center gap-2"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>100% Secure Payment</li>
      </ul>
      <a href="index.html#app" class="inline-flex shrink-0 items-center gap-2 hover:underline">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
        <span class="sm:hidden">Get 10% OFF</span>
        <span class="hidden sm:inline">Download App &amp; Get 10% OFF</span>
      </a>
    </div>
  </div>
`;

function nav(active) {
  const items = [
    ["index.html", "Home", "home"],
    ["products.html", "Shop", "shop"],
    ["categories.html", "Categories", "categories"],
    ["deals.html", "Deals", "deals"],
    ["orders.html", "Orders", "orders"],
    ["about.html", "About", "about"]
  ];
  const link = (href, label, key, mobile = false) => {
    const on = active === key;
    if (mobile) {
      return `<a href="${href}" class="rounded-lg px-3 py-3 text-sm ${on ? "font-bold text-brand" : "font-semibold text-[#3c4a66]"}">${label}</a>`;
    }
    return `<a href="${href}" class="inline-flex h-full items-center border-b-2 px-3.5 text-sm ${on ? "border-brand font-bold text-brand" : "border-transparent font-semibold text-[#3c4a66] hover:text-brand"}">${label}</a>`;
  };
  return `
  <header class="sticky top-0 z-50 border-b border-[#e8eef8] bg-white/95 backdrop-blur">
    <div class="pad flex h-[68px] w-full items-center lg:h-[76px]">
      <a href="index.html" class="shrink-0" aria-label="Kartzo home">
        <img src="assets/logo.webp" alt="Kartzo" width="541" height="168" class="h-8 w-auto sm:h-10">
      </a>
      <nav class="ml-6 hidden h-full items-center gap-1 lg:ml-10 lg:flex" aria-label="Primary">
        ${items.map(([h, l, k]) => link(h, l, k)).join("\n        ")}
      </nav>
      <form class="search-form ml-auto hidden w-full max-w-[440px] items-center pl-6 md:flex" action="products.html" method="get" role="search">
        <label for="search" class="sr-only">Search products</label>
        <div class="flex w-full items-center rounded-full border border-[#d9e4f7] bg-[#f3f7ff] py-1 pl-4 pr-1">
          <input id="search" name="q" class="search-input w-full bg-transparent text-sm text-brand-ink outline-none placeholder:text-[#93a0b8]" type="search" placeholder="Search products, brands...">
          <button type="submit" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-dark" aria-label="Search">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </button>
        </div>
      </form>
      <div class="ml-auto flex shrink-0 items-center gap-1 sm:gap-2.5 md:ml-4 lg:gap-3">
        <a href="wishlist.html" class="flex min-h-11 min-w-10 flex-col items-center justify-center rounded-xl px-1.5 text-[#3c4a66] transition-colors duration-200 hover:bg-brand-soft sm:min-w-11 sm:px-2" aria-label="Wishlist">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"/></svg>
          <span class="hidden text-[10px] font-bold sm:block">Wishlist</span>
        </a>
        <a href="cart.html" class="relative flex min-h-11 min-w-10 flex-col items-center justify-center rounded-xl px-1.5 text-[#3c4a66] transition-colors duration-200 hover:bg-brand-soft sm:min-w-11 sm:px-2" aria-label="Cart, 2 items">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.2 11h11.3l1.8-7H7"/></svg>
          <span id="cart-count" class="absolute right-0.5 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white">2</span>
          <span class="hidden text-[10px] font-bold sm:block">Cart</span>
        </a>
        <a href="account.html" class="flex min-h-11 min-w-10 flex-col items-center justify-center rounded-xl px-1.5 text-[#3c4a66] transition-colors duration-200 hover:bg-brand-soft sm:min-w-11 sm:px-2" aria-label="Account">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19"/></svg>
          <span class="hidden text-[10px] font-bold sm:block">Account</span>
        </a>
        <button id="menu-btn" type="button" class="ml-1 flex h-11 w-11 items-center justify-center rounded-xl text-brand-ink hover:bg-brand-soft lg:hidden" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobile-nav" class="hidden border-t border-[#e8eef8] bg-white lg:hidden">
      <nav class="pad flex w-full flex-col gap-1 py-3" aria-label="Mobile">
        ${items.map(([h, l, k]) => link(h, l, k, true)).join("\n        ")}
      </nav>
      <form class="search-form pad pb-3" action="products.html" method="get" role="search">
        <label for="search-mobile" class="sr-only">Search products</label>
        <div class="flex items-center rounded-full border border-[#d9e4f7] bg-[#f3f7ff] py-1 pl-4 pr-1">
          <input id="search-mobile" name="q" class="search-input w-full bg-transparent py-2 text-base text-brand-ink outline-none placeholder:text-[#93a0b8]" type="search" placeholder="Search products, brands...">
          <button type="submit" class="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white" aria-label="Search">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </button>
        </div>
      </form>
    </div>
  </header>
`;
}

const footer = `
  <footer class="border-t border-[#e8eef8] bg-white">
    <div class="pad mx-auto grid w-full gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="assets/logo.webp" alt="Kartzo" width="541" height="168" class="h-10 w-auto">
        <p class="mt-3 max-w-xs text-sm leading-relaxed text-brand-muted">Quality products, better prices, faster delivery.</p>
        <ul class="mt-4 flex gap-2">
          <li><a href="about.html" class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f7ff] text-brand hover:bg-brand hover:text-white" aria-label="Facebook"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a></li>
          <li><a href="about.html" class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f7ff] text-brand hover:bg-brand hover:text-white" aria-label="Instagram"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg></a></li>
          <li><a href="about.html" class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f7ff] text-brand hover:bg-brand hover:text-white" aria-label="YouTube"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.2s0-3.2-.4-4.6c-.2-.8-.9-1.5-1.7-1.7C18.4 5.5 12 5.5 12 5.5s-6.4 0-7.9.4c-.8.2-1.5.9-1.7 1.7C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.8.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.4.4-4.6.4-4.6zM10 15.5v-6.6l6 3.3-6 3.3z"/></svg></a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-extrabold">Shop</h2>
        <ul class="mt-3 space-y-2 text-sm text-brand-muted">
          <li><a class="hover:text-brand" href="index.html">Home</a></li>
          <li><a class="hover:text-brand" href="products.html">All Products</a></li>
          <li><a class="hover:text-brand" href="categories.html">Categories</a></li>
          <li><a class="hover:text-brand" href="deals.html">Deals</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-extrabold">Account</h2>
        <ul class="mt-3 space-y-2 text-sm text-brand-muted">
          <li><a class="hover:text-brand" href="orders.html">My Orders</a></li>
          <li><a class="hover:text-brand" href="wishlist.html">Wishlist</a></li>
          <li><a class="hover:text-brand" href="cart.html">Cart</a></li>
          <li><a class="hover:text-brand" href="account.html">Profile</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-extrabold">Help</h2>
        <ul class="mt-3 space-y-2 text-sm text-brand-muted">
          <li><a class="hover:text-brand" href="about.html">About Us</a></li>
          <li><a class="hover:text-brand" href="about.html#contact">Contact</a></li>
          <li><a class="hover:text-brand" href="mailto:support@kartzo.com">support@kartzo.com</a></li>
          <li><a class="hover:text-brand" href="tel:+919876543210">+91 98765 43210</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-[#e8eef8]">
      <div class="pad mx-auto flex w-full flex-col gap-2 py-4 text-xs text-[#7d8aa3] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kartzo. All rights reserved.</p>
        <p class="flex gap-3"><a class="hover:text-brand" href="about.html">Privacy</a><a class="hover:text-brand" href="about.html">Terms</a></p>
      </div>
    </div>
  </footer>
  <script src="assets/kartzo.js"></script>
`;

function productCard({ href, img, alt, badge, badgeClass, name, sub, rating, price, mrp, data }) {
  return `<article class="product relative flex flex-col rounded-2xl border border-[#e6eefb] bg-white p-2.5 shadow-[0_2px_10px_rgba(15,50,120,0.04)] transition duration-200 hover:border-[#b9d0ff] hover:shadow-card" data-name="${data}" data-cat="${data.split(" ")[0]}">
          <span class="absolute left-2.5 top-2.5 z-10 rounded-md ${badgeClass} px-1.5 py-0.5 text-[10px] font-extrabold text-white">${badge}</span>
          <button type="button" class="wish absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand shadow-md" aria-pressed="false" aria-label="Add ${name} to wishlist"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"/></svg></button>
          <a href="${href}" class="flex h-28 items-center justify-center sm:h-32"><img src="${img}" alt="${alt}" width="800" height="800" class="h-24 w-auto object-contain" loading="lazy"></a>
          <a href="${href}" class="mt-1 text-[13px] font-bold leading-tight hover:text-brand">${name}</a>
          <p class="text-[11px] text-[#7d8aa3]">${sub}</p>
          <p class="mt-1 text-[11px] text-[#8b97ad]"><span class="text-amber-400" aria-hidden="true">★★★★★</span> ${rating}</p>
          <p class="mt-1 flex items-baseline justify-between"><span class="text-[15px] font-extrabold">${price}</span><span class="text-[11px] text-[#a8b1c2] line-through">${mrp}</span></p>
          <button type="button" class="add-cart mt-2 min-h-11 rounded-lg bg-brand text-xs font-bold text-white hover:bg-brand-dark">Add to Cart</button>
        </article>`;
}

const products = [
  { href: "product.html", img: "assets/p-headphones.webp", alt: "Wireless Headphones", badge: "-30%", badgeClass: "bg-[#ef3b3b]", name: "Wireless Headphones", sub: "Bluetooth 5.3", rating: "4.8 (2.1K)", price: "₹2,799", mrp: "₹3,999", data: "electronics headphones bluetooth" },
  { href: "product.html", img: "assets/p-watch.webp", alt: "Smart Watch", badge: "-40%", badgeClass: "bg-[#ef3b3b]", name: "Smart Watch", sub: "AMOLED Display", rating: "4.6 (1.8K)", price: "₹3,499", mrp: "₹5,832", data: "electronics watch amoled" },
  { href: "product.html", img: "assets/p-shoes.webp", alt: "Running Shoes", badge: "-40%", badgeClass: "bg-[#ef3b3b]", name: "Men's Running Shoes", sub: "Comfort & Style", rating: "4.7 (2.6K)", price: "₹2,399", mrp: "₹3,998", data: "fashion sports shoes" },
  { href: "product.html", img: "assets/p-phone.webp", alt: "Smartphone", badge: "-25%", badgeClass: "bg-[#ef3b3b]", name: "Smartphone 128GB", sub: "Super Retina", rating: "4.8 (4.1K)", price: "₹54,999", mrp: "₹73,332", data: "electronics mobile phone" },
  { href: "product.html", img: "assets/p-fryer.webp", alt: "Air Fryer", badge: "-25%", badgeClass: "bg-[#ef3b3b]", name: "Air Fryer 5L", sub: "Healthy Cooking", rating: "4.5 (1.3K)", price: "₹4,499", mrp: "₹5,999", data: "kitchen fryer" },
  { href: "product.html", img: "assets/p-backpack.webp", alt: "Backpack", badge: "-30%", badgeClass: "bg-[#ef3b3b]", name: "Laptop Backpack", sub: "Water Resistant", rating: "4.6 (2.5K)", price: "₹1,299", mrp: "₹1,856", data: "bags backpack" },
  { href: "product.html", img: "assets/p-earbuds.webp", alt: "TWS Earbuds", badge: "New", badgeClass: "bg-brand", name: "TWS Earbuds", sub: "Noise Cancel", rating: "4.7 (1.5K)", price: "₹1,999", mrp: "₹2,799", data: "electronics earbuds" },
  { href: "product.html", img: "assets/p-perfume.webp", alt: "Perfume", badge: "New", badgeClass: "bg-brand", name: "Premium Perfume", sub: "Long Lasting", rating: "4.5 (1.3K)", price: "₹1,299", mrp: "₹1,999", data: "beauty perfume" },
  { href: "product.html", img: "assets/p-blender.webp", alt: "Blender", badge: "New", badgeClass: "bg-brand", name: "Portable Blender", sub: "USB Charge", rating: "4.6 (982)", price: "₹1,799", mrp: "₹2,399", data: "kitchen blender" },
  { href: "product.html", img: "assets/p-sunglasses.webp", alt: "Sunglasses", badge: "New", badgeClass: "bg-brand", name: "UV Sunglasses", sub: "Stylish", rating: "4.4 (654)", price: "₹1,399", mrp: "₹1,999", data: "fashion sunglasses" },
  { href: "product.html", img: "assets/p-luggage.webp", alt: "Luggage", badge: "New", badgeClass: "bg-brand", name: "Travel Luggage", sub: "Durable", rating: "4.6 (1.1K)", price: "₹2,999", mrp: "₹4,499", data: "bags luggage" },
  { href: "product.html", img: "assets/p-chair.webp", alt: "Gaming Chair", badge: "New", badgeClass: "bg-brand", name: "Gaming Chair", sub: "Ergonomic", rating: "4.8 (765)", price: "₹8,999", mrp: "₹12,999", data: "home chair gaming" }
];

const crumbs = (items) => `<nav class="pad pt-5 text-xs text-brand-muted" aria-label="Breadcrumb">
      <ol class="flex flex-wrap items-center gap-1.5">
        ${items.map((item, i) => i === items.length - 1
          ? `<li class="font-semibold text-brand-ink">${item.label}</li>`
          : `<li><a class="hover:text-brand" href="${item.href}">${item.label}</a></li><li aria-hidden="true">/</li>`
        ).join("")}
      </ol>
    </nav>`;

function page(file, title, description, active, body, extraScript = "") {
  const html = `${head(title, description)}${nav(active)}
  <main id="main">
${body}
  </main>
${footer}
${extraScript}
</body>
</html>
`;
  writeFileSync(join(root, file), html);
  console.log("wrote", file);
}

// PRODUCTS
page("products.html", "Shop — Kartzo", "Browse Kartzo products with filters and deals.", "shop", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Shop" }])}
    <section class="pad w-full py-5">
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">All <span class="text-brand">Products</span></h1>
          <p class="mt-1 text-sm text-brand-muted">12 items • Free shipping on ₹499+</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <label class="sr-only" for="sort">Sort</label>
          <select id="sort" class="min-h-11 rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold text-brand-ink">
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      <div class="grid gap-5 lg:grid-cols-[220px_1fr]">
        <aside class="h-fit rounded-2xl border border-[#e6eefb] bg-[#f8fbff] p-4">
          <h2 class="text-sm font-extrabold">Filters</h2>
          <div class="mt-3 space-y-2" id="filters">
            ${["All", "Electronics", "Fashion", "Kitchen", "Beauty", "Bags", "Home"].map((c, i) => `
            <label class="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#3c4a66] hover:bg-white">
              <input type="radio" name="cat" value="${c.toLowerCase()}" class="accent-brand" ${i === 0 ? "checked" : ""}>
              ${c}
            </label>`).join("")}
          </div>
        </aside>
        <div>
          <p id="search-empty" class="mb-4 hidden rounded-xl bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-dark" role="status"></p>
          <div id="product-grid" class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            ${products.map(productCard).join("\n            ")}
          </div>
        </div>
      </div>
    </section>
`, `<script>
  (function () {
    var params = new URLSearchParams(location.search);
    var q = (params.get("q") || "").trim().toLowerCase();
    var empty = document.getElementById("search-empty");
    var inputs = document.querySelectorAll(".search-input");
    inputs.forEach(function (i) { if (q) i.value = params.get("q"); });
    function apply() {
      var cat = (document.querySelector('input[name="cat"]:checked') || {}).value || "all";
      var shown = 0;
      document.querySelectorAll(".product").forEach(function (card) {
        var name = card.getAttribute("data-name") || "";
        var matchQ = !q || name.indexOf(q) !== -1;
        var matchC = cat === "all" || name.indexOf(cat) !== -1;
        var show = matchQ && matchC;
        card.classList.toggle("hidden", !show);
        if (show) shown += 1;
      });
      if (shown === 0) {
        empty.textContent = "No products found.";
        empty.classList.remove("hidden");
      } else {
        empty.classList.add("hidden");
      }
    }
    document.querySelectorAll('input[name="cat"]').forEach(function (r) {
      r.addEventListener("change", apply);
    });
    apply();
  })();
</script>`);

// PRODUCT DETAIL
page("product.html", "Wireless Headphones — Kartzo", "Buy Wireless Headphones at better prices on Kartzo.", "shop", `
    ${crumbs([{ href: "index.html", label: "Home" }, { href: "products.html", label: "Shop" }, { label: "Wireless Headphones" }])}
    <section class="pad w-full py-6">
      <div class="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div class="flex aspect-square items-center justify-center rounded-3xl border border-[#e6eefb] bg-[#f7f9fc] p-6">
          <img src="assets/p-headphones.webp" alt="Wireless Headphones" width="800" height="800" class="max-h-full w-auto object-contain">
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-brand">Electronics</p>
          <h1 class="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">Wireless Headphones</h1>
          <p class="mt-2 text-sm text-brand-muted">Bluetooth 5.3 • 40hr battery • Noise isolation</p>
          <p class="mt-3 text-sm text-[#8b97ad]"><span class="text-amber-400">★★★★★</span> 4.8 (2.1K reviews)</p>
          <p class="mt-4 flex items-baseline gap-3">
            <span class="text-3xl font-extrabold">₹2,799</span>
            <span class="text-sm text-[#a8b1c2] line-through">₹3,999</span>
            <span class="rounded-md bg-[#ef3b3b] px-2 py-0.5 text-xs font-extrabold text-white">-30%</span>
          </p>
          <div class="mt-5 flex flex-wrap items-center gap-3">
            <div data-qty data-min="1" data-max="5" class="inline-flex items-center rounded-xl border border-[#d9e4f7] bg-[#f3f7ff]">
              <button type="button" class="qty-btn qty-minus flex h-11 w-11 items-center justify-center text-lg font-bold" aria-label="Decrease">−</button>
              <span data-qty-value class="min-w-[2rem] text-center text-sm font-extrabold">1</span>
              <button type="button" class="qty-btn qty-plus flex h-11 w-11 items-center justify-center text-lg font-bold" aria-label="Increase">+</button>
            </div>
            <button type="button" class="add-cart min-h-11 flex-1 rounded-xl bg-brand px-6 text-sm font-bold text-white hover:bg-brand-dark sm:flex-none">Add to Cart</button>
            <a href="checkout.html" class="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-brand px-6 text-sm font-bold text-brand hover:bg-brand-soft sm:flex-none">Buy Now</a>
          </div>
          <ul class="mt-6 grid gap-2 text-sm text-brand-muted sm:grid-cols-2">
            <li class="rounded-xl bg-brand-soft px-3 py-2 font-semibold text-brand-ink">✓ Free shipping</li>
            <li class="rounded-xl bg-brand-soft px-3 py-2 font-semibold text-brand-ink">✓ 7-day returns</li>
            <li class="rounded-xl bg-brand-soft px-3 py-2 font-semibold text-brand-ink">✓ Secure payment</li>
            <li class="rounded-xl bg-brand-soft px-3 py-2 font-semibold text-brand-ink">✓ 1-year warranty</li>
          </ul>
        </div>
      </div>
      <div class="mt-10">
        <h2 class="mb-4 text-xl font-extrabold">You may also <span class="text-brand">like</span></h2>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          ${products.slice(1, 5).map(productCard).join("\n          ")}
        </div>
      </div>
    </section>
`);

// CATEGORIES
const cats = [
  ["Electronics", "assets/p-headphones.webp"],
  ["Fashion", "assets/c-fashion.webp"],
  ["Home & Living", "assets/c-home.webp"],
  ["Beauty", "assets/p-perfume.webp"],
  ["Kitchen", "assets/p-fryer.webp"],
  ["Sports", "assets/p-shoes.webp"],
  ["Toys & Games", "assets/c-toys.webp"],
  ["Mobile", "assets/p-phone.webp"],
  ["Bags", "assets/p-backpack.webp"],
  ["Health", "assets/c-health.webp"]
];
page("categories.html", "Categories — Kartzo", "Shop by category on Kartzo.", "categories", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Categories" }])}
    <section class="pad w-full py-6">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">Shop by <span class="text-brand">Category</span></h1>
      <p class="mt-1 text-sm text-brand-muted">Find what you need, faster.</p>
      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        ${cats.map(([name, img]) => `
        <a href="products.html" class="group flex flex-col items-center gap-3 rounded-2xl border border-[#e6eefb] bg-[#f7f9fc] p-4 transition hover:border-brand hover:bg-white hover:shadow-card">
          <span class="flex aspect-square w-full items-center justify-center p-2"><img src="${img}" alt="" width="800" height="800" class="h-full w-full object-contain"></span>
          <span class="text-center text-sm font-bold text-brand-ink group-hover:text-brand">${name}</span>
        </a>`).join("")}
      </div>
    </section>
`);

// DEALS
page("deals.html", "Deals — Kartzo", "Limited-time deals on Kartzo.", "deals", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Deals" }])}
    <section class="pad w-full py-6">
      <div class="relative mb-6 overflow-hidden rounded-3xl bg-[#0b47e8]">
        <img src="assets/deals.webp" alt="" width="2150" height="439" class="h-[180px] w-full object-cover object-right sm:h-[220px]">
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0837c4] via-[#0837c4]/70 to-transparent"></div>
        <div class="absolute inset-0 flex items-center px-5">
          <div class="text-white">
            <p class="text-[10px] font-bold uppercase tracking-wider">Limited Time</p>
            <h1 class="mt-1 text-2xl font-extrabold sm:text-4xl">Up to 60% OFF</h1>
            <p class="mt-1 text-sm text-white/85">Top picks at better prices.</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        ${products.filter(p => p.badgeClass.includes("ef3b3b")).concat(products.slice(6, 10)).map(productCard).join("\n        ")}
      </div>
    </section>
`);

// CART
page("cart.html", "Cart — Kartzo", "Your Kartzo shopping cart.", "shop", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Cart" }])}
    <section class="pad w-full py-6">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">Your <span class="text-brand">Cart</span></h1>
      <p class="mt-1 text-sm text-brand-muted">2 items</p>
      <div class="mt-6 grid gap-5 lg:grid-cols-[1fr_340px]">
        <div class="space-y-3" id="cart-items">
          ${[
            ["assets/p-headphones.webp", "Wireless Headphones", "Bluetooth 5.3", "₹2,799", "1"],
            ["assets/p-watch.webp", "Smart Watch", "AMOLED Display", "₹3,499", "1"]
          ].map(([img, name, sub, price, qty]) => `
          <article class="cart-item flex gap-3 rounded-2xl border border-[#e6eefb] bg-white p-3 sm:gap-4 sm:p-4" data-price="${price.replace(/[₹,]/g, "")}">
            <a href="product.html" class="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#f7f9fc] sm:h-28 sm:w-28">
              <img src="${img}" alt="${name}" class="h-20 w-auto object-contain" width="800" height="800">
            </a>
            <div class="min-w-0 flex-1">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <a href="product.html" class="text-sm font-extrabold hover:text-brand sm:text-base">${name}</a>
                  <p class="text-xs text-brand-muted">${sub}</p>
                </div>
                <button type="button" class="remove-item rounded-lg p-2 text-[#93a0b8] hover:bg-brand-soft hover:text-brand" aria-label="Remove ${name}">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7h14M10 7V5h4v2m-5 3v8m4-8v8M7 7l1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12"/></svg>
                </button>
              </div>
              <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div data-qty data-min="1" data-max="5" class="inline-flex items-center rounded-xl border border-[#d9e4f7] bg-[#f3f7ff]">
                  <button type="button" class="qty-btn qty-minus flex h-10 w-10 items-center justify-center font-bold" aria-label="Decrease">−</button>
                  <span data-qty-value class="min-w-[1.5rem] text-center text-sm font-extrabold">${qty}</span>
                  <button type="button" class="qty-btn qty-plus flex h-10 w-10 items-center justify-center font-bold" aria-label="Increase">+</button>
                </div>
                <p class="text-base font-extrabold line-total">${price}</p>
              </div>
            </div>
          </article>`).join("")}
        </div>
        <aside class="h-fit rounded-2xl border border-[#e6eefb] bg-[#f8fbff] p-5">
          <h2 class="text-sm font-extrabold">Order Summary</h2>
          <dl class="mt-4 space-y-2 text-sm">
            <div class="flex justify-between"><dt class="text-brand-muted">Subtotal</dt><dd id="subtotal" class="font-bold">₹6,298</dd></div>
            <div class="flex justify-between"><dt class="text-brand-muted">Shipping</dt><dd class="font-bold text-[#059669]">Free</dd></div>
            <div class="flex justify-between border-t border-[#e6eefb] pt-3 text-base"><dt class="font-extrabold">Total</dt><dd id="total" class="font-extrabold text-brand">₹6,298</dd></div>
          </dl>
          <a href="checkout.html" class="mt-5 flex min-h-11 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white hover:bg-brand-dark">Checkout →</a>
          <a href="products.html" class="mt-2 flex min-h-11 items-center justify-center rounded-xl text-sm font-bold text-brand hover:underline">Continue Shopping</a>
        </aside>
      </div>
    </section>
`, `<script>
  (function () {
    function format(n) { return "₹" + n.toLocaleString("en-IN"); }
    function recalc() {
      var total = 0, items = 0;
      document.querySelectorAll(".cart-item").forEach(function (row) {
        var price = parseInt(row.getAttribute("data-price"), 10) || 0;
        var qty = parseInt(row.querySelector("[data-qty-value]").textContent, 10) || 1;
        var line = price * qty;
        total += line;
        items += qty;
        row.querySelector(".line-total").textContent = format(line);
      });
      document.getElementById("subtotal").textContent = format(total);
      document.getElementById("total").textContent = format(total);
      if (window.Kartzo) Kartzo.setCart(items);
    }
    document.getElementById("cart-items").addEventListener("qtychange", recalc);
    document.querySelectorAll(".remove-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.closest(".cart-item").remove();
        recalc();
      });
    });
  })();
</script>`);

// CHECKOUT
page("checkout.html", "Checkout — Kartzo", "Complete your Kartzo order.", "shop", `
    ${crumbs([{ href: "index.html", label: "Home" }, { href: "cart.html", label: "Cart" }, { label: "Checkout" }])}
    <section class="pad w-full py-6">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">Check<span class="text-brand">out</span></h1>
      <form id="checkout-form" class="mt-6 grid gap-5 lg:grid-cols-[1fr_340px]" novalidate>
        <div class="space-y-4">
          <div class="rounded-2xl border border-[#e6eefb] p-4 sm:p-5">
            <h2 class="text-sm font-extrabold">Delivery Address</h2>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <label class="block text-xs font-bold text-brand-muted sm:col-span-1">Full Name<input required name="name" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold text-brand-ink" value="Rahul Mehta"></label>
              <label class="block text-xs font-bold text-brand-muted">Phone<input required name="phone" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold text-brand-ink" value="+91 98765 43210"></label>
              <label class="block text-xs font-bold text-brand-muted sm:col-span-2">Address<textarea required name="address" rows="2" class="mt-1 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 py-3 text-sm font-semibold text-brand-ink">12 MG Road, Vijay Nagar</textarea></label>
              <label class="block text-xs font-bold text-brand-muted">City<input required name="city" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold text-brand-ink" value="Indore"></label>
              <label class="block text-xs font-bold text-brand-muted">PIN<input required name="pin" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold text-brand-ink" value="452010"></label>
            </div>
          </div>
          <div class="rounded-2xl border border-[#e6eefb] p-4 sm:p-5">
            <h2 class="text-sm font-extrabold">Payment</h2>
            <div class="mt-3 space-y-2">
              <label class="flex items-center gap-3 rounded-xl border border-brand bg-brand-soft px-3 py-3 text-sm font-bold"><input type="radio" name="pay" value="upi" checked class="accent-brand"> UPI</label>
              <label class="flex items-center gap-3 rounded-xl border border-[#e6eefb] px-3 py-3 text-sm font-semibold"><input type="radio" name="pay" value="card" class="accent-brand"> Card</label>
              <label class="flex items-center gap-3 rounded-xl border border-[#e6eefb] px-3 py-3 text-sm font-semibold"><input type="radio" name="pay" value="cod" class="accent-brand"> Cash on Delivery</label>
            </div>
          </div>
        </div>
        <aside class="h-fit rounded-2xl border border-[#e6eefb] bg-[#f8fbff] p-5">
          <h2 class="text-sm font-extrabold">Summary</h2>
          <ul class="mt-3 space-y-2 text-sm">
            <li class="flex justify-between gap-2"><span class="text-brand-muted">Headphones × 1</span><span class="font-bold">₹2,799</span></li>
            <li class="flex justify-between gap-2"><span class="text-brand-muted">Smart Watch × 1</span><span class="font-bold">₹3,499</span></li>
          </ul>
          <div class="mt-4 flex justify-between border-t border-[#e6eefb] pt-3 text-base font-extrabold">
            <span>Total</span><span class="text-brand">₹6,298</span>
          </div>
          <button type="submit" class="mt-5 flex min-h-11 w-full items-center justify-center rounded-xl bg-brand text-sm font-bold text-white hover:bg-brand-dark">Place Order</button>
          <p id="checkout-msg" class="mt-2 text-xs font-semibold" role="status"></p>
        </aside>
      </form>
    </section>
`, `<script>
  document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!this.checkValidity()) { this.reportValidity(); return; }
    window.location.href = "orders.html?placed=1";
  });
</script>`);

// ORDERS
page("orders.html", "Orders — Kartzo", "Track and manage your Kartzo orders.", "orders", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Orders" }])}
    <section class="pad w-full py-6">
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">My <span class="text-brand">Orders</span></h1>
          <p class="mt-1 text-sm text-brand-muted">Track deliveries and reorder anytime.</p>
        </div>
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Order filters">
          ${["All", "Active", "Delivered"].map((t, i) => `
          <button type="button" data-filter="${t.toLowerCase()}" class="order-filter min-h-10 rounded-full px-4 text-xs font-extrabold ${i === 0 ? "bg-brand text-white" : "border border-[#d9e4f7] bg-white text-[#3c4a66]"}">${t}</button>`).join("")}
        </div>
      </div>
      <p id="placed-banner" class="mb-4 hidden rounded-xl bg-[#e7f8ef] px-4 py-3 text-sm font-bold text-[#059669]">Order placed successfully. We'll notify you on shipping.</p>
      <div class="space-y-3" id="orders-list">
        ${[
          { id: "KZ-10482", date: "6 Oct 2026", status: "shipped", label: "Shipped", items: [["assets/p-headphones.webp", "Wireless Headphones", "₹2,799"]], total: "₹2,799", active: true },
          { id: "KZ-10391", date: "28 Sep 2026", status: "delivered", label: "Delivered", items: [["assets/p-shoes.webp", "Men's Running Shoes", "₹2,399"], ["assets/p-backpack.webp", "Laptop Backpack", "₹1,299"]], total: "₹3,698", active: false },
          { id: "KZ-10255", date: "12 Sep 2026", status: "processing", label: "Processing", items: [["assets/p-earbuds.webp", "TWS Earbuds", "₹1,999"]], total: "₹1,999", active: true },
          { id: "KZ-10110", date: "2 Aug 2026", status: "cancelled", label: "Cancelled", items: [["assets/p-perfume.webp", "Premium Perfume", "₹1,299"]], total: "₹1,299", active: false }
        ].map(o => `
        <article class="order-card rounded-2xl border border-[#e6eefb] bg-white p-4 sm:p-5" data-status="${o.status}" data-active="${o.active ? "1" : "0"}">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p class="text-sm font-extrabold">${o.id}</p>
              <p class="text-xs text-brand-muted">Placed ${o.date}</p>
            </div>
            <span class="status-pill status-${o.status}">${o.label}</span>
          </div>
          <ul class="mt-4 space-y-3">
            ${o.items.map(([img, name, price]) => `
            <li class="flex items-center gap-3">
              <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7f9fc]"><img src="${img}" alt="" class="h-10 w-auto object-contain" width="800" height="800"></span>
              <span class="min-w-0 flex-1">
                <span class="block truncate text-sm font-bold">${name}</span>
                <span class="text-xs text-brand-muted">${price}</span>
              </span>
            </li>`).join("")}
          </ul>
          <div class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#eef2f8] pt-3">
            <p class="text-sm font-extrabold">Total <span class="text-brand">${o.total}</span></p>
            <div class="flex flex-wrap gap-2">
              ${o.status === "shipped" || o.status === "processing" ? `<a href="orders.html#track" class="inline-flex min-h-10 items-center rounded-lg bg-brand px-4 text-xs font-bold text-white hover:bg-brand-dark">Track</a>` : ""}
              ${o.status === "delivered" ? `<a href="product.html" class="inline-flex min-h-10 items-center rounded-lg bg-brand px-4 text-xs font-bold text-white hover:bg-brand-dark">Buy Again</a>` : ""}
              <a href="product.html" class="inline-flex min-h-10 items-center rounded-lg border border-[#d9e4f7] px-4 text-xs font-bold text-brand">Details</a>
            </div>
          </div>
        </article>`).join("")}
      </div>
      <div id="track" class="mt-8 rounded-2xl border border-[#e6eefb] bg-[#f8fbff] p-5">
        <h2 class="text-sm font-extrabold">Track Order</h2>
        <p class="mt-1 text-xs text-brand-muted">KZ-10482 • Expected by 10 Oct</p>
        <ol class="mt-5 grid gap-3 sm:grid-cols-4">
          ${[
            ["Ordered", "done"],
            ["Packed", "done"],
            ["Shipped", "current"],
            ["Delivered", ""]
          ].map(([label, state]) => `
          <li class="rounded-xl bg-white px-3 py-3 text-center text-xs font-bold ${state === "done" ? "text-[#059669]" : state === "current" ? "text-brand ring-2 ring-brand" : "text-[#93a0b8]"}">${label}</li>`).join("")}
        </ol>
      </div>
    </section>
`, `<script>
  (function () {
    if (new URLSearchParams(location.search).get("placed") === "1") {
      document.getElementById("placed-banner").classList.remove("hidden");
    }
    var buttons = document.querySelectorAll(".order-filter");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.className = "order-filter min-h-10 rounded-full px-4 text-xs font-extrabold border border-[#d9e4f7] bg-white text-[#3c4a66]";
        });
        btn.className = "order-filter min-h-10 rounded-full px-4 text-xs font-extrabold bg-brand text-white";
        var f = btn.getAttribute("data-filter");
        document.querySelectorAll(".order-card").forEach(function (card) {
          var show = f === "all" || (f === "active" && card.getAttribute("data-active") === "1") || (f === "delivered" && card.getAttribute("data-status") === "delivered");
          card.classList.toggle("hidden", !show);
        });
      });
    });
  })();
</script>`);

// WISHLIST
page("wishlist.html", "Wishlist — Kartzo", "Saved products on Kartzo.", "shop", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Wishlist" }])}
    <section class="pad w-full py-6">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">Your <span class="text-brand">Wishlist</span></h1>
      <p class="mt-1 text-sm text-brand-muted">4 saved items</p>
      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        ${products.slice(0, 4).map(p => productCard({ ...p, badge: "Saved", badgeClass: "bg-brand" })).join("\n        ")}
      </div>
    </section>
`);

// ACCOUNT
page("account.html", "Account — Kartzo", "Manage your Kartzo account.", "home", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "Account" }])}
    <section class="pad w-full py-6">
      <div class="flex flex-wrap items-center gap-4 rounded-2xl border border-[#e6eefb] bg-[#f8fbff] p-5">
        <img src="assets/avatar-rahul.webp" alt="" width="240" height="240" class="h-16 w-16 rounded-full object-cover">
        <div>
          <h1 class="text-xl font-extrabold sm:text-2xl">Rahul Mehta</h1>
          <p class="text-sm text-brand-muted">rahul@email.com • Indore</p>
        </div>
      </div>
      <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        ${[
          ["orders.html", "My Orders", "Track & reorder"],
          ["wishlist.html", "Wishlist", "Saved items"],
          ["cart.html", "Cart", "Checkout now"],
          ["products.html", "Continue Shopping", "Browse products"],
          ["about.html#contact", "Help & Support", "We're here 24/7"],
          ["about.html", "About Kartzo", "Our story"]
        ].map(([href, title, sub]) => `
        <a href="${href}" class="rounded-2xl border border-[#e6eefb] bg-white p-4 transition hover:border-brand hover:shadow-card">
          <p class="text-sm font-extrabold">${title}</p>
          <p class="mt-1 text-xs text-brand-muted">${sub}</p>
        </a>`).join("")}
      </div>
      <form class="mt-6 max-w-xl rounded-2xl border border-[#e6eefb] p-5" id="profile-form">
        <h2 class="text-sm font-extrabold">Profile</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <label class="block text-xs font-bold text-brand-muted">Name<input class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold" value="Rahul Mehta"></label>
          <label class="block text-xs font-bold text-brand-muted">Phone<input class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold" value="+91 98765 43210"></label>
          <label class="block text-xs font-bold text-brand-muted sm:col-span-2">Email<input type="email" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold" value="rahul@email.com"></label>
        </div>
        <button type="submit" class="mt-4 min-h-11 rounded-xl bg-brand px-5 text-sm font-bold text-white hover:bg-brand-dark">Save Changes</button>
        <p id="profile-msg" class="mt-2 text-xs font-semibold text-[#059669]" role="status"></p>
      </form>
    </section>
`, `<script>
  document.getElementById("profile-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("profile-msg").textContent = "Profile updated.";
  });
</script>`);

// ABOUT
page("about.html", "About — Kartzo", "About Kartzo and contact support.", "about", `
    ${crumbs([{ href: "index.html", label: "Home" }, { label: "About" }])}
    <section class="pad w-full py-6">
      <div class="grid items-center gap-6 lg:grid-cols-2">
        <div>
          <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl">About <span class="text-brand">Kartzo</span></h1>
          <p class="mt-3 max-w-lg text-sm leading-relaxed text-brand-muted">We bring quality products at better prices — electronics, fashion, home and more — with fast delivery and easy returns.</p>
          <ul class="mt-5 grid grid-cols-2 gap-3 text-sm font-bold">
            <li class="rounded-xl bg-brand-soft px-3 py-3">10K+ customers</li>
            <li class="rounded-xl bg-brand-soft px-3 py-3">7-day returns</li>
            <li class="rounded-xl bg-brand-soft px-3 py-3">Secure payments</li>
            <li class="rounded-xl bg-brand-soft px-3 py-3">24/7 support</li>
          </ul>
        </div>
        <div class="overflow-hidden rounded-3xl bg-[#eef5ff]">
          <img src="assets/hero.webp" alt="Kartzo products" class="h-full w-full object-contain" width="1536" height="1024">
        </div>
      </div>
      <div id="contact" class="mt-10 grid gap-5 lg:grid-cols-2">
        <div class="rounded-2xl border border-[#e6eefb] p-5">
          <h2 class="text-sm font-extrabold">Contact</h2>
          <ul class="mt-3 space-y-2 text-sm text-brand-muted">
            <li><a class="font-semibold text-brand-ink hover:text-brand" href="mailto:support@kartzo.com">support@kartzo.com</a></li>
            <li><a class="font-semibold text-brand-ink hover:text-brand" href="tel:+919876543210">+91 98765 43210</a></li>
            <li>Indore, Madhya Pradesh, India</li>
          </ul>
        </div>
        <form id="contact-form" class="rounded-2xl border border-[#e6eefb] p-5" novalidate>
          <h2 class="text-sm font-extrabold">Send a message</h2>
          <label class="mt-3 block text-xs font-bold text-brand-muted">Email<input required type="email" class="mt-1 min-h-11 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 text-sm font-semibold"></label>
          <label class="mt-3 block text-xs font-bold text-brand-muted">Message<textarea required rows="3" class="mt-1 w-full rounded-xl border border-[#d9e4f7] bg-[#f3f7ff] px-3 py-3 text-sm font-semibold"></textarea></label>
          <button type="submit" class="mt-4 min-h-11 rounded-xl bg-brand px-5 text-sm font-bold text-white hover:bg-brand-dark">Send</button>
          <p id="contact-msg" class="mt-2 text-xs font-semibold" role="status"></p>
        </form>
      </div>
    </section>
`, `<script>
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!this.checkValidity()) { this.reportValidity(); return; }
    document.getElementById("contact-msg").textContent = "Message sent. We'll reply soon.";
    document.getElementById("contact-msg").className = "mt-2 text-xs font-semibold text-[#059669]";
    this.reset();
  });
</script>`);

console.log("All pages built.");
