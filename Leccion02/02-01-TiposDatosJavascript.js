/*
    Ejemplos de 
    tipos de datos 
    en JavaScript
*/

//Tipo de dato String
var nombre = "David";
console.log(nombre);
console.log(typeof nombre);

nombre = 10;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato númerico
var numero = 12.2;
console.log(numero);
console.log(typeof numero);

//Tipo de dato object
var objeto = {
    nombre:"Juan",
    apellido: "Perez",
    edad:"21"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){

} 
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("Pobre luijum");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function en js
class Persona{
    constructor(nombre, apellido)
    {
        this.nombre = nombre,
        this.apellido = apellido
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var x = undefined;
console.log(x);
console.log(typeof x);

//Valor null = ausencia de valor y su tipo de dato es object
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);

