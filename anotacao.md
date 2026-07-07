# CRIANDO UM PROJETO CRUD COMPLETO

# BACKEND:

## CRIE O BANCO DE DADOS NO WORKBECNH DO MYSQL

``Após criar o banco de dados, crie a table a as colunas:``
- code: 
CREATE TABLE `crud`.`usuarios`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `fone` VARCHAR(45) NOT NULL,
    `data_nascimento` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

``Depois, ultilize o codigo abaixo para rodar localmente:``
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';

## PASTAS DENTRO DO VS CODE E SEUS NPM'S
- api: beckend
- frontend: visual

# API
``No terminal, entro dento da pasta e executo os seguintes códigos:``
## CRIAR O PACKAGE.JSON
- npm init -y

## BIBLIOTECAS PARA USAR A API
-npm add express nodemon mysql cors

## DENTRO DO PACKAGE.JOSN:
  "scripts": {
    "start": "node index.js"
  },

"type": "module",

## CRIO O ARQUIVO DE INDEX
``Analise o arquvio para verificar como exatamente ele deve ser``

## INICIALIZAÇÃO DO PROJETO:
Front-End
``npm start``

Beck-End
``npm start``

## PARA VERIFICAR OS DADOS:
``http://localhost:8800/``


# FRONTEND:

## PARA CRIAR UM PROJETO, USE:
``npx create-react-app ./``
``npm add styled-components axios react-icons react-toastify``
