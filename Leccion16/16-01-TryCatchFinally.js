"use strict";

try
{
    let x = 10;
    //miFuncion();
}
catch(error)
{
    console.log(error);
}
finally //Este bloque siempre se ejecutará independientemente de que entre en el try o catch
{
    console.log("Termina la revisión de errores")
}

console.log("continuamos....");