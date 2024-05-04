const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFiles = express.static(path.join(__dirname, 'build'));

app.use(staticFiles);
app.use(history());
app.use(staticFiles);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
