let i = 1; // Inicio


do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`)
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`) 
    } 
    else if (i % 5 === 0) {
        console.log(`${i} Buzz`)
    }

    i++; // Incremento
} while ( i < 100); // Condición