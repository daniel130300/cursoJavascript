"use strict"; //El modo estricto nos fuerza a declarar nuestras variables, 
//ya que con javascript no es necesario hacerlo y se considera como una mala practica 
//el no hacerlo podemos utilizar esta función
//Esta puede ser declarada al inicio de nuestro programa.

let x = 10;

console.log(x);

function miFuncion()
{
    //"use strict"; //O dentro de una función
    let y = 15;
    return y;
}

miFuncion();