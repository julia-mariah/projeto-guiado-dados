const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')
// cria um titulo --POST -- save()
router.post('/', controller.criaTitulo)
//Ler todos os titulos -- GET -- find()
router.get('/', controller.mostraTitulos)
//Ler todos os titulos da Marvel -- Get -- find()
router.get('/', controller.mostraTitulosMarvel)
//Ler todos os titulos da Ghibli -- Get -- find()

//Ler todos os titulos da Pixar -- Get -- find()

// Atualizar um titulo

//Deletar um titulo

module.exports = router