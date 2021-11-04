// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicaçao
    .get('/', pages.index)
    .get('/community', pages.community)
    .get('/communitys', pages.communitys)
    .get('/create-community', pages.createCommunity)
    .post('/save-community', pages.saveCommunity)

//ligar o servidor
server.listen(5500)