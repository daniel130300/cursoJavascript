/*
Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100). 
Escribe un programa que imprima el número más alto del arreglo (Si se
repite, solo imprimir una vez).
*/

const myArray = [];

//poblar el arreglo
for(let i=0; i<100; i++)
{
    myArray[i] = i+1;
}

//numero más alto del arreglo
function numeroMasAlto(arreglo)
{
    let numeromayor = -1;

    for(let i=0; i<arreglo.length; i++)
    {
        if(arreglo[i] > numeromayor)
        {
            numeromayor = arreglo[i];
        }
    }

    return numeromayor;
}

console.log(numeroMasAlto(myArray));