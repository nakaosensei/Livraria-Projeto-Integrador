import React, { useEffect, useState } from 'react';

const PaginaAutor = () => {
        const [autores, setAutores] = useState([]);
	const [nomeAutor, setNomeAutor] = useState('');
	const carregarVetorDeAutores = async() => {
	    try{
		//Por padrao, a funcao fetch faz uma requisição http usando o metodo GET
		const response = await fetch('http://localhost:3000/api/autor');
		const jsonData = await response.json();
		console.log(jsonData.autores)
		setAutores(jsonData.autores);
            } catch(erro){
                console.error('Erro ao buscar autores', erro);
            }
	};

        const inserirAutor = async() => {
	    let requestParams = {
	        method:'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({nome:nomeAutor})
	    };
            try{
	        const response = await fetch('http://localhost:3000/api/autor', requestParams);
	        await carregarVetorDeAutores();
            }catch(error){
                console.error('Erro ao inserir autor', erro);
            }
	}

	useEffect( () => {
	    carregarVetorDeAutores();
	}, []);

	return (
		<div>
			<div>Autores cadastrados:</div>
		
		        {autores.map((autorObj, indice) => (<div key={indice}> {autorObj.nome} </div>))}
			<hr/>
		        <div>Nome do autor</div>
		        
		        <input type="text" value={nomeAutor} onChange={(e) => setNomeAutor(e.target.value) }/>
		        <button onClick={inserirAutor}> Cadastrar autor </button>
		</div>
	);
};

export default PaginaAutor;
