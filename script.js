// Array para almacenar los productos en el carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito ul');
    carritoContainer.innerHTML = ''; // Vaciar la lista de productos

    let total = 0;

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoContainer.appendChild(listItem);

        total += producto.precio;
    });

    const totalElement = document.querySelector('.carrito p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Manejadores de eventos
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
    
    const botonesAgregar = document.querySelectorAll('.producto button');
    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const producto = document.querySelectorAll('.producto h2')[index].textContent;
            const precio = parseFloat(document.querySelectorAll('.producto p')[index].textContent.split('$')[1]);
            agregarAlCarrito(producto, precio);
        });
    });

    const realizarCompraButton = document.querySelector('.carrito button');
    realizarCompraButton.addEventListener('click', () => {
        alert('Compra realizada. Total: $' + carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2));
        carrito.length = 0; // Vaciar el carrito
        actualizarCarrito();
    });
});