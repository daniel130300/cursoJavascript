//Para las clases no se aplica el concepto de Hoisting

//NO es posible crear objectos antes de declarar la clase
//NO se aplica el concepto de hoisting

//let persona2 = new Persona("Karla", "Juarez");

class Persona
{
    constructor (nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }  
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);