let txtNombre, añoNac, edad, añoActual;

function capturaNombre ()
{
    txtNombre = document.getElementById('nombre');

    alert('Tu nombre es ' + txtNombre.value);
}

function calcularEdad()
{
    let fecha = new Date();
    añoNac = Number(document.getElementById('fecha').value.slice(0,4));
    añoActual = fecha.getFullYear();

    if(añoActual < añoNac)
    {
        alert('Elige un año de nacimiento valido');
    }
    else
    {
        //obtener la edad con meses incluidos
        edad = añoActual - añoNac;

        document.getElementById('edad').innerText = 'Tu edad es: ' + edad;
    }
}

document.getElementById('calcular').addEventListener('click', calcularEdad);

function cambiarColor()
{
    //vuelva a tener el color azul
    document.getElementById('cuerpo').style.backgroundColor = '#b2dfdb';
}

