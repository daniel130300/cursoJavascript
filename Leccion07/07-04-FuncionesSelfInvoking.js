//De esta forma se manda a llamar una función de tipo self invoking

(function(a ,b)
{
    console.log("Ejecutando la función: " + (a+b));
})(3, 4);