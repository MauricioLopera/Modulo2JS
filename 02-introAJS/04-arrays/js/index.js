/*Desafio:
    1. Solicitar los nombres completos de los miembros de la familia separados por (,)
    2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola.
    3. Combinar los dos arrays en uno solo y reodenarlo de atras hacia adelante y lo vamos a mostrar al usuario.
    4. Agregar las validaciones que crean necesarias.
*/
//variables y entradas
var nombre, apellido1, apellido2, nombreCompleto;
var arrayNombre = []; //inicializo arreglo vacio

nombre = prompt('Ingresa tu nombre');
apellido1 = prompt('Ingresa tu primer apellido');
apellido2 = prompt('Ingresa tu segundo apellido');

//logica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;

//salidas
console.log(arrayNombre);
alert(nombreCompleto);