const contador = document.getElementById("contador")
const aumentar = document.getElementById("aumentar")
aumentar.addEventListener("click", Sumar)
const disminuir = document.getElementById("disminuir")
disminuir.addEventListener("click", Restar)

let conteo = 0

function Sumar()
{
    conteo = conteo + 1
    contador.innerHTML = conteo
}

function Restar()
{
    conteo = conteo - 1
    contador.innerHTML = conteo
}