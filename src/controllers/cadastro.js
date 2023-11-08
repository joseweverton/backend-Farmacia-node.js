const knex = require("../database/conexao")

const listarContatos = async (req, res) => {
    
    const agenda = await knex('agenda')
    return res.json(agenda)
}

module.exports = {
    listarContatos
}