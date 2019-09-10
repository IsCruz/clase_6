// Problema1 con for

let num1 = process.argv[2];
let num2 = process.argv[3];

console.log("Números enlistados de " + num1 + " a " + num2);

for (let index = num1; index <= num2; index++) {
    console.log(index);    
}