const Persona = {
    nombre:"Juan",
    apellido:"Perez"
}

function cambiarValorObjeto(p1)
{
    p1.nombre = "Carlos";
    p1.apellido = "Martinez";
}

cambiarValorObjeto(Persona);

console.log(Persona);