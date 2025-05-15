const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(nome){
    const query = "INSERT INTO AUTOR(nome) VALUES($1)";
    let values = [nome];
    try {
        await pgPool.query(query, values);
        return;
    } catch (error) {
        console.error('Erro ao criar o autor, função create(nome):', error);
	throw error;
    }
}

async function list(){
    const query = "SELECT * FROM AUTOR";
    try{
        let result = await pgPool.query(query);
	return result.rows;
    }catch (error) {
        console.error('Erro ao listar autores, função list()', error);
	throw error;
    }
}

module.exports = {create:create, list:list};
