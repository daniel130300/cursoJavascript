let promesa = new Promise((resolved) => { //el manejo del error en una promesa es opcional
    setTimeout(()=>resolved("saludos con promesa y timeout"), 1000);
});

promesa.then(mensaje=>console.log(mensaje));