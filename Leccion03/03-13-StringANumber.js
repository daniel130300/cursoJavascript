let miNumero = "10";

console.log(typeof miNumero);

let edad = Number(miNumero);

console.log(typeof edad);



let resultado = (edad > 18) ? "La persona puede votar" : "Muy joven para votar";

edad = (typeof miNumero === "string") ? Number(edad) : miNumero;

console.log(typeof edad);
console.log(resultado);

