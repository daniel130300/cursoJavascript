class Persona
{
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad)
    {
        this._idPersona = ++Persona.contadorPersonas
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getIdPersona()
    {
        return this._idPersona;
    }

    get getNombre()
    {
        return this._nombre;
    }

    get getApellido()
    {
        return this._apellido;
    }

    get getEdad()
    {
        return this._edad;
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }

    set setApellido(apellido)
    {

        this._apellido = apellido;
    }

    set setEdad(edad)
    {
        this._edad = edad;
    }

    toString()
    {
        return `
        ${this._idPersona}
        ${this._nombre} 
        ${this._apellido}  
        ${this._edad}`; 
    }

}

class Empleado extends Persona
{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo)
    {
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get getIdEmpleado()
    {
        return this._idEmpleado;
    }

    get getSueldo()
    {
        return this._sueldo;
    }

    set setSueldo(sueldo)
    {
        this._sueldo = sueldo;
    }

    toString()
    {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`; 
    }
}

class Cliente extends Persona
{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad)
    {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = new Date();
    }

    get getIdCliente()
    {
       return this._idCliente;
    }

    get getFechaRegistro()
    {
        return this._fechaRegistro;
    }   

    set setFechaRegistro(fechaRegistro)
    {
        this._fechaRegistro = fechaRegistro;
    }

    toString()
    {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`; 
    }
}

let persona1 = new Persona("Héctor", "López", 21);
console.log(persona1.toString());
console.log(persona1.getNombre);
console.log(persona1.getApellido);
console.log(persona1.getEdad);


let empleado1 = new Empleado("David", "Lopez", 15, 23000);
console.log(empleado1.toString());
console.log(empleado1.getNombre);
console.log(empleado1.getApellido);
console.log(empleado1.getEdad);
console.log(empleado1.getSueldo);

let cliente1 = new Cliente("Iris", "Yaneth", 44);
console.log(cliente1.toString());
console.log(cliente1.getNombre);
console.log(cliente1.getApellido);
console.log(cliente1.getEdad);
console.log(cliente1.getFechaRegistro);