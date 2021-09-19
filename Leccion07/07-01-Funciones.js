//Declaración de la función

/*Se puede utilizar una funcion desde cualquier parte del código 
/incluso antes de haberla declarado esto debido al hoisting*/

miFuncion(4, 2);

function miFuncion(a, b)
{
    console.log("Suma: " + (a + b));
}

miFuncion(10, 2);

