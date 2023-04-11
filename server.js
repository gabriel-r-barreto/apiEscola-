const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000; // Porta do servidor, você pode alterar para qualquer valor 
const valorBoll = false
app.post('/api/boolean', (req, res) => {
// Obtém o valor booleano do corpo da requisição
  const {valor, nomeEscola} = req.body;

  if (typeof valor === 'boolean') {
    if (valor) {
      res.json({ mensagem: 'está tendo um ataque',
      escola: nomeEscola });
    } else {
      res.json({ mensagem: 'sem ataque' });
    }
  } else {
    res.status(400).json({ mensagem: 'O valor não é um booleano válido' });
  }
});


valorBoll; // Variável para armazenar o valor booleano

app.get('/api/boolean', (req, res) => {
  res.json({ valor: valorBoll });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});