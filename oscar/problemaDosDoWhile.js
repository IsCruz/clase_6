// Problema2 con Do While

let peso = process.argv[2];
let pesoIdeal = process.argv[3];
let pesoCambio = process.argv[4];
let semanas = 0;

do {
    peso = peso - pesoCambio;
    semanas++;    
} while (peso > pesoIdeal);

console.log("Tardarás " + semanas + " semanas");