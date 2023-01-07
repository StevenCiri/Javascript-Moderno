// Operador mayor que y menor que

const dinero = 100;
const totalPagar = 300;
const tarjeta = false;
const cheque = false;

if (dinero >= totalPagar) {
    console.log('Sí podemos pagar');
} else if (cheque) {
    console.log('Si tengo un cheque')
} else if (tarjeta) {
    console.log('Si puedo pagar porque tengo una tarjeta')
} else {
    console.log('Fondos insuficientes');
}