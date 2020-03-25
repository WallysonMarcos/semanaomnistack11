/**
 * Rota : Recurso
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 * Route params: Parâmetro utilizado para identificar recurso
 * Resquest body: Corpo da reuisição, utilizado para criar ou alterar dados
 */

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
