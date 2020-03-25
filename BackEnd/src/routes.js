const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/profiles', profileController.list);

routes.get('/incidents', incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents', incidentController.delete);

module.exports = routes;