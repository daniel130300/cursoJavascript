//Llamadas asíncronas con uso de setTimeout

function miFuncionCallback()
{
    console.log("saludo asíncrono después de 3 seg");
}

setTimeout(miFuncionCallback, 3000); //La función que se le manda como parametro se ejecuta después de 3 segundos

setTimeout(()=>console.log("saludo asíncrono 2 después de 4 seg"), 4000);

setTimeout(function(){console.log("saludo asíncrono 3 después de 5 seg")}, 1000);