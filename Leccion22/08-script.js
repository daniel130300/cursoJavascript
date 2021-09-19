document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("txtNombre").addEventListener("focus", cambiar);
    document.getElementById("txtNombre").addEventListener("blur", regresar);
    document.getElementById("txtApellido").addEventListener("focus", cambiar);
    document.getElementById("txtApellido").addEventListener("blur", regresar);
});

function cambiar(e)
{
    let componente = e.target;

    componente.style.background = "yellow";
}

function regresar(e)
{
    let componente = e.target;
    componente.style.background = "white";
}