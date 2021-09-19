/*
Tienes un arreglo (llamado myArray) con 10 elementos (enteros en el rango de 1
a 5). Escribe un programa que imprima el número que más se repite del arreglo y
también imprimir la cantidad de veces que aparece.
*/

const myArray = [1, 1, 2, 3, 4, 4, 4, 5, 3, 4, 5, 5];

function numeroMasReperido(myArray) {

    myArray.sort();

    var actual = null;
    var contador = 0;
    for (let i = 0; i < myArray.length; i++) 
    {
        if (myArray[i] != actual) 
        {
            if (contador > 0) 
            {
                console.log(actual + ' : ' + contador);
            }

            actual = myArray[i];
            contador = 1;
        } 
        else 
        {
            contador++;
        }
    }
    if (contador > 0) 
    {
        console.log(actual + ' : ' + contador);
    }

}

numeroMasReperido(myArray);