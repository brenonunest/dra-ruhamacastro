
// Importa o módulo Express
const express = require('express');

// Cria um objeto de roteador do Express
const routes = express.Router();



// ========================
// ROTA PRINCIPAL
// ========================

// Rota da página inicial (Home)
routes.get('/', (req, res) => {
  res.render('index', { page: 'home' });
});



// ========================
// ROTAS DE TRATAMENTOS / SERVIÇOS
// ========================

// Ultraformer (dentro de uma subpasta sobre sessões)
routes.get('/ultraformer', (req, res) => {
  res.render('pages/aboutSections/index', { page: 'ultraformer' });
});

// GlowUp
routes.get('/glowup', (req, res) => {
  res.render('pages/glowup', { page: 'glowup' });
});

// Botox
routes.get('/botox', (req, res) => {
  res.render('pages/botox', { page: 'botox' });
});

// Sculptra
routes.get('/sculptra', (req, res) => {
  res.render('pages/sculptra', { page: 'sculptra' });
});



// ========================
// ROTA DE CONTATO
// ========================

// Página de contato
routes.get('/contato', (req, res) => {
  res.render('pages/contato', { page: 'contato' });
});



// Exporta as rotas para serem usadas no server.js
module.exports = routes;
