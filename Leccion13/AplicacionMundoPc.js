class DispositivoEntrada
{
    constructor(tipoEntrada, marca)
    {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() 
    {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) 
    {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() 
    {
        return this._marca;
    }

    set marca(marca) 
    {
        this._marca = marca;
    }

    toString()
    {
        return `tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada
{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    
    toString()
    {
        return `idRaton: ${this._idRaton}, ${super.toString()}`;
    }
}


class Teclado extends DispositivoEntrada
{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString()
    {
        return `idTeclado: ${this._idTeclado}, ${super.toString()}`;
    }
}

class Monitor
{
    static contadorMonitores = 0;

    constructor(marca, tamanio)
    {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio; 
    }

    get idMonitor()
    {
        return this._idMonitor;
    }

    get marca()
    {
        return this._marca;
    }

    set marca(marca)
    {
        this._marca = marca;
    }

    get tamanio()
    {
        return this._tamanio;
    }

    set tamanio(tamanio)
    {
        this._tamanio = tamanio;
    }

    toString()
    {
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}`;
    }
}

class Computadora
{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton)
    {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString()
    {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n  Monitor: [ ${this._monitor.toString()} ]\n  Raton: [ ${this._raton.toString()} ]\n  Teclado: [ ${this._teclado.toString()} ]`;
    }
}

class Orden
{   
    static contadorOrdenes = 0;

    constructor()
    {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora)
    {
        this._computadoras.push(computadora);
    }

    mostrarOrden()
    {
        let computadorasOrden = '';

        for(let computadora of this._computadoras)
        {
            computadorasOrden+='\n'+computadora.toString();
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let teclado1 = new Teclado("Bluetooth", "MSI");
console.log(teclado1.toString());

let teclado2 = new Teclado("USB", "Acer");
console.log(teclado2.toString());

let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());

let raton2 = new Raton("Bluetooth", "Dell");
console.log(raton2.toString());

let monitor1 = new Monitor("HP", 15);
console.log(monitor1.toString());

let monitor2 = new Monitor("Dell", 27);
console.log(monitor2.toString());

let computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
console.log(computadora1.toString());

let computadora2 = new Computadora("Armada", monitor2, teclado2, raton2);
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);

orden2.mostrarOden();