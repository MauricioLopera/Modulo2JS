//variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg, cantidadCaracteres;

nombreCompleto = prompt('Ingresa tu nombre').toUpperCase().trim();
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año de actual'));

//proceso logico
if(nombreCompleto ==="" && añoActual === 0 && añoNacimiento === 0)
{
    msg = "Te faltaron datos por favor ingresalos todos"
}
else if(añoNacimiento > añoActual)
{
    msg = "Pilas el año nacimiento no puede ser mayor al actual"
}
else
{
    //obtener cantidad de caracteres de un string
    cantidadCaracteres = nombreCompleto.length;
    console.log(cantidadCaracteres);

    edad = añoActual - añoNacimiento;

    if(edad <= 12)
    {
        msg = `Hola ${nombreCompleto} tu eres un niño aun`;
    }
    else if (edad > 12 && edad <18)
    {
        msg = `Hola ${nombreCompleto} tu eres un adolecente`;
    }
    else if (edad >= 18 && edad < 65)
    {
        msg = `Hola ${nombreCompleto} tu eres un adulto`;
    }
    else
    {
        msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
    }
}

// if((nombreCompleto !=="" && añoActual !== 0 && añoNacimiento !== 0) && (añoNacimiento < añoActual))
// {
//     edad = añoActual - añoNacimiento;

//     if(edad <= 12)
//     {
//         msg = `Hola ${nombreCompleto} tu eres un niño aun`;
//     }
//     else if (edad > 12 && edad <18)
//     {
//         msg = `Hola ${nombreCompleto} tu eres un adolecente`;
//     }
//     else if (edad >= 18 && edad < 65)
//     {
//         msg = `Hola ${nombreCompleto} tu eres un adulto`;
//     }
//     else
//     {
//         msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
//     }
    
// }
// else
// {
//     msg = "Los datos ingresados no son correctos, intenta de nuevo"
// }

//salida de datos
alert(msg);