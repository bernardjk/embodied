// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items and total price
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear previous cart items

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;

        cartContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Clear the cart and update localStorage
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    document.getElementById('total-price').innerText = '0.00';
    alert('Cart has been cleared!');
    window.location.href = 'index.html'; // Redirect to the main page after clearing
}

displayCart();
