/*let autos = new Array("BMW", "Mercedes Benz", "Volvo"); //Esta es la forma antigua*/


const autos = ["BMW", "Mercedes Benz", "Volvo"];

autos[1] = "MercedesBenz";

console.log(autos[1]);

autos.push("Honda");

console.log(autos);

console.log(autos.length);

autos[autos.length] = "Cadillac";

console.log(autos);

autos[6] = "Porsche";

console.log(autos);