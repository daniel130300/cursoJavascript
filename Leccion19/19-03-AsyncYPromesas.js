let promesa = new Promise((resolved) => { //el manejo del error en una promesa es opcional
    setTimeout(()=>resolved("saludos con promesa y timeout"), 1000);
});


//FORMAS MAS SIMPLE DE PODER UTILIZAR UNA PROMESA DEFINITIVAMENTE

//async indica que una función regresa una promesa
async function miFuncionConPromesa(){   
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor=>console.log(valor));