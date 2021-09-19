function miFuncion1()
{
    console.log("Función 1");
}

function miFuncion2()
{
    console.log("Función 2");
}

function imprimir(mensaje)
{
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback)
{
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

miFuncion1();
miFuncion2();


