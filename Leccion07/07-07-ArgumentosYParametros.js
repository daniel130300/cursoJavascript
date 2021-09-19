//Los parámetros son la lista de valores que va a recibir una función
//Los argumentos son los valores que proporcionamos al mandar a llamar una función

let sumar = function (a, b = 0){ //Podemos definir valores por default a los parametros de una función
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}

/*NOTA: En Javascript no es necesario que mandemos 
todos argumentos a una función*/

let resultado = sumar(3); 

console.log(resultado);

resultado = sumar(1,2); 

console.log(resultado);

/*NOTA: En Javascript no es necesario que el número de argumentos coincida 
con el número de parámetros de una función*/
resultado = sumar(3,4,5);





