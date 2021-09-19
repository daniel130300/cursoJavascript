let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    nombreCompleto: function(){return this.nombre + " " + this.apellido;}
}

//Concatenar cada valor de cada propiedad 
console.log(persona.nombre + ", " + persona.apellido + ", " +  persona.email);

//For in 
for(prop in persona)
{
    console.log("persona." + prop + ": " + persona[prop]);
}

let personaValues = Object.values(persona);
console.log(personaValues);

let personaKeys = Object.keys(persona);
console.log(personaKeys);

//Metodo preferido personalmente
let personaString = JSON.stringify(persona);
console.log(personaString);