const express = require("express")
const { listarContatos } = require("./src/controllers/cadastro")

const rotas = express()

rotas.get('/', listarContatos)

module.exports = rotas