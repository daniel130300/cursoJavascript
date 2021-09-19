//En una promesa primero mandamos luego como parametro las 2 funciones con las cuales
//se resolvera o se rechazará la promesa, luego de eso abrimos el cuerpo de cuando queremos
//que se ejecute una o la otra y le mandamos sus parametros.

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    
    if(expresion)
    {
        resolved('Resolvió correcto');
    }
    else
    {
        rejected('Se produjo un error');
    }
});


//Una vez definida la promesa, la mandamos a ejecutar y definimos el comportamiento
//de las funciones resolved y rejected respectivamente
/*
miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);
*/

//Otra forma en la cual podemos mandar a llamar una promesa es utilizando
//en el catch la función que se ejecutará en el caso de rejected
miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));
