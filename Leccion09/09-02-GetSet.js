class Persona
{
    constructor (nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
    } 
    
    get getNombre()
    {
        return this._nombre;
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }
}


let persona1 = new Persona("Juan", "Perez");

console.log(persona1.getNombre);

persona1.setNombre = "Juan Carlos";

console.log(persona1.getNombre);
