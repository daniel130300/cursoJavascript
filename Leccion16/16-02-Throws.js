
"use strict";
let resultado = "";

try
{
    //x = 10;
    if(typeof(resultado) === "undefined") 
    {
        throw 'No esta inicializado';
    }
    else if(isNaN(resultado)) 
    {
        throw 'No es un número';
    }
    else if(resultado === "")
    {   
        throw "Es una cadena vacía";
    }
}
catch(error)
{
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally
{
    console.log("Termina la revisión de errores");
}