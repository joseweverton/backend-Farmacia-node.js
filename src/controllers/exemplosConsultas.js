/*1 - Faça uma query que retorna a quantidade de medicamentos da tabela farmacia.

2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela usuarios.

3 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos 
de cada categoria na tabela farmacia.

4 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela farmacia.

5 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da 
tabela farmacia.

6 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou 
igual a 18 anos, na tabela usuarios.
*/

const knex = require("../database/conexao")

const consultas = async (req, res) => {

//1
//const resolucao = await knex('farmacia').count().debug()

//2
//const resolucao = await knex('usuarios').min('idade').debug()

//3
//const resolucao = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria').debug()

//4
//const resolucao = await knex('farmacia').whereNull('categoria').count().debug()

//5
//const resolucao = await knex('farmacia').select('categoria').whereNotNull('categoria').count('medicamento').groupBy('categoria').debug()

//6
const resolucao = await knex('usuarios').select('idade').where('idade', '>=', 18 ).count().groupBy('idade').debug()

return res.json(resolucao)
}

module.exports = {
    consultas
}