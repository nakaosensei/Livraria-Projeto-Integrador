DROP SCHEMA livraria CASCADE;
CREATE SCHEMA livraria;

CREATE TABLE livro(
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    isbn VARCHAR(100) UNIQUE,
    edicao VARCHAR(40),
    caminho_imagens VARCHAR(200),
    qtde_disponivel INT DEFAULT 0
);

CREATE TABLE categoria(
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE arvore_categorias(
    id_categoria INT REFERENCES categoria(id_categoria) ON DELETE CASCADE,
    id_subcategoria INT REFERENCES categoria(id_categoria) ON DELETE CASCADE,
    PRIMARY KEY(id_categoria, id_subcategoria)
);

CREATE TABLE categorias_dos_livros(
    id_livro INT REFERENCES livro(id_livro) ON DELETE CASCADE,
    id_categoria INT REFERENCES categoria(id_categoria) ON DELETE CASCADE,
    PRIMARY KEY(id_livro, id_categoria)
);

CREATE TABLE autor(
    id_autor SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL
);

CREATE TABLE autores_dos_livros(
    id_livro INT REFERENCES livro(id_livro) ON DELETE CASCADE,
    id_autor INT REFERENCES autor(id_autor) ON DELETE CASCADE,
    PRIMARY KEY(id_livro, id_autor)
);

CREATE TABLE locatario (
    id_locatario SERIAL PRIMARY KEY,
    registro_academico VARCHAR(30) UNIQUE,
    tipo INT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,      
    email VARCHAR(255),  
    telefone VARCHAR(15)
);

CREATE TABLE curso (
    id_curso SERIAL PRIMARY KEY,
    codigo VARCHAR(30) UNIQUE,         
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE cursos_dos_usuarios (
    id_locatario INT REFERENCES locatario(id_locatario) ON DELETE CASCADE,
    id_curso INT REFERENCES curso(id_curso) ON DELETE CASCADE,  
    PRIMARY KEY (id_locatario, id_curso)
);

CREATE TABLE registro_reserva(
    id_reserva SERIAL PRIMARY KEY,
    data_hora_divida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_hora_retorno TIMESTAMP,
    id_locatario INT REFERENCES locatario(id_locatario) ON DELETE CASCADE
);

CREATE TABLE reserva(
    id_reserva INT REFERENCES registro_reserva(id_reserva) ON DELETE CASCADE,
    id_livro INT REFERENCES livro(id_livro) ON DELETE CASCADE,
    PRIMARY KEY(id_reserva, id_livro)
);

CREATE TABLE divida(
    id_divida SERIAL PRIMARY KEY,
    id_reserva INT,
    id_livro INT,
    valor NUMERIC(15,2) NOT NULL,
    data_hora_divida TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    estado INT CHECK (estado IN (0,1)) NOT NULL,
    FOREIGN KEY (id_reserva, id_livro) REFERENCES reserva(id_reserva, id_livro) ON DELETE CASCADE
);

