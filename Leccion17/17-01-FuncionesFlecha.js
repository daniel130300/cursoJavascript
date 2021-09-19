
//NOTA: El concepto de hoisting no se aplica a nuestras funciones flecha

function miFuncion()
{
    console.log("saludos desde mi función");
}

const funcionFlecha = (a,b) => a + b;


const miFuncionFlecha = () =>{
    console.log("saludos desde mi función flecha");
}

miFuncion();
miFuncionFlecha();

console.log(funcionFlecha(12, 3));

