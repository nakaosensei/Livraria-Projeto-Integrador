# 📚 Projeto Base — Sistema de Livraria

Este repositório contém um **projeto base** desenvolvido para os alunos do **Curso Técnico Integrado em Informática da UTFPR – Câmpus Campo Mourão**.  
O projeto serve como **referência e ponto de partida** para o desenvolvimento das atividades práticas da disciplina **Projeto Integrador**, envolvendo a criação de um sistema completo de **gestão de biblioteca**.

---

## 🧩 Estrutura do Projeto

O sistema é composto por **duas partes principais**:

### 🖥️ Frontend
- Desenvolvido em **React JS**, utilizando o **Vite** como ferramenta de build e o **Tailwind CSS** para estilização.
- Responsável pela **interface visual** e **interação do usuário** com o sistema.
- Permite ao usuário navegar entre páginas, visualizar e manipular informações sobre livros, alunos, professores e empréstimos.

> 📄 Documentação completa sobre o frontend encontra-se em [`frontend/README.md`](./frontend/README.md).

### ⚙️ Backend
- Desenvolvido em **Node.js**, utilizando **Express** para criação das rotas e **SQLite/MySQL** (dependendo da configuração do aluno) para armazenamento dos dados.
- Responsável por **gerenciar as regras de negócio**, **persistir informações** e **expor uma API RESTful** que será consumida pelo frontend.

> 📄 Instruções detalhadas para configuração do backend estão disponíveis em [`backend/README.md`](./backend/README.md).

---

## 🧰 Requisitos do Sistema

- **Node.js** (versão 18 ou superior)
- **NPM** (ou Yarn)
- **Banco de dados MySQL ou PostgreSQL**
- Navegador web atualizado (para execução do frontend)

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/livraria-base.git
   cd livraria-base
