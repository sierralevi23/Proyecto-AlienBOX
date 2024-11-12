document.querySelector('.Agregar al Carrito').addEventListener('click', function() {
    // Obtener la información del producto
    const productoInfo = {
        nombre: "CORSAIR Teclado inalámbrico para juegos K57 RGB",
        precio: 109.99,
        imagen: "ruta/a/la/imagen/teclado.jpg" // Ajusta esto a la ruta correcta de tu imagen
    };

    // Guardar en localStorage para acceder desde la página de compra
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoInfo));
    
    // Redirigir a la página de compra
    window.location.href = 'compra.html';
}); 