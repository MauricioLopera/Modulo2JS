//variables
let numero, operador;

//permite la suma de dos numeros
function Calculo(data){
    let resultado = 0;
    let operacion = '';

    for(i=0; i < data.length; i++)
    {
        if(data[i]==="+" || data[i]==="-" || data[i]==="x" || data[i]==="/")
        {
            operacion = data[i];
        }
        else
        {
            if(operacion === '')
            {
                resultado = Number(data[i]);
            }
            else
            {
                if(operacion === '+')
                {
                    resultado = resultado + Number(data[i]);
                }
                
                if(operacion === '-')
                {
                    resultado = resultado - Number(data[i]);
                }

                if(operacion === 'x')
                {
                    resultado = resultado * Number(data[i]);
                }
                
                if(operacion === '/')
                {
                    resultado = resultado / Number(data[i]);
                }
            }
            
        }
    }

    return resultado;
}

function CapturarDatos(id){
    //variables locales
    let imprimirTotal = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let historial = document.getElementById('historial');
    let array = [];
    let total;

    if(id==="+" || id==="-" || id==="x" || id==="c" || id==="/")
    {
        operaciones.innerText = imprimirTotal.innerText + ' ' + id;
        operador = 1;
    }
    else if(id==="=")
    {
        operaciones.innerText = operaciones.innerText + ' ' + imprimirTotal.innerText;
        array = operaciones.innerText.split(' ');
        total = Calculo(array);

        imprimirTotal.innerText = total;

        historial.innerText = operaciones.innerText + ' ' + id + ' ' + total;
    }
    else
    {
        numero = Number(id);

        if(imprimirTotal.innerText === '0' || operador === 1)
        {
            imprimirTotal.innerText= numero;
            operador = 0;
        }
        else
        {
            imprimirTotal.innerText= imprimirTotal.innerText + numero;
        }
        
    }
}
