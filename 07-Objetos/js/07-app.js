const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Un objeto se vuelve modificable a pesar de ser const
producto.disponible = false;

delete producto.precio;

console.log(producto);