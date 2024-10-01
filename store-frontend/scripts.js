// Mock data to simulate products from backend (replace with real data later)
const products = [
    {"name": "UCLA Notebook", "price": 59.51, "description": "Classic UCLA Notebook.", "category": "Sports Equipment"},
    {"name": "UCLA Athletics Planner", "price": 23.37, "description": "Limited Edition UCLA Athletics Planner.", "category": "Books"},
    {"name": "UCLA Athletics Hoodie", "price": 67.75, "description": "Stylish UCLA Athletics Hoodie.", "category": "Electronics"},
    {"name": "UCLA Store Mug", "price": 24.18, "description": "Eco-friendly UCLA Store Mug.", "category": "Accessories"},
    {"name": "Bruins Hoodie", "price": 85.54, "description": "Premium Bruins Hoodie.", "category": "Apparel"},
    {"name": "UCLA Store Notebook", "price": 114.15, "description": "Comfortable UCLA Store Notebook.", "category": "Stationery"},
    {"name": "UCLA Store Hoodie", "price": 25.73, "description": "Eco-friendly UCLA Store Hoodie.", "category": "Stationery"},
    {"name": "UCLA Athletics T-shirt", "price": 79.47, "description": "Modern UCLA Athletics T-shirt.", "category": "Apparel"},
    {"name": "UCLA Athletics Hoodie", "price": 139.06, "description": "Stylish UCLA Athletics Hoodie.", "category": "Apparel"},
    {"name": "UCLA Store T-shirt", "price": 71.64, "description": "Comfortable UCLA Store T-shirt.", "category": "Accessories"},
    {"name": "UCLA Store Notebook", "price": 90.13, "description": "Premium UCLA Store Notebook.", "category": "Stationery"},
    {"name": "UCLA Pen", "price": 79.01, "description": "Premium UCLA Pen.", "category": "Books"},
    {"name": "UCLA Athletics Backpack", "price": 124.24, "description": "Modern UCLA Athletics Backpack.", "category": "Books"},
    {"name": "UCLA Store Hoodie", "price": 120.59, "description": "Stylish UCLA Store Hoodie.", "category": "Electronics"},
    {"name": "UCLA Notebook", "price": 36.74, "description": "Limited Edition UCLA Notebook.", "category": "Apparel"},
    {"name": "UCLA T-shirt", "price": 62.83, "description": "Limited Edition UCLA T-shirt.", "category": "Books"},
    {"name": "UCLA Water Bottle", "price": 23.68, "description": "Limited Edition UCLA Water Bottle.", "category": "Stationery"},
    {"name": "UCLA Store Pen", "price": 125.97, "description": "Modern UCLA Store Pen.", "category": "Apparel"},
    {"name": "UCLA Athletics T-shirt", "price": 111.55, "description": "Premium UCLA Athletics T-shirt.", "category": "Accessories"},
    {"name": "UCLA Athletics Mug", "price": 20.53, "description": "Premium UCLA Athletics Mug.", "category": "Electronics"},
    {"name": "UCLA Pen", "price": 6.38, "description": "Classic UCLA Pen.", "category": "Accessories"},
    {"name": "UCLA Store T-shirt", "price": 134.87, "description": "Modern UCLA Store T-shirt.", "category": "Home Decor"},
    {"name": "UCLA Athletics Laptop Sleeve", "price": 76.84, "description": "Comfortable UCLA Athletics Laptop Sleeve.", "category": "Books"},
    {"name": "UCLA Store Planner", "price": 109.16, "description": "Stylish UCLA Store Planner.", "category": "Apparel"},
    {"name": "UCLA Pen", "price": 45.65, "description": "Modern UCLA Pen.", "category": "Electronics"},
    {"name": "UCLA Athletics Backpack", "price": 20.23, "description": "Eco-friendly UCLA Athletics Backpack.", "category": "Home Decor"},
    {"name": "UCLA Store T-shirt", "price": 148.17, "description": "Modern UCLA Store T-shirt.", "category": "Stationery"},
    {"name": "UCLA Store Cap", "price": 106.59, "description": "Classic UCLA Store Cap.", "category": "Stationery"},
    {"name": "UCLA Notebook", "price": 146.85, "description": "Stylish UCLA Notebook.", "category": "Sports Equipment"},
    {"name": "UCLA Store Backpack", "price": 90.11, "description": "Stylish UCLA Store Backpack.", "category": "Apparel"},
    {"name": "Bruins Notebook", "price": 139.62, "description": "Modern Bruins Notebook.", "category": "Apparel"},
    {"name": "Bruins Mug", "price": 52.13, "description": "Classic Bruins Mug.", "category": "Accessories"},
    {"name": "UCLA Store Water Bottle", "price": 53.92, "description": "Comfortable UCLA Store Water Bottle.", "category": "Sports Equipment"},
    {"name": "UCLA Athletics Laptop Sleeve", "price": 130.23, "description": "Comfortable UCLA Athletics Laptop Sleeve.", "category": "Sports Equipment"},
    {"name": "Bruins Backpack", "price": 26.13, "description": "Classic Bruins Backpack.", "category": "Books"},
    {"name": "UCLA Athletics Backpack", "price": 67.01, "description": "Comfortable UCLA Athletics Backpack.", "category": "Apparel"},
    {"name": "Bruins Hoodie", "price": 148.19, "description": "Stylish Bruins Hoodie.", "category": "Stationery"},
    {"name": "UCLA Store Notebook", "price": 121.41, "description": "Stylish UCLA Store Notebook.", "category": "Sports Equipment"},
    {"name": "UCLA T-shirt", "price": 95.24, "description": "Modern UCLA T-shirt.", "category": "Apparel"},
    {"name": "UCLA Store Backpack", "price": 105.55, "description": "Modern UCLA Store Backpack.", "category": "Home Decor"},
    {"name": "Bruins T-shirt", "price": 87.22, "description": "Premium Bruins T-shirt.", "category": "Electronics"},
    {"name": "Bruins Notebook", "price": 46.95, "description": "Modern Bruins Notebook.", "category": "Home Decor"},
    {"name": "UCLA Store Hoodie", "price": 18.1, "description": "Classic UCLA Store Hoodie.", "category": "Stationery"},
    {"name": "Bruins Pen", "price": 139.73, "description": "Limited Edition Bruins Pen.", "category": "Accessories"},
    {"name": "Bruins Planner", "price": 43.9, "description": "Stylish Bruins Planner.", "category": "Sports Equipment"},
    {"name": "Bruins Laptop Sleeve", "price": 103.97, "description": "Stylish Bruins Laptop Sleeve.", "category": "Books"},
    {"name": "UCLA Cap", "price": 37.63, "description": "Modern UCLA Cap.", "category": "Electronics"},
    {"name": "UCLA Mug", "price": 31.92, "description": "Stylish UCLA Mug.", "category": "Accessories"},
    {"name": "UCLA Athletics Notebook", "price": 72.59, "description": "Limited Edition UCLA Athletics Notebook.", "category": "Electronics"},
    {"name": "UCLA Mug", "price": 71.93, "description": "Limited Edition UCLA Mug.", "category": "Home Decor"},
    {"name": "Bruins Water Bottle", "price": 60.69, "description": "Eco-friendly Bruins Water Bottle.", "category": "Home Decor"},
    {"name": "Bruins T-shirt", "price": 35.03, "description": "Limited Edition Bruins T-shirt.", "category": "Sports Equipment"},
    {"name": "UCLA Store Backpack", "price": 53.37, "description": "Premium UCLA Store Backpack.", "category": "Books"},
    {"name": "UCLA Athletics T-shirt", "price": 88.37, "description": "Limited Edition UCLA Athletics T-shirt.", "category": "Home Decor"},
    {"name": "UCLA Athletics Laptop Sleeve", "price": 44.97, "description": "Eco-friendly UCLA Athletics Laptop Sleeve.", "category": "Books"},
    {"name": "UCLA Athletics Water Bottle", "price": 39.67, "description": "Stylish UCLA Athletics Water Bottle.", "category": "Home Decor"},
    {"name": "UCLA Laptop Sleeve", "price": 36.79, "description": "Eco-friendly UCLA Laptop Sleeve.", "category": "Electronics"},
    {"name": "UCLA Store Notebook", "price": 48.14, "description": "Modern UCLA Store Notebook.", "category": "Stationery"},
    {"name": "Bruins Cap", "price": 26.36, "description": "Classic Bruins Cap.", "category": "Apparel"},
]
  

// Pagination variables
let currentPage = 1;
const productsPerPage = 20; // 4 products per row, 5 rows = 20 products

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Display products based on category and pagination
function displayProducts(page = 1, category = 'All') {
    currentPage = page;

    // Filter products by category
    const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });

    updatePagination(filteredProducts.length);
}

// Update pagination controls based on total filtered products
function updatePagination(totalProducts) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear previous pagination

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const paginationBtn = document.createElement('button');
        paginationBtn.className = 'pagination-btn';
        paginationBtn.innerText = i;
        paginationBtn.onclick = () => displayProducts(i, document.getElementById('category-filter').value);
        paginationContainer.appendChild(paginationBtn);
    }
}

// Update the cart count in the header
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-link').innerText = `Cart (${cartCount})`;
}

// Add a product to the cart and save it to localStorage
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} added to cart!`);
}

// Filter products by category
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    displayProducts(1, category);
}

// Load categories into the filter dropdown
function loadCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    const filterDropdown = document.getElementById('category-filter');

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        filterDropdown.appendChild(option);
    });
}

loadCategories();
displayProducts(currentPage);
