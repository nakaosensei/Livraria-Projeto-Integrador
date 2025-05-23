const modelAutor = require('../models/Autor');

async function create(req, res){
    if (!req.body.nome || req.body.nome.trim() === ''){
        res.status(400).json({error: 'Obrigatorio: Nome do autor'});
	return;
    }
    try {
        await modelAutor.create(req.body.nome);
        res.status(201).json({message:'ok'});
	return;
    } catch( error ){
        res.status(500).json({error: 'Erro ao criar autor'});
	return;
    }
};

async function list(req, res){
    try{
        let autores = await modelAutor.list();
	res.status(200).json({autores:autores});
	return;
    } catch( error ){
        res.status(500).json({error: 'Erro no list do autor'});
	return;
    }
};

module.exports =  { create, list };
