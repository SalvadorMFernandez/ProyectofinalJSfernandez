function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenidoHTML = `<table class="table">
    <tbody>`; 

    for (const divisa of carrito) {
        contenidoHTML += `<tr>
        <td><img src="images/${divisa.imagen}" alt="${divisa.nombre}" width="56"></td>
        <td class="text-center aling-middle">${divisa.nombre}</td>
        <td class="text-center aling-middle"><span class="text-danger">${divisa.precio} ARS</span></td>
        <td class="text-end"><button class="btn btn-danger" onclick="eliminarDivisa('${divisa.nombre}')">Eliminar [-]</button></td>
        </tr>`;
    }

    contenidoHTML += `</tbody>
    </table>`; 

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();

function eliminarDivisa(nombreDivisa) {
    // Obtener el carrito del almacenamiento local
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Filtrar las divisas para eliminar la que coincida con el nombre dado
    const carritoActualizado = carrito.filter(divisa => divisa.nombre !== nombreDivisa);

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));

    // Volver a renderizar el carrito
    renderCarrito();
}
