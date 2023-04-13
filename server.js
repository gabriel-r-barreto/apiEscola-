const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());


var mensagens = [];

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



// Rota para obter todas as mensagens
app.get('/api/mensagens', (req, res) => {
  res.json(mensagens);
});


app.get('/api/apagar/mensagens', (req, res) => {
  mensagens = []
  res.json(mensagens);
});

// Rota para obter mensagens de um usuário específico
app.get('/api/mensagens/:usuarioId', (req, res) => {
  const usuarioId = req.params.usuarioId;
  const mensagensDoUsuario = mensagens.filter(mensagem => mensagem.remetente === usuarioId || mensagem.destinatario === usuarioId);
  res.json(mensagensDoUsuario);
});

// Rota para criar uma nova mensagem
app.post('/api/mensagens', (req, res) => {
  const novaMensagem = req.body;
  mensagens.push(novaMensagem);
  res.json(novaMensagem);
});

// Rota para excluir uma mensagem
app.delete('/api/mensagens/:mensagemId', (req, res) => {
  const mensagemId = req.params.mensagemId;
  const mensagemIndex = mensagens.findIndex(mensagem => mensagem.id === mensagemId);
  if (mensagemIndex >= 0) {
    mensagens.splice(mensagemIndex, 1);
  }
  res.json({ message: 'Mensagem excluída com sucesso' });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});