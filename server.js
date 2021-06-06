const express = require("express")
const app = express()

//conectar db
const db = require("./src/data/database")
db.connect()

app.use(express.json())
app.listen(3333, ()=> console.log("Servidor Rodando!"))