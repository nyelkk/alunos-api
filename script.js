const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

const mysql = require('mysql2')

const conection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblioteca'
})

app.get('/alunos', (req, res) => {
    conection.execute(
        'SELECT * FROM alunos;',
        (e,r,c) => {
            res.json(r)
        }   
    )
});

app.post('/alunos', (req, res) => {
    conection.execute(
        'UPDATE alunos SET nome = ?, data_nascimento = ? WHERE id = ?',
        [req.body.nome, req.body.data_nascimento, req.body.id],
        (e,r,c) => {
            res.json('informações atualizadas')
        }   
    )
});

app.put('/alunos/:id', (req, res) => {
    const { codAluno, nomAluno } = req.body;
    const id = req.params.id;

    pool.execute(
        'UPDATE tblalunos SET codAluno = ?, nomAluno = ? WHERE codAluno = ?',
        [codAluno, nomAluno, id],
        (err, results, fields) => res.status(201).json({ message: 'Dados atualizados com sucesso!' })
    );
});

app.put('/alunos/:id', (req, res) => {
    const { codAluno, nomAluno } = req.body;
    const id = req.params.id;

    pool.execute(
        'UPDATE tblalunos SET codAluno = ?, nomAluno = ? WHERE codAluno = ?',
        [codAluno, nomAluno, id],
        (err, results, fields) => res.status(201).json({ message: 'Dados atualizados com sucesso!' })
    );
});

app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id;

    pool.execute(
        'DELETE FROM tblalunos WHERE codAluno = ?', [id],
        (err, results, fields) => res.status(201).json({ message: 'Aluno deletado com sucesso!' })
    );
});

app.listen(80, () => {
    console.log('Aberto na Porta 80');
});
