document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("txtNombre").addEventListener("focus", (e)=>{
        e.target.style.background = "red";
    });
    
    document.getElementById("txtNombre").addEventListener("blur", (e)=>{
        e.target.style.background = "";
    });

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