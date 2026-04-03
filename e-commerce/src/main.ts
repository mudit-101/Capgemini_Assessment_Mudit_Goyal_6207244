// ========================
// ShopZone - app.ts
// ========================

// ---------- TYPES ----------

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
  tagClass?: string;
}

// ---------- DATA ----------

const electronics: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    tag: "Hot",
    tagClass: "tag-hot"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 3,
    name: "Laptop",
    price: "$599.99",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    tag: "Sale",
    tagClass: "tag-sale"
  },
  {
    id: 5,
    name: "Tablet",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Camera",
    price: "$399.99",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Keyboard",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
    tag: "Hot",
    tagClass: "tag-hot"
  },
];

const fashion: Product[] = [
  {
    id: 11,
    name: "White Sneakers",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    tag: "Hot",
    tagClass: "tag-hot"
  },
  {
    id: 12,
    name: "Leather Jacket",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop"
  },
  {
    id: 13,
    name: "Summer Dress",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 14,
    name: "Denim Jeans",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    tag: "Sale",
    tagClass: "tag-sale"
  },
  {
    id: 15,
    name: "Wool Coat",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=300&fit=crop"
  },
  {
    id: 16,
    name: "Crossbody Bag",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 17,
    name: "Silk Blouse",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    name: "Running Shoes",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
    tag: "Hot",
    tagClass: "tag-hot"
  },
];

const homeLiving: Product[] = [
  {
    id: 21,
    name: "Sofa",
    price: "$499.99",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    tag: "Hot",
    tagClass: "tag-hot"
  },
  {
    id: 22,
    name: "Table Lamp",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop"
  },
  {
    id: 23,
    name: "Bedding Set",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1629949009765-40fc74e3e6e8?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 24,
    name: "Coffee Table",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=400&h=300&fit=crop"
  },
  {
    id: 25,
    name: "Candle Set",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1602874801006-8af0fd14e022?w=400&h=300&fit=crop",
    tag: "Sale",
    tagClass: "tag-sale"
  },
  {
    id: 26,
    name: "Indoor Plant",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop"
  },
  {
    id: 27,
    name: "Wall Clock",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=300&fit=crop",
    tag: "New",
    tagClass: "tag-new"
  },
  {
    id: 28,
    name: "Kitchen Mixer",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
];

// ---------- STATE ----------
let cartTotal: number = 0;
let toastTimeout: ReturnType<typeof setTimeout>;

// ---------- HELPERS ----------

function getEl(id: string): HTMLElement {
  return document.getElementById(id) as HTMLElement;
}

// ---------- BUILD PRODUCT CARD ----------

function buildCard(product: Product, delay: number): HTMLElement {
  const card: HTMLDivElement = document.createElement("div");
  card.className = "product-card";
  card.style.animationDelay = `${delay * 0.06}s`;

  const tagHTML: string = product.tag
    ? `<span class="product-tag ${product.tagClass}">${product.tag}</span>`
    : "";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy" />
    ${tagHTML}
    <div class="product-body">
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price}</div>
      <button class="add-btn">Add to Cart</button>
    </div>
  `;

  const btn = card.querySelector(".add-btn") as HTMLButtonElement;

  btn.addEventListener("click", (): void => {
    cartTotal += 1;
    updateCart();

    btn.textContent = "✓ Added!";
    btn.classList.add("added");

    setTimeout((): void => {
      btn.textContent = "Add to Cart";
      btn.classList.remove("added");
    }, 1200);

    showToast();
  });

  return card;
}

// ---------- RENDER GRID ----------

function renderGrid(products: Product[], gridId: string): void {
  const grid: HTMLElement = getEl(gridId);
  grid.innerHTML = "";
  products.forEach((p: Product, i: number): void => {
    grid.appendChild(buildCard(p, i));
  });
}

// ---------- CART ----------

function updateCart(): void {
  const badge: HTMLElement = getEl("cartBadge");
  badge.textContent = String(cartTotal);
}

// ---------- TOAST ----------

function showToast(): void {
  const toast: HTMLElement = getEl("toast");
  clearTimeout(toastTimeout);
  toast.classList.add("show");
  toastTimeout = setTimeout((): void => {
    toast.classList.remove("show");
  }, 2000);
}

// ---------- NAVIGATION ----------

function goTo(pageId: string): void {
  // Hide all pages
  document.querySelectorAll<HTMLElement>(".page").forEach((page: HTMLElement): void => {
    page.classList.remove("active");
  });

  // Show target page
  const targetId: string = pageId === "home" ? "page-home" : `page-${pageId}`;
  const target: HTMLElement | null = document.getElementById(targetId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Highlight active nav button
  document.querySelectorAll<HTMLButtonElement>(".nav-btn").forEach((btn: HTMLButtonElement): void => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });
}

// ---------- INIT ----------

function init(): void {
  // Render all product pages
  renderGrid(electronics,  "electronicsGrid");
  renderGrid(fashion,      "fashionGrid");
  renderGrid(homeLiving,   "homeGrid");

  // Nav buttons
  document.querySelectorAll<HTMLButtonElement>(".nav-btn").forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener("click", (): void => {
      const page: string = btn.dataset.page ?? "home";
      goTo(page);
    });
  });

  // All data-page clickable elements (hero buttons, category cards)
  document.querySelectorAll<HTMLElement>("[data-page]").forEach((el: HTMLElement): void => {
    if (!(el instanceof HTMLButtonElement) || el.classList.contains("nav-btn")) return;
    el.addEventListener("click", (): void => {
      const page: string = el.dataset.page ?? "home";
      goTo(page);
    });
  });

  // Category cards (div elements with data-page)
  document.querySelectorAll<HTMLElement>(".cat-card").forEach((card: HTMLElement): void => {
    card.addEventListener("click", (): void => {
      const page: string = card.dataset.page ?? "home";
      goTo(page);
    });
  });

  // Logo/brand → home
  getEl("homeBtn").addEventListener("click", (): void => goTo("home"));
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}