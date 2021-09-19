class Orden
{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS()
    {
        return 5;
    }

    constructor()
    {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    agregarProducto(producto)
    {
        if(this._productos.length < Orden.MAX_PRODUCTOS)
        {
            this._productos.push(producto);
        }
        else
        {
            console.log("No se pueden agregar más productos a esta orden.");
        }
    }

    calcularTotal()
    {
        let total = 0;

        for(let producto of this._productos)
        {
            total+=producto.getPrecio;
        }

        return total;
    }

    mostrarOden()
    {
        let productosOrden = '';

        for(let producto of this._productos)
        {
            productosOrden+= '\n{'+ producto.toString()+'}';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

    toString()
    {
        return `${this._idOrden} ${this._productos}`;
    }
}


class Producto
{
    static contadorProductos = 0;

    constructor(nombre, precio)
    {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio
    }

    get getIdProducto()
    {
        return this._idProducto;
    }

    get getNombre()
    {
        return this._nombre;
    }

    get getPrecio()
    {
        return this._precio;
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }

    set setPrecio(precio)
    {
        this._precio = precio;
    }

    toString()
    {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }   
}

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 100);
let producto3 = new Producto("Cinturon", 50);

console.log(producto1.toString());
console.log(producto2.toString());


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);


orden1.mostrarOden();
console.log(orden1.calcularTotal());


let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.mostrarOden();