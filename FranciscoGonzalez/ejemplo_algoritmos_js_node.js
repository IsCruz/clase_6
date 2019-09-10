console.log(process.argv);

let hambre = process.argv[2];

if (hambre == 'no') {
    console.log('estoy feliz');
}

else {
    console.log('estoy triste');
}