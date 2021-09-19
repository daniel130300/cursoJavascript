
//Funcion constrcutor de objectos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}


let padre = new Persona("Juan", "Perez", "jperez@ail.com");
console.log(padre);

let madre = new Persona("Iris", "Borjas", "iborjas@mail.com");
console.log(madre);