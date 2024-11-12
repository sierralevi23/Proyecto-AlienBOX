document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-detail-section .btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    const productDetail = event.target.closest('.product-detail-container');
    const product = {
        name: productDetail.querySelector('h2').innerText,
        price: parseFloat(productDetail.querySelector('.price').innerText.replace('$', '')),
        description: productDetail.querySelector('.description').innerText,
        image: productDetail.querySelector('.product-image img').src
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

