const express = require ("express")
const routes = require("./config/routes")
const app = express ()


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', routes)

app.listen(3000, ()=>{
    console.log("Sucesso") // funciona para printar e mostrar o que esta acontecendo com determinada funçao
})