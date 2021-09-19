/*Las funciones en javascript pueden tener propiedades y métodos, por lo que una función
puede ser decrtita como un objeto*/

function miFuncion(a, b)
{
    //Ejemplo de las propiedades de una clase
    console.log(arguments);
    console.log(arguments.length);
    return a + b;
}

miFuncion(1,3);

console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto)