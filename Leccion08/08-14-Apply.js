//NOTA LA DIFERENCIA ENTRE CALL Y APPLY ES QUE APPLY MANDA LOS ARGUMENTOS 
//COMO UN ARREGLO AL METODO EN LUGAR DE HACERLO DE FORMA INDIVIDUAL COMO EN CALL

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono)
    {
        return titulo + " " + this.nombre + " " + this.apellido + " " + telefono;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de apply para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto("Lic", "343242543"));
console.log(persona1.nombreCompleto.apply(persona2, ["Ing", "2432432"]));