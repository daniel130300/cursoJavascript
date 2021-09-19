let miNumero = "18";

let edad = Number(miNumero);

if (isNaN(edad))
{
    console.log("No es un número")
}
else
{
    if(edad>=18)
    {
        console.log("Puede votar");
    }
    else
    {
        console.log("Muy joven para votar");
    }
}

let resultado = (edad>=18) ? "Puede votar" : "Muy joven para votar";