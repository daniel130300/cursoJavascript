let hora = 6;
let mensaje;

if(hora>=0 && hora<6)
{
    mensaje = "Durmiendo";
}
else if (hora>=6 && hora<=11)
{
    mensaje = "Buenos dias";
}
else if (hora>=12 && hora<=18)
{
    mensaje = "Buenas tardes";
}
else if (hora >=19 && hora <=24)
{
    mensaje = "Buenas noches";
}
else
{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);