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

// app.put('/alunos/:id', (req, res) => {

// });

// app.delete('/alunos/:id', (req, res) => {

// });


// app.get('/livros', (req, res) => {

// });

// app.post('/livros', (req, res) => {

// });

// app.put('/livros/:id', (req, res) => {

// });

// app.delete('/livros/:id', (req, res) => {

// });

app.listen(80, () => {
    console.log('Aberto na Porta 80');
});
