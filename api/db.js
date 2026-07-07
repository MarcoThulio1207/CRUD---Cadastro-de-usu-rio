import mysql from 'mysql';

//CRIANDO A CONEXÃO COM O BANCO DE DADOS
export const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:''
});
