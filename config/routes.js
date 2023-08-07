const express = require ('express')
const routes = express.Router() // por padrão pular duas linhas sempre após importar bibliotecas


routes.get('/',(req,res) =>{
    res.render('index')
})
routes.get('/ultraformer',(req,res) =>{
    res.render('pages/aboutSections/index')
})
routes.get('/glowup',(req,res) =>{
    res.render('pages/glowup')
})
routes.get('/botox',(req,res) =>{
    res.render('pages/botox')
})
routes.get('/sculptra',(req,res) =>{
    res.render('pages/sculptra')
})
routes.get('/contato',(req,res) =>{
    res.render('pages/contato')
})

module.exports = routes