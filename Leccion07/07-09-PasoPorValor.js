//El paso por valor es cuando utilizamos tipos que no son objetos

//Tipos primitivos: No tienen propiedades ni metodos.
let x = 10; 

function cambiarValor(a)
{
    a = 20; //x solamente le pasa una copia de su valor a la variable a, por lo que no se cambio su valor.
}

cambiarValor(x);

console.log(x);

/*NOTA IMPORTANTE: En javascript solamente podemos trabajar 
el paso por referencia con objetos, no con valores primitivos*/

/*NOTA IMPORTANTE: En javascript solamente podemos trabajar 
el paso por valor con datos primitivos, no con objetos*/

