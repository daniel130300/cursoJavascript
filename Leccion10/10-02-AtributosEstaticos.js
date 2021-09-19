//Los métodos static se asocian con nuestras clases y no con nuestros objetos

class Persona
{
    static contadorObjetosPersona = 0;

    constructor (nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }

    get apellido()
    {
        return this._apellido;
    }

    set apellido(apellido)
    {
        this._apellido = apellido;
    }

    nombreCompleto()
    {
        return this._nombre + " " + this._apellido;
    }

    toString()
    {
        return this.nombreCompleto();
    }

    static saludar()
    {
        console.log("Saludos desde método static");
    } 

    static saludar2(persona)
    {
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona
{
    constructor(nombre, apellido, departamento)
    {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento ()
    {
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento = departamento;
    }

    nombreCompleto()
    {
        return super.nombreCompleto() + ", " + this._departamento
    }
}

let persona1 = new Persona("Alex", "Albon");
console.log(persona1);
//persona1.saludar(); //No es posible llamar un método static desde un objeto.
Persona.saludar();
Persona.saludar2(persona1);

let empleado1 = new Empleado("Héctor", "López", "RRHH");
console.log(empleado1.toString());

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjectosPersona); //No se puede ya que los atributos estaticos estan asociados a la clase, no al objeto
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);