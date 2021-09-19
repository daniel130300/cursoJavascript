let resultado = sumarTodo(5, 4, 13, 10, 9, 61, 43);
console.log(resultado);

function sumarTodo()
{
    let acumulador = 0; 
    for(let i= 0; i<arguments.length; i++)
    {
        acumulador += arguments[i];
    }
    
    return acumulador;
}
