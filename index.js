/*
* Arquivo raiz da API.
*
*/

// dependencias
const http = require('http');
const url = require('url');

// o servidor deve responder com uma String
const server = http.createServer( function(req, res){

    // parse na url
    let parseUrl = url.parse(req.url,true);

    // pega o caminho/path da requisição
    let path = parseUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // apresenta o método http
    let method = req.method.toLocaleLowerCase();

    res.end("Hello world\n");

    //log to do caminho solicitado na requisição
    console.log("Requisição recebida no caminho: "+trimmedPath+ " e método: "+method);

});

// inicia o servidor que escuta na porta 3000
server.listen(3000, function(req, res){

    console.log("servidor rodando na porta 3000");

});