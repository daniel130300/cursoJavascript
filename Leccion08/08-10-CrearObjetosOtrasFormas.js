let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    get nombreCompleto()
    {
        return this.nombre + " " + this.apellido;
    }
}

let miObjeto = new Object(); //Forma formal de declarar un objeto
let miObjecto2 = {}; //Forma más recomendable de declarar un objeto

let miCadena1 = new String ("Hola"); //Forma formal de declarar un objeto tipo string
let miCadena2 = "Hola"; //Forma más recomendable de declarar un objeto tipo string

let miNumero = new Number(1); //Forma formal de declarar un objeto tipo number
let miNumero2 = new Number(2); //Forma más recomendable de declarar un objeto tipo number

let miBoolean = new Boolean(false); //Forma formal de declarar un objeto tipo boolean
let miBoolean2 = false; //Forma más recomendable de declarar un objeto tipo boolean

let miBoolean = new Array(); //Forma formal de declarar un objeto tipo array
let miBoolean2 = []; //Forma más recomendable de declarar un objeto tipo array

let miFuncion = new Function(); //Forma formal de declarar un objeto tipo array
let miFuncion2 = function(){}; //Forma más recomendable de declarar un objeto tipo array