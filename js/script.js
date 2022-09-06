const divRepuestos = document.getElementById("divRepuestos")
const botonTotal = document.getElementById("botonTotal")

const traerRepuestos = async () => {
  const response = await fetch('./js/json/repuestos.json')
  const repuestos = await response.json()
  return repuestos
}

function mostrarRepuestos(arrayRepuestos) {
  arrayRepuestos.forEach((repuestoArray) => {
    divRepuestos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repuestoArray.nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${repuestoArray.marca}</h6>
      <p class="card-text">PRECIO: $${repuestoArray.precio}</p>
      <p class="card-text">Ultimas ${repuestoArray.stock} unidades</p>
      <button id="aniadirCarrito" class="boton-aniadir" data-id="${repuestoArray.id}">Añadir al Carrito</button>
    </div>
  </div>
    `
  })
}

traerRepuestos().then(repuestos => {
  mostrarRepuestos(repuestos)
})

const carrito = []
const botones = document.querySelectorAll(".boton-aniadir")

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.id
    const repuesto = repuestoArray.find((repuesto) => repuesto.id === id)
    carrito.push(repuesto)
    console.log('carrito:', carrito);
  })
})




let total = 0
const obtenerTotal = () => {
  carrito.forEach((repuestoArray) => {
    total += repuestoArray.precio
  })
  return total
}

botonTotal.addEventListener("click", () => {
  obtenerTotal()
  console.log(`El precio total de su compra es: $${total}`);
})