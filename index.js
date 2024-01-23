const express = require("express");
const routes = require("./config/routes");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configura a porta para usar a variável de ambiente PORT ou 3000 localmente
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Aplicativo está online na porta " + port);
});

app.use('/', routes);
