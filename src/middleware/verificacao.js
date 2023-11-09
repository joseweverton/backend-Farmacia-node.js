const knex = require("../database/conexao")

const verificarId = async (req, res, next) => {
    const {id} = req.params

    const usuarioId = await knex("usuarios").where({id}).first() //se não existir vai retornar undefined

    if(!usuarioId) {
        return res.status(404).json({mensagem: `Usuário não encontrado`})
    }
    next()
}

const verificarCampos = async (req, res, next) => {
    const {nome, email, telefone, idade} = req.body

    if(!nome || !email || !telefone || !idade) {
        return res.status(404).json({mensagem: `Campos Nome, Email, Telefone e Idade obrigatório`})
    }
    next()
}

module.exports = {
    verificarId,
    verificarCampos
}