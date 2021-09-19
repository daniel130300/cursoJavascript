let arithmeticExpressions = /[+\-*/.]/;

document.addEventListener("DOMContentLoaded", (e)=>{

    document.getElementById("btn1").addEventListener("click", agregarInput);
    document.getElementById("btn2").addEventListener("click", agregarInput);
    document.getElementById("btn3").addEventListener("click", agregarInput);
    document.getElementById("btn4").addEventListener("click", agregarInput);
    document.getElementById("btn5").addEventListener("click", agregarInput);
    document.getElementById("btn6").addEventListener("click", agregarInput);
    document.getElementById("btn7").addEventListener("click", agregarInput);
    document.getElementById("btn8").addEventListener("click", agregarInput);
    document.getElementById("btn9").addEventListener("click", agregarInput);
    document.getElementById("btn0").addEventListener("click", agregarInput);
    document.getElementById("btnMas").addEventListener("click", agregarInput);
    document.getElementById("btnMenos").addEventListener("click", agregarInput);
    document.getElementById("btnDividir").addEventListener("click", agregarInput);
    document.getElementById("btnMultiplicar").addEventListener("click", agregarInput);
    document.getElementById("btnResolver").addEventListener("click", resolver);
    document.getElementById("btnDel").addEventListener("click", delInput);
    document.getElementById("btnAc").addEventListener("click", acInput);
});


function agregarInput(e)
{
    let userInput = document.getElementById("userInput");
    userInput.value+=e.target.value;
}   


function resolver(e)
{
    let userInput = document.getElementById("userInput");
    let resultado = eval(userInput.value);
    userInput.value = resultado;
    
    /*
    let inputArray = userInput.value.split("");

    let arrayConvertido = [];

    let numeroCompleto = "";

    for(let i=0; i<inputArray.length; i++)
    {
        if(!isNaN(parseInt(inputArray[i])))
        {
            numeroCompleto+=inputArray[i];

            if(i==inputArray.length-1)
            {
                arrayConvertido.push(parseInt(numeroCompleto));
            }
        }
        else
        {
            arrayConvertido.push(parseInt(numeroCompleto));
            arrayConvertido.push(inputArray[i]);
            numeroCompleto = "";
        }
    }

    for(elemento of arrayConvertido)
    {
        console.log(elemento);
    }
    */
}

function delInput(e)
{
    let userInput = document.getElementById("userInput");
	userInput.value = userInput.value.substring(0, userInput.value.length-1);
}

function acInput(e)
{
    let userInput = document.getElementById("userInput");
    userInput.value = "";
}
