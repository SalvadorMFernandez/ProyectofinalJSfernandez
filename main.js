const jsonUrl = 'divisas.json'; 

// Función para obtener datos del archivo JSON local
async function fetchDivisas() {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error('La respuesta de la red no es correcta');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hubo un problemacon la recuperacion:', error);
    return [];
  }
}

// Función para renderizar divisas en la página
async function renderDivisas() {
  const divisas = await fetchDivisas(); 
  let contenidoHTML = '<div class="row">'; 

  for (const divisa of divisas) {
    contenidoHTML += `<div class="col-md-3 mb-4">
        <div class="card border-0">
            <img src="${divisa.image}" class="card-img-top" alt="${divisa.title}">
            <div class="card-body text-center">
                <p class="card-text">${divisa.title}<br><span class="text-danger">$${divisa.price} ARS</span></p>
                <p class="card-text"><button class="btn btn-light rounded-pill" onclick="agregarDivisa(${divisa.id})">Agregar (+)</button></p>
            </div>
        </div>
    </div>`;
  }

  contenidoHTML += '</div>'; 

  document.getElementById("contenido").innerHTML = contenidoHTML;
}

// Función para agregar una divisa al carrito
function agregarDivisa(id) {
  const divisa = divisas.find(item => item.id === id);
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(divisa);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log("La divisa se agregó");
  totalProductos();
}

// Función para mostrar el número total de productos en el carrito
function totalProductos() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  document.getElementById("totalCarrito").innerHTML = carrito.length;
}

// Función para mostrar la fecha y hora actual
function obtenerFecha() {
  const { DateTime } = luxon;
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const campoFechaHora = document.getElementById("fechaHora");

  if (campoFechaHora) {
    campoFechaHora.innerHTML = `Fecha y hora actual: ${now}`;
  } else {
    console.error("El elemento con id 'fechaHora' no se encuentra.");
  }
}

renderDivisas();
totalProductos();
obtenerFecha();
