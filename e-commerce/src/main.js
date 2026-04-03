"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menProducts = [
    { id: 1, name: "Men Shirt", image: "https://picsum.photos/300?random=1" },
    { id: 2, name: "Men Jacket", image: "https://picsum.photos/300?random=2" },
    { id: 3, name: "Men Shoes", image: "https://picsum.photos/300?random=3" },
    { id: 4, name: "Men Watch", image: "https://picsum.photos/300?random=4" },
    { id: 5, name: "Men Jeans", image: "https://picsum.photos/300?random=5" },
    { id: 6, name: "Men Cap", image: "https://picsum.photos/300?random=6" },
];
const womenProducts = [
    { id: 1, name: "Women Dress", image: "https://picsum.photos/300?random=7" },
    { id: 2, name: "Women Bag", image: "https://picsum.photos/300?random=8" },
    { id: 3, name: "Women Heels", image: "https://picsum.photos/300?random=9" },
    { id: 4, name: "Women Watch", image: "https://picsum.photos/300?random=10" },
    { id: 5, name: "Women Top", image: "https://picsum.photos/300?random=11" },
    { id: 6, name: "Women Sandals", image: "https://picsum.photos/300?random=12" },
];
const electronicsProducts = [
    { id: 1, name: "Laptop", image: "https://picsum.photos/300?random=13" },
    { id: 2, name: "Mobile", image: "https://picsum.photos/300?random=14" },
    { id: 3, name: "Headphones", image: "https://picsum.photos/300?random=15" },
    { id: 4, name: "Camera", image: "https://picsum.photos/300?random=16" },
    { id: 5, name: "Smartwatch", image: "https://picsum.photos/300?random=17" },
    { id: 6, name: "Keyboard", image: "https://picsum.photos/300?random=18" },
];
function loadProducts(products) {
    const container = document.getElementById("productContainer");
    if (!container)
        return;
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
    `;
        container.appendChild(card);
    });
}
// Detect which page is open
const pageTitle = document.title;
if (pageTitle.includes("Men")) {
    loadProducts(menProducts);
}
else if (pageTitle.includes("Women")) {
    loadProducts(womenProducts);
}
else if (pageTitle.includes("Electronics")) {
    loadProducts(electronicsProducts);
}
//# sourceMappingURL=main.js.map