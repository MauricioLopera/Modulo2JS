//variables y entradas
var cantidad, promedio;
var notas = [];
var sumatoria = 0;

cantidad = Number(prompt('Ingrese la cantidad de notas a promediar'));

//logica
for(var i=1; i <= cantidad; i++)
{
    notas.push(Number(prompt(`Ingresa la nota ${i}`)));

    sumatoria = sumatoria + notas[i-1];
    //sumatoria = sumatoria + Number(prompt(`Ingresa la nota ${i}`))
}

promedio = sumatoria / cantidad;

//salidas
alert(`El promedio de las ${cantidad} notas es: ${promedio}`);
console.log(notas);