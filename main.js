const divisas = [
    { id: 1, nombre: "Dolar", descripcion: "Moneda oficial Estadounidense", precio: 1450, imagen: "https://img.freepik.com/foto-gratis/numero-banco_1232-3931.jpg" },
    { id: 2, nombre: "Euro", descripcion: "Moneda oficial Europea", precio: 1633, imagen: "https://www.ceca.es/wp-content/uploads/2023/08/euros.jpg" },
    { id: 3, nombre: "Real", descripcion: "Moneda oficial Brasileña", precio: 257, imagen: "https://media.istockphoto.com/id/1322173172/es/foto/en-esta-ilustración-fotográfica-se-muestran-ciento-doscientos-reales-y-una-moneda-de-un-real.jpg?s=612x612&w=0&k=20&c=9pG2yxdpFYe9j2oKboOqvwU9skbokYaIFW9Xn48FH_Y=" },
    { id: 4, nombre: "Peso Uruguayo", descripcion: "Moneda oficial Uruguaya", precio: 29, imagen: "https://st3.depositphotos.com/2870309/17334/i/450/depositphotos_173341030-stock-photo-uruguayan-pesos-a-background.jpg" },
]

function renderDivisas() {
    let contenidoHTML = '<div class="row">'; 

    for (const divisa of divisas) {
        contenidoHTML += `<div class="col-md-3 mb-4">
            <div class="card border-0">
                <img src="${divisa.imagen}" class="card-img-top" alt="${divisa.nombre}">
                <div class="card-body text-center">
                    <p class="card-text">${divisa.nombre}<br><span class="text-danger">$${divisa.precio} ARS</span></p>
                    <p class="card-text"><button class="btn btn-light rounded-pill" onclick="agregarDivisa(${divisa.id})">Agregar (+)</button></p>
                </div>
            </div>
        </div>`;
    }

    contenidoHTML += '</div>'; 

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarDivisa(id) {
    const divisa = divisas.find(item => item.id == id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(divisa);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("La divisa se agregó");
    totalProductos();
}

function totalProductos() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("totalCarrito").innerHTML = carrito.length;
}

console.log(divisas);

renderDivisas();
totalProductos();
