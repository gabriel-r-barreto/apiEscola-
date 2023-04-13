const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000; // Porta do servidor, você pode alterar para qualquer valor 
let name;
let school;
let adress;
app.post('/api/boolean', (req, res) => {
// Obtém o valor booleano do corpo da requisição
  const {valor, nomeEscola, endereco} = req.body;

 name = valor;
 school = nomeEscola
 adress = endereco

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

app.get('/api/boolean', (req, res) => {
  res.json({ valor: name || "", escolar: school || "", endereco: adress || ""});
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});