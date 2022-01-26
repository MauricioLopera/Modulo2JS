//variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg;

nombreCompleto = prompt('Ingresa tu nombre');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año de actual'));

//proceso logico
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

//salida de datos
alert(msg);