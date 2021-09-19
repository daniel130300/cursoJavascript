
//Funcion constrcutor de objectos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

Persona.prototype.telefono = "443322";

let padre = new Persona("Juan", "Perez", "jperez@ail.com");
console.log(padre.telefono);

let madre = new Persona("Iris", "Borjas", "iborjas@mail.com");
console.log(madre);