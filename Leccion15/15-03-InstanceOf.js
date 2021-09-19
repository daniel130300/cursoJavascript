class Empleado
{
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles()
    {
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
    
}


class Gerente extends Empleado
{
    constructor(nombre, sueldo, departamento)
    {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles()
    {
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

function imprimir(tipo)
{
    console.log(tipo.obtenerDetalles());

    //Cuando queramos determinar el tipo de una clase, es mjeor mepezar conla clase de menor jerarquía 
    //hasta llegar a la clase de mayor jerarquía
    if(tipo instanceof Gerente) //Con la palabra reservada instaceof podemos evaluar de que tipo de instancia es un objeto 
    {
        console.log("Es un tipo gerente");
    }
    else if(tipo instanceof Empleado)
    {
        console.log("Es un tipo empleado");
    }
    else if(tipo instanceof Object)
    {
        console.log("Es un tipo object");
    }
}


let empleado1 = new Empleado("Juan", 3000);
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

//Polimorfismo significa multiples formas
//Para este caso sería llamar a un método de la clase padre o de la clase hija
//Aqui estamos aplicando las multiples formas en que se puede llamar un método, dependiendo del tipo 

imprimir(empleado1);
imprimir(gerente1);

