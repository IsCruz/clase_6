//console.log(process.argv);

let nivel = process.argv[2];

if (nivel >0 && nivel<10) {
    console.log('Aprendiz');
}

else if (nivel >=10 && nivel<20) 
{
    console.log('Acrobata');
}
else if (nivel >=20 ) 
{
    console.log('Ninja');
}
else 
{console.log('Favor de ingresar dato valido');}