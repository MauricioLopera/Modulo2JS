// function unaFuncion(){
//     console.log(1);
//     console.log(2);
//     console.log(3);

//     return 'Hola mundo';
// }

// unaFuncion();

// var mensaje = unaFuncion();
// console.log(mensaje);

// ----------------------------
// console.log("2 x 0 =", 2 * 0);
// console.log("2 x 1 =", 2 * 1);
// console.log("2 x 2 =", 2 * 2);
// console.log("2 x 3 =", 2 * 3);
// console.log("2 x 4 =", 2 * 4);
// console.log("2 x 5 =", 2 * 5);
// console.log("2 x 6 =", 2 * 6);
// console.log("2 x 7 =", 2 * 7);
// console.log("2 x 8 =", 2 * 8);
// console.log("2 x 9 =", 2 * 9);
// console.log("2 x 10 =", 2 * 10);

// - funcion multiplicar

// function tablaDelDos(){
//     for (i = 0; i <=10; i++){
//         console.log("2 x ", i, "=", 2 * i);
//     }
// }

// tablaDelDos();

// - suma 

// function Suma (num1, num2){
//     var resultado = num1 + num2;

//     alert('El resultado es: ' + resultado);

    
// }

// Suma(5,30);

// ---- return

// function sumatoria(num1, num2){
//     var total = num1 + num2;

//     return 'La sumatoria es: ' + total;
// }

// var valorTotal = sumatoria(9,8);
// console.log(valorTotal); 

// ------ this.

// function saludo (nombre, edad){

//     this.nombre = nombre;
//     this.edad = edad;
//     console.log("Hola yo soy: " + this.nombre + " " +
//     "mi edad es: " + this.edad);
// }

// saludo('Jesus', 25);

// - 

// function diaActual(){
//     var fecha = new Date();
//     alert('Hoy es: ' + fecha.getDate());
// }

// diaActual();

// ---- Solución -----  

// var numero =  prompt("Introduce un numero entero");

// function numeroImpar(numero){
//     if(numero % 2 == 0){
//         return "par";
//     }
//     else{
//         return "impar";
//     }
// }

// var resultado = numeroImpar(numero);
// alert ("El numero " + numero + "es" + resultado);

// ----------------------------------


/** Definir una función la cual determine si una cadena de texto
 * ingresada por un usuario es un palindromo o no. 
 */

var texto;
var resultado;
texto = prompt("Ingrese una oracion");

function palindromo(texto){

    var cadenaPrincipal = texto.toLowerCase().toUppercase();

    // convertimos la cadena en un arreglo
    var letrasEspacios = cadenaPrincipal.split("");

    var cadenaSinEspacios = "";

    for(i in letrasEspacios){
        if(letrasEspacios[i] != " "){
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios;

    var reverse = cadenaSinEspacios.split("").reverse("");


    var igual = true;

    for(i in letras){
        if(letras[i] == reverse[i]){


        }

        else{
            
            igual = false;
        }

    }

    if(igual){

        resultado += "Es un palindromo";

    }
    else{
        resultado += "No es un palindromo";
    }

    return resultado;
}

resultado = "La cadena que ingresaste: ";
alert(palindromo(texto));




/** Definir una función que muestre la informacion sobre una
 * cadena de texto ingresada por un usuario. La funcion debe
 * determinar si esta formada por mayusculas, minusculas o ambos
 */