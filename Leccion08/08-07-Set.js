let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    idioma: "es",
    set lang(idioma){
        this.idioma = idioma.toUpperCase();
    },
    get lang(){
        return this.idioma.toUpperCase();
    },    
    get nombreCompleto()
    {
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = "us";
console.log(persona.lang);

