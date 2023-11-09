const knex = require("../database/conexao")

const consultarValores = async (req, res) => {
    
    /*knex permite passar query bruta utilizado o .raw()*/ 
    //const agenda = await knex.raw('select * from agenda') 

    /*Abaixo exemplos de Queries utilizando o knex*/

     const agenda = await knex('agenda').debug()
    // const agenda = await knex('agenda').where('id', 5).debug()
    // const agenda = await knex('agenda').where('id', '!=', 5).debug()
    // const agenda = await knex('agenda').select('id', 'nome').debug()
    // const agenda = await knex('agenda').where({id: 5}).first().debug()
    // const agenda = await knex('agenda').where({id: 5}).select('id', 'nome').first().debug()
    // const agenda = await knex('agenda').whereNull('email').debug()
    // const agenda = await knex('agenda').whereNotNull('email').debug()
    // const agenda = await knex('agenda').whereBetween('id', [5,10]).debug()
    // const agenda = await knex('agenda').whereBetween('id', [5,10]).orderBy('id', 'desc').debug()
    // const agenda = await knex('agenda').distinct('email').debug()
    // const agenda = await knex('agenda').select('email').groupBy('email').count().debug()
    // const agenda = await knex('agenda').limit(5).offset(2).debug()
    // const agenda = await knex('agenda').whereNull('email').count().debug()
    // const agenda = await knex('agenda').whereNull('email').sum('id').debug()
    // const agenda = await knex('agenda').whereNull('email').avg('id').debug()
    // const agenda = await knex('agenda').whereNull('email').min('id').debug()
    //const agenda = await knex('agenda').whereNull('email').max('id').debug()

    return res.json(agenda)
}

const inserirValores = async (req, res) => {
    
    const agenda = await knex("agenda")
      .returning("*")
      .insert({
        nome: "Maria",
        email: "maria@email.com",
        telefone: "(27)99999-9999",
      });
      
    return res.json(agenda);
  };

  const atualizarValores = async (req, res) => {

    const { nome, email, telefone } = req.body
    const { id } = req.params

    const atualizarAgenda = await knex('agenda').where({id}).update({ nome, email, telefone }).returning("*")
    return res.json(atualizarAgenda)
} 

const excluirValores = async (req, res) => {

  const { id } = req.params

  const excluirContato = await knex('agenda').where({id}).del().returning("id")
  return res.json(excluirContato)

} 

const cadastraranotacao = async (req, res) => {
  const { id } = req.params
  const {nota} = req.body

  const anotacoes = await knex('anotacoes')
  .insert({agenda_id: id, nota})
  .returning("*")

  return res.json(anotacoes)
}

const listarAnotacoes = async (req, res) => {
  const anotacoes = await knex('anotacoes').join('agenda', 'anotacoes.agenda_id', '=', 'agenda.id')
  .select('anotacoes.*', 'agenda.nome')
  return res.json(anotacoes)
}

module.exports = {
    consultarValores,
    inserirValores,
    atualizarValores,
    excluirValores,
    cadastraranotacao,
    listarAnotacoes

}