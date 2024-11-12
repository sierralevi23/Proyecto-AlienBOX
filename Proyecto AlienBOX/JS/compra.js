document.addEventListener('DOMContentLoaded', () => {
    displayPcComponents();
});

function displayPcComponents() {
    const components = JSON.parse(localStorage.getItem('pcComponents')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItemsContainer.innerHTML = '';

    components.forEach(component => {
        const componentElement = document.createElement('div');
        componentElement.className = 'cart-item';
        componentElement.innerHTML = `
            <div class="cart-item-info">
                <h2>${component.name}</h2>
                <p class="price">$${component.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(componentElement);
        total += component.price;
    });

    totalElement.innerText = total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', () => {
    displayPcComponents();
});

function displayPcComponents() {
    const components = JSON.parse(localStorage.getItem('pcComponents')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItemsContainer.innerHTML = '';

    components.forEach(component => {
        const componentElement = document.createElement('div');
        componentElement.className = 'cart-item';
        componentElement.innerHTML = `
            <div class="cart-item-info">
                <h2>${component.name}</h2>
                <p class="price">$${component.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(componentElement);
        total += component.price;
    });

    totalElement.innerText = `$${total.toFixed(2)}`;
}document.addEventListener('DOMContentLoaded', function() {
    // Recuperar la información del producto
    const productoInfo = JSON.parse(localStorage.getItem('productoSeleccionado'));
    
    if (productoInfo) {
        // Actualizar el resumen del producto
        document.querySelector('.product-summary img').src = productoInfo.imagen;
        document.querySelector('.product-summary p').textContent = productoInfo.nombre;
        document.querySelector('.price').textContent = `$${productoInfo.precio}`;
        
        // Actualizar el total
        document.querySelector('#total').textContent = `$${productoInfo.precio}`;
    }
});
