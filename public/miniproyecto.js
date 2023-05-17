const sectionInicioUsuario = document.getElementById("iniciarSesion")
const sectionHerramientas = document.getElementById("sectionHerramientas")

//INICIO SESION

document.getElementById("botonConfirmar").addEventListener('click', obtenerUsuario)
const inicioUsuario = document.getElementById("usuario")
const elementoUsuario = document.getElementById("nombreUsuario")
const valorUsuario = elementoUsuario.value
console.log(valorUsuario)

fetch('http://localhost:3000/datos')
  .then(response => response.json())
  .then(data => {
    console.log(data)      // 12345
  })

function obtenerUsuario()
{
  fetch('/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ valorUsuario: valorUsuario })
  })
  .then(function(response) {
    // Maneja la respuesta del servidor
    if (response.ok) {
      alert('Nombre de usuario enviado exitosamente');
    } else {
      alert('Error al enviar el nombre de usuario');
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
  }); 
};





//HERRAMIENTAS

document.getElementById("botonConfirmar").addEventListener("click", iniciarSectionHerramientas)

function iniciarSectionHerramientas() 
{
  sectionInicioUsuario.style.display = 'none'
  sectionContador.style.display = 'none'
  sectionHerramientas.style.display = 'flex'
  sectionReloj.style.display = 'none'
  sectionCronometro.style.display = 'none'  
}

//CONTADOR

function iniciarSectionContador()
{
  sectionHerramientas.style.display = 'flex'
  sectionContador.style.display = 'flex'
  sectionReloj.style.display = 'none'
  sectionCronometro.style.display = 'none'
}

const contador = document.getElementById("contador")
const sectionContador = document.getElementById("sectionContador")
document.getElementById("aumentar").addEventListener('click', Sumar)
document.getElementById("disminuir").addEventListener('click', Restar)
document.getElementById("reiniciar").addEventListener("click", Reiniciar)
document.getElementById("botonContador").addEventListener('click', iniciarSectionContador)


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



// CRONÓMETRO

function iniciarSectionCronometro()
{
  sectionHerramientas.style.display = 'flex'
  sectionCronometro.style.display = 'flex'
  sectionReloj.style.display = 'none'
  sectionContador.style.display = 'none' 
}

// Asociar los eventos a los botones
const sectionCronometro = document.getElementById("sectionCronometro")
document.getElementById("botonCronometro").addEventListener('click', iniciarSectionCronometro)
document.getElementById("botonIniciar").addEventListener("click", iniciarCronometro)
document.getElementById("botonDetener").addEventListener("click", detenerCronometro)
document.getElementById("botonResetear").addEventListener("click", reiniciarCronometro)


let horas = 0
let minutos = 0
let segundos = 0

// Definir una variable para almacenar el ID del intervalo
let intervaloId

// Definir funciones para incrementar las horas, minutos y segundos
function incrementarHoras() {
  horas++
  document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas
}

function incrementarMinutos() {
  if (minutos === 59) 
  {
    incrementarHoras()
    minutos = 0
  } 
  else 
  {
    minutos++
  }
  document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos
}

function incrementarSegundos() {
  if (segundos === 59) 
  {
    incrementarMinutos()
    segundos = 0
  } 
  else 
  {
    segundos++;
  }
  document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos
}

// Definir una función para iniciar el cronómetro
function iniciarCronometro() 
{
  intervaloId = setInterval(incrementarSegundos, 1000)
}

// Definir una función para detener el cronómetro
function detenerCronometro() 
{
  clearInterval(intervaloId)
}

// Definir una función para reiniciar el cronómetro
function reiniciarCronometro() 
{
  clearInterval(intervaloId)
  horas = 0
  minutos = 0
  segundos = 0
  document.getElementById("horas").innerHTML = "00"
  document.getElementById("minutos").innerHTML = "00"
  document.getElementById("segundos").innerHTML = "00"
}



//Reloj 

function iniciarSectionReloj()
{
  sectionHerramientas.style.display = 'flex' 
  sectionReloj.style.display = 'flex'
  sectionContador.style.display = 'none'
  sectionCronometro.style.display = 'none'

  iniciarReloj()
}

const sectionReloj = document.getElementById("sectionReloj")
const reloj = document.getElementById("reloj")
document.getElementById("botonReloj").addEventListener('click', iniciarSectionReloj)

function iniciarReloj()
{
  let now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  reloj.innerHTML = `${hours}:${minutes}:${seconds}`
  setTimeout(iniciarReloj, 1000)
}




function iniciarApp()
{
  sectionInicioUsuario.style.display = 'flex'
  sectionContador.style.display = 'none'
  sectionHerramientas.style.display = 'none'
  sectionReloj.style.display = 'none'
  sectionCronometro.style.display = 'none'
}


window.addEventListener('load', iniciarApp)
