# Livraria - Frontend
Esse é um projeto desenvolvido com o objetivo de auxiliar alunos do curso técnico integrado em informática da UTFPR, servindo como base de referência durante a disciplina de projeto integrador.

O frontend foi desenvolvido em React JS, usando o framework Tailwind. Se trata de um sistema para gestão dos livros da biblioteca universitária.

# Preparação do ambiente

Crie o projeto React utilizando o Vite (ferramenta para criar e executar projetos web)
```bash
npm create vite@latest src --template react 
```
Vamos acessar o diretorio do projeto criado
```bash
cd src
```
# Instalando o Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

# Configurano o tailwind
Abra o arquivo vite.config.ts ou vite.config.js (fica dentro da pasta do projeto)
Adicione o seguinte import: 
```javascript
import tailwindcss from '@tailwind/vite'
```

Depois, adicione o tailwind aos plugins, exemplo:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
})
```
# Importando o Tailwind
Acesse o diretorio do seu projeto, entre na pasta src, observe que temos alguns arquivos distintos.
📄 main.jsx : É a raiz do projeto, o primeiro código a ser invocado.
📄 App.jsx  : Observe que dentro do main.jsx, ele importa o conteúdo do App.jsx, que contém uma página padrão gerada pelo comando que criou o projeto.
📄 index.css: É o arquivo de estilos global do projeto, observe que ele é importado no main.jsx
📄 App.css  : Arquivo de estilos do App.css.
📁 assets: Diretório com icones pré-criado.

Para importar o Tailwind, basta o importar no arquivo index.css, que é a folha de estilo importada pelo main.jsx.
```bash
@import "@tailwindcss";
```
# Executando o projeto pela primeira vez
```bash
npm run dev
```
# Requisitos do projeto
Conforme a especificação do projeto, o bibliotecário deve ser capaz de gerenciar livros, empréstimos, alunos e professores. Ou seja, apenas uma página não será suficiente para este projeto, por isso, iremos precisar permitir que a aplicação oferece páginas específicas em rotas diferentes (urls a partir do endereço do seu aplicativo).

# Organização das páginas
Em projetos React, é comum criar um diretório que contém as páginas da aplicação, esse diretório geralmente fica dentro da pasta src. Então, vamos criar um diretório chamado pages com o comando:
```bash
mkdir pages
```
Segue a nova estrutura do src do projeto:
📄 main.jsx : É a raiz do projeto, o primeiro código a ser invocado.
📄 App.jsx  : Observe que dentro do main.jsx, ele importa o conteúdo do App.jsx, que contém uma página padrão gerada pelo comando que criou o projeto.
📄 index.css: É o arquivo de estilos global do projeto, observe que ele é importado no main.jsx
📄 App.css  : Arquivo de estilos do App.css.
📁 assets   : Diretório com icones pré-criado.
📁 pages    : Armazena as páginas do projeto.

Crie dois diretórios dentro da pasta pages, Home e About
```bash
mkdir ./pages/Home
mkdir ./pages/About
```
Agora vamos criar os arquivos javascript que conterão as páginas e suas folhas de estilo individuais:
```bash
touch ./pages/Home/Home.jsx
touch ./pages/Home/Home.css
touch ./pages/About/About.jsx
touch ./pages/About/About.css
```
Agora, vamos criar páginas simples para o Home.jsx e para o About.jsx. Abra-os com seu editor de texto favorito. Para quem gosta de usar a linha de comando, o vim é uma opção interessante de editor por linha de comando.
```bash
vim ./pages/Home/Home.jsx
```
Agora vamos criar uma página simples e estática utilizando um componente funcional em React. Um componente funcional é basicamente uma função que retorna JSX (o que, na prática, é HTML misturado com JavaScript) e é responsável por renderizar a interface da aplicação. 

```javascript
import React from 'react';//Importando o React

const Home = () => {
	return(
		<div>
			<h1>Home page</h1>
		</div>
	);
};
/*
const Home = () => {}: Estamos definindo um componente funcional chamado Home usando uma função de seta (arrow function). Ele poderia receber parâmetros, de modo muito similar a funções convencionais, mas nesse caso ele apenas retorna uma div simples. 

Dentro do corpo do componente, temos o código JSX: return (<div><h1>Home page</h1></div>). O JSX é muito parecido com HTML, mas com a diferença de ser dentro de JavaScript. Esse código indica que o componente Home renderiza uma div com um h1 contendo o texto "Home page".

O JSX é convertido pelo React em código que o navegador entende e renderiza na tela.
*/


export default Home;
*/
O export default permite que o componente Home seja exportado para que possa ser usado em outros arquivos. Isso é fundamental em projetos React, pois você organiza a aplicação em vários componentes que podem ser importados onde necessário.
*/
```

Crie também um arquivo estático para o About.jsx, use seu editor favorito, se optar pelo vim: vim ./pages/About/About.jsx
```javascript
import React from 'react';

const About = () => {
        return(
                <div>
                        <h1>About page</h1>
                </div>
        );
};

export default About;
```
Finalmente criamos os arquivos de ambas as páginas, mas eles ainda não foram vinculados ao main.jsx, nem ao App.jsx (importado no main.jsx). Ou seja, eles ainda não participam ativamente do fluxo de execução da aplicação.

O próximo passo é possibilitar que o site disponibilize páginas diferentes em url's específicas, para esse fim, podemos usar o BrowserRouter do React.

# Configurando as rotas
Abra o arquivo App.jsx, e digite o seguinte:
```javascript
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
```

# Executando novamente o projeto
Finalmente, vamos usar npm run dev, para executar e ver as nossas duas páginas estáticas iniciais.






