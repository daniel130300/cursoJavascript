let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    nombreCompleto: function(){return this.nombre + " " + this.apellido;}
}

//Agregar una propiedad al objeto
persona.telefono = "96241243";
console.log(persona);


//Eliminar una propiedad al objecto

delete persona.telefono;
console.log(persona);
