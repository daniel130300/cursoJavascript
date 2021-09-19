//La función setInterval es parecida a la función setTimeout
//La función setInterval manda a llamar la función después de cada cierto tiempo

let reloj = () => {

    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000);