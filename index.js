const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.static('publico'))
app.use(cors())
app.use(express.json())

// Configura el middleware para procesar solicitudes JSON
app.use(express.json())

const usuarios = []

// Obtener el dato enviado por el frontend
app.post("/usuarios/:valorUsuario", (req, res) => {
  
  const valorUsuario = req.params.valorUsuario || ""
  usuarios.push(valorUsuario)

  console.log(usuarios)
  res.end()
})

// Inicia el servidor en el puerto deseado
app.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000')
})

