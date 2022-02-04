/*
Crear una aplicacion que permita a un profesor generar las notas definitivas de
sus alumnos.

Debemos permitir al profesor que nos indique cuantos alumnos va a calificar
Debemos permitir al profesor ingresar la cantidad de notas que va promediar 
en general.
Con esas notas vamos obtener el promedio de cada estudiante
Mostrar al profesor al final una lista de estudiantes con su nombre y 
su definitiva.
 */

//variables y entradas
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = Number(prompt('Ingresa la cantidad de alumnos de tu clase'));
cantidadNotas = Number(prompt('Ingresa la cantidad de notas a promediar de los Alumnos'));

//proceso logico
for(i = 1; i <= cantidadAlumnos; i++){
    var sumatoria = 0;

    nombre = prompt('Ingresa el nombre del alumno ' + i);
    
    for(j = 1; j <= cantidadNotas; j++){
        nota = Number(prompt('Ingresa la nota' + j));
        sumatoria = sumatoria + nota;
    }
    promedio = sumatoria / cantidadNotas;

    alumno = "Alumno: " + nombre + " - Calificacion: " + Math.round(promedio,2);

    resultados.push(alumno);
}

function imprimeResultados(resultados)
{
    var lista = "";
    for(i = 0; i < resultados.length; i++){
        lista = lista + resultados[i] + "<br>";
    }

    return lista;
}

//impresion de resultado
var imprimir = imprimeResultados(resultados);

document.write(imprimir);

