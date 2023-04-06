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
botonCronometro.addEventListener('click', iniciarSectionCronometro)

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

function iniciarSectionCronometro()
{
    sectionContador.style.display = 'none'
    sectionCronometro.style.display = 'flex'
}


let horas = 0
let minutos = 0
let segundos = 0

// Definir una variable para almacenar el ID del intervalo
let intervaloId;

// Definir funciones para incrementar las horas, minutos y segundos
function incrementarHoras() {
  horas++;
  document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
}

function incrementarMinutos() {
  if (minutos === 59) {
    incrementarHoras();
    minutos = 0;
  } else {
    minutos++;
  }
  document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
}

function incrementarSegundos() {
  if (segundos === 59) {
    incrementarMinutos();
    segundos = 0;
  } else {
    segundos++;
  }
  document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;
}

// Definir una función para iniciar el cronómetro
function iniciarCronometro() {
  intervaloId = setInterval(incrementarSegundos, 1000);
}

// Definir una función para detener el cronómetro
function detenerCronometro() {
  clearInterval(intervaloId);
}

// Definir una función para reiniciar el cronómetro
function reiniciarCronometro() {
  clearInterval(intervaloId);
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById("horas").innerHTML = "00";
  document.getElementById("minutos").innerHTML = "00";
  document.getElementById("segundos").innerHTML = "00";
}

// Asociar los eventos a los botones
document.getElementById("botonIniciar").addEventListener("click", iniciarCronometro)
document.getElementById("botonDetener").addEventListener("click", detenerCronometro)
document.getElementById("botonResetear").addEventListener("click", reiniciarCronometro)


window.addEventListener('load', iniciarApp)