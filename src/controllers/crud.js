const knex = require("../database/conexao")

const consultarUsuario = async (req, res) => {
    try {
        const usuario = await knex("usuarios")
        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
const consultarUsuarioId = async (req, res) => {
    const {id} = req.params
    try {
        const usuarioId = await knex("usuarios").where({id}).first()
        return res.status(200).json(usuarioId)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
const cadastrarUsuario = async (req, res) => {
    const {nome, email, telefone, idade} = req.body
    try {
        const cadastrar = await knex('usuarios').insert({nome, email, telefone, idade}).returning("*")

        if(!cadastrar.length === 0) {
            return res.status(400).json({mensagem: `Não foi possivel cadastrar o usuário`})
        }
        return res.status(200).json(cadastrar[0])
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
const atualizarUsuario = async (req, res) => {
    const {nome, email, telefone, idade} = req.body
    const {id} = req.params

    try {
        const atualizar = await knex('usuarios').update({nome, email, telefone, idade}).where({id})
        
        if(!atualizar) {
            return res.status(400).json({mensagem: `Não foi possivel atualizar o usuário`})
        }
        return res.status(200).json({mensagem: `Usuário atualizado com sucesso`})
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
const excluirUsuario = async (req, res) => {
    const {id} = req.params

    try {
    const excluir = await knex("usuarios").del().where({id})

    if (!excluir) {
        return res.status(400).json({mensagem: `Não foi possivel excluir o usuário`})
    }
    return res.status(200).json({mensagem: `Usuário excluido com sucesso`})
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
module.exports = {
    consultarUsuario,
    consultarUsuarioId,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}