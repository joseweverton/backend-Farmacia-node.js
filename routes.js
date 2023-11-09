const express = require("express")
const { atualizarValores, inserirValores, consultarValores, excluirValores, cadastraranotacao, listarAnotacoes } = require("./src/controllers/queries")
const { consultas } = require("./src/controllers/exemplosConsultas")
const { consultarUsuario, cadastrarUsuario, atualizarUsuario, excluirUsuario, consultarUsuarioId } = require("./src/controllers/crud")
const { verificarId, verificarCampos } = require("./src/middleware/verificacao")


const rotas = express()

//consultas com knex
rotas.get('/exercicio', consultas)

rotas.post('/create', verificarCampos,cadastrarUsuario)
rotas.get('/read', consultarUsuario)
rotas.get('/read/:id', verificarId, consultarUsuarioId)
rotas.put('/update/:id', verificarId, atualizarUsuario)
rotas.delete('/delete/:id', verificarId, excluirUsuario)

rotas.get('/select', consultarValores)
rotas.post('/insert', inserirValores)
rotas.put('/update/:id', atualizarValores)
rotas.delete('/delete/:id', excluirValores)

//join
rotas.post('/:id/anotacoes', cadastraranotacao)
rotas.get('/anotacoes', listarAnotacoes)



module.exports = rotas