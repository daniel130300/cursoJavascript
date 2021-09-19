class Solucion
{
    palindroo(cadena) {
        const cadenaAlReves = cadena.split("").reverse().join("");
    
        console.log(cadenaAlReves);
      
        return cadenaAlReves === cadena ? "es palindromo" : "no es palindromo";
    }

}

const solucion = new Solucion();

console.log(solucion.palindroo("oso"));