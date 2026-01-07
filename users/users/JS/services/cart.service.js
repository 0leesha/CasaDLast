// core/cart.service.js

const CartService = (() => {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    function save(action = '') {
        localStorage.setItem('cart', JSON.stringify(cart));
        document.dispatchEvent(new CustomEvent('cart:updated',{detail:{action}}));
    }
    
    return {
        getCart() {
            return cart;
        },

        add(product) {
            if (!cart[product.id]) {
                cart[product.id] = { ...product, quantity: 1 };
            } else {
                cart[product.id].quantity++;
            }
            save('add');
        },

        increase(id) {
            if (cart[id]) {
                cart[id].quantity++;
                save('increase');
            }
        },

        decrease(id) {
            if (!cart[id]) return;

            cart[id].quantity--;
            if (cart[id].quantity <= 0) {
                delete cart[id];
            }
            save('decrease');
        },

        getQuantity(id) {
            return cart[id]?.quantity || 0;
        },

        getTotalItems() {
            return Object.values(cart)
                .reduce((sum, item) => sum + item.quantity, 0);
        }
    };
})();
