import {db} from '../db.js';

//TRAZ TODOS OS USUÁRIOS DO BANCO DE DADOS COM O MÉTODO GET, E RETORNA UM JSON COM OS DADOS
//E FAZ UMA SELEÇÃO COM O COMANDO SQL, RETORNANDO UM JSON COM OS DADOS
export const getUsers = (_,res) => {
    const q = "SELECT * FROM usuarios";
    db.query(q,(err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

//CRIA UM NOVO USUÁRIO NO BANCO DE DADOS COM O MÉTODO POST
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`,`email`,`fone`,`data_nascimento`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento
    ];

    db.query(q, [values] , (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário criado com sucesso!");
    });
};

//ATUALIZA UM USUÁRIO NO BANCO DE DADOS COM O MÉTODO UPDATE
export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE id = ?";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

//DELETA UM USUÁRIO NO BANCO DE DADOS COM O MÉTODO DELETE
export const deleUser = (req, res) => {
    const q = 'DELETE FROM usuarios WHERE `id` = ?';
    db.query(q, [req.params.id],(err) =>{
        if (err) return res.json(err);
        return res.status(200).json("Usuário deletado com sucesso!");
    })
}
