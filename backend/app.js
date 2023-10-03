const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: 'mysql', // Nome do host do contêiner MySQL (usaremos isso no Docker)
  user: 'root',
  password: 'password', // Altere para sua senha do MySQL
  database: 'mydb', // Altere para o nome do banco de dados desejado
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao MySQL');
  }
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      res.send('Erro ao buscar dados do MySQL: ' + err.message);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
