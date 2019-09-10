// Problema1 con While

let num1 = process.argv[2];
let num2 = process.argv[3];

console.log("Números enlistados de " + num1 + " a " + num2);

while (num1 <= num2){
    console.log(num1);
    num1++;    
}