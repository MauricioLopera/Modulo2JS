// let carro = {
//     llantas: 4, // int 
//     color: "rojo", // string
//     puertas: 5,
//     usaGasolina: true
// };


let animalesTundra ={
    nombre:  "Lobo",
    especie: "Mamifero",
    patas: 4,
    peso: 35,
    color: "gris",
    aullar: function() {
        return (`El ${this.nombre} bebé aulla por su madre`)
     },
        comer: function(){
            console.log(`El lobo esta comiendo una foca`)
    }

}

console.log(animalesTundra.aullar());



const animalTundra = ["Lobo","Mamifero",4,35 , "gris"];

const [var0,var1,var2,var3,var4] = animalTundra;

console.log(`El ${var0} es un ${var1}, tiene ${var2} patas, su peso es ${var3} kg y el color de su pelo es
 ${var4}`);


// const [nombre, edad, ...rest] = empleado;

// console.info(`${nombre} tiene ${edad}`); 
// console.info(`los datos completos son: ${rest}`);


// console.log(carro.color);
// console.log(carro.puertas);

// console.log(carro['usaGasolina']);
// console.log(carro['puertas']);

// metodos del objeto

// let perro = {
//     nombre: "Canelo",
//     colo: "Cafe",
//     edad: 3,
//     raza: "Doberman",
//     ladrar: function() {
//         return (`${this.nombre} puede ladrar wau wau`)
//     },
//     comer: function(){
//         console.log('yomi yomi')
//     }
// };

// console.log(perro.ladrar());
// console.log(perro.comer());

// // añadimos valores
// perro.tamaño = "grande";
// perro.macho = true;

// console.log(perro);

// // modificar valores
// perro.edad = 5;

// // eliminar un valor
// delete perro.raza;


// destructuracion 

// const animales = ["Conejo","Gato","Perro","Rana"];
// const [animal1,animal2,animal3,animal4] = animales;

// console.log(`Mi primer mascota fue: ${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`);

// // ---- destructura lo que necesites ----

// const nombres = ["Zanahoria","Mei","Taco","Rene"];

// const [nombre0, , nombre2] = nombres;

// console.info(`Mis mascotas son: ${nombre0} y ${nombre2}`);

// // Uso del operador rest


// const empleado = ["Emilio", 24, "Puebla","Desarrollador front (El chido)", true];

// const [nombre, edad, ...rest] = empleado;

// console.info(`${nombre} tiene ${edad}`); 
// console.info(`los datos completos son: ${rest}`);