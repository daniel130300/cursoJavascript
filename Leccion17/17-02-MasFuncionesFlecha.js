
//NOTA: El concepto de hoisting no se aplica a nuestras funciones flecha

function miFuncion()
{
    console.log("saludos desde mi función");
}

//const miFuncionFlecha = () =>{
//    console.log("saludos desde mi función flecha");
//}

const miFuncionFlecha = () => console.log("saludos desde mi función flecha");

miFuncionFlecha();

//const saludar = () => 
//{
//    return "Saludos desde una función flecha";
//}

const saludar = () => "Saludos desde una función flecha";
console.log(saludar());


const regresarObjeto = () => ({nombre: 'Juan', apellido: "Lara"}); //Para regresar un objeto ponemos un parentesis antes y despúes del objeto.
console.log(regresarObjeto());

//const funcionconParametros = (mensaje) => console.log(mensaje);
const funcionconParametros = mensaje => console.log(mensaje);
funcionconParametros("saludos con parametros");



