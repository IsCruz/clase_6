// Problema2 con While

let peso = process.argv[2];
let pesoIdeal = process.argv[3];
let pesoCambio = process.argv[4];
let semanas = 0;

while (peso > pesoIdeal) {
    peso = peso - pesoCambio;
    semanas++; 
}

console.log("Tardarás " + semanas + " semanas");