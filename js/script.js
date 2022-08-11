class Repuesto {
    constructor(id, marca, nombre, precio, stock) {
        this.id = id
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const repuesto1 = new Repuesto("1", "Honda", "Carburador", 3500, 30)
const repuesto2 = new Repuesto("2", "Yamaha", "Bomba de aceite", 3200, 23)
const repuesto3 = new Repuesto("3", "Kawasaki", "Cigueñal", 5000, 20)
const repuesto4 = new Repuesto("4", "Suzuki", "Arbol de levas", 2200, 15)
const repuesto5 = new Repuesto("5", "BMW", "Kit de transimision", 1300, 13)

const repuestos = [repuesto1, repuesto2, repuesto3, repuesto4, repuesto5]

const divRepuestos = document.getElementById("divRepuestos")

repuestos.forEach((repuestoArray) => {
    divRepuestos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repuestoArray.nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${repuestoArray.marca}</h6>
      <p class="card-text">PRECIO: $${repuestoArray.precio}</p>
      <p class="card-text">Ultimas ${repuestoArray.stock} unidades</p>
    </div>
  </div>
    `
})

