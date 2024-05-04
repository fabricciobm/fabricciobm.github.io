const express = require('express');
const path = require('path');
const app = express();

// Serve os arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Define uma rota para servir o arquivo HTML para qualquer rota
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia o servidor na porta 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
