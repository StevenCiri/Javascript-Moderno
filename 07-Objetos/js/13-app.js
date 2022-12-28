const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Devuelve lado izquierdo del objeto
console.log( Object.keys( producto ) );

// Devuelve lado derecho del objeto
console.log( Object.values( producto ) );

// Devuelve todo el objeto
console.log( Object.entries( producto ) );