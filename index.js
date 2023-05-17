const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

// Configura el middleware para procesar solicitudes JSON
app.use(express.json());

app.get('/datos', (req, res) => {
  const data = '12345'
    res.send(data)
  })

// Inicia el servidor en el puerto deseado
app.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000')
})

