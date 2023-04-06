const contador = document.getElementById("contador")
const aumentar = document.getElementById("aumentar")
const sectionContador = document.getElementById("sectionContador")
const sectionCronometro = document.getElementById("sectionCronometro")
aumentar.addEventListener('click', Sumar)
const disminuir = document.getElementById("disminuir")
disminuir.addEventListener('click', Restar)
const reiniciarContador = document.getElementById("reiniciar")
reiniciarContador.addEventListener("click", Reiniciar)
const botonCronometro = document.getElementById("botonCronometro")
botonCronometro.addEventListener('click', iniciarCronometro)

function iniciarApp()
{
    sectionCronometro.style.display = 'none'
    sectionContador.style.display = 'flex'    
}

let conteo = 0

function Sumar()
{
    conteo = conteo + 1
    if(conteo === 0)
    {
        contador.style.color = 'black'
    }
    else if(conteo >= 1)
    {
        contador.style.color = 'green'
    }
    contador.innerHTML = conteo
}

function Restar()
{
    conteo = conteo - 1
    if(conteo === 0)
    {
        contador.style.color = 'black'
    }
    else if(conteo <= -1)
    {
        contador.style.color = 'red'
    }
    contador.innerHTML = conteo
}

function Reiniciar()
{
    conteo = 0
    contador.style.color = 'black'
    contador.innerHTML = 0
}

function iniciarCronometro()
{
    sectionContador.style.display = 'none'
    sectionCronometro.style.display = 'flex'
}

window.addEventListener('load', iniciarApp)