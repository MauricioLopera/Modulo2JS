//1. Datos de entrada que necesito
var nombre, apellido, añoNacimiento, añoActual, edad, mitad;
/*var nombre;
var apellido;
var añoNacimiento;
var añoActual;*/
nombre = prompt('Ingresa tu Nombre');
apellido = prompt('Ingresa tu Apellido');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año actual'));

//2. Que tengo que hacer con esos datos
edad = añoActual - añoNacimiento;
mitad = añoNacimiento / añoActual;

//3. Como y que tengo que mostrar al usuario
document.write(`Hola ${nombre} ${apellido}, tu edad es: ${edad}, la división arroja ${mitad}`);

