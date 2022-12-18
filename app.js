// // Requiring module
// const express = require('express');
// const mysql = require('mysql2'); 
// const connect = require('./conexao.js');

// // Creating express object 
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.delete('/clientes/:id', (req, res) =>{ 
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     return connect.execSQLQuery("delete from cliente where id="+ req.params.id, res);
// })

// app.post('/clientes/', (req, res) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     return connect.execSQLQuery("insert into cliente (nome) value('"+req.body.nome+"')", res);
// })

// app.put('/clientes/:id', (req, res) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     return connect.execSQLQuery("update cliente set nome='"+req.body.nome+"' where id="+req.params.id, res);
// })





// // Handling GET request 
// app.get('/', (req, res) => {
//     res.send('A api está rodando ' + 'neste servidor')
// res.end() })

// app.get('/clientes', (req, res) =>{ 
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
//     return connect.execSQLQuery('select * from cliente', res);
// })

// // Handling GET request 
// app.get('/retorno', (req, res) => {
//     res.send('Nodejs é muito fácil')
// res.end() })

// app.get('/clientes/:id', (req, res) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     return connect.execSQLQuery('select * from cliente where id='+ req.params.id, res);
// })

// // Port Number
// const PORT = process.env.PORT || 5000;

// // Server Setup 
// app.listen(PORT,console.log(`Server started on port ${PORT}`))


const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// OK
app.get('/clientes',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');    
    return connect.execSQLQuery('select * from cliente', Response);
});

// OK
app.get('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*"); // Qualquer host que acessar minha API vai ser permitido
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');// Vou permitir o método GET, PUT, POST DELETE
    return connect.execSQLQuery('select * from cliente where id='+ Request.params.id, Response);
});



app.put('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update cliente set nome='"+Request.body.nome+"' where id="+Request.params.id, Response);
}); 

app.post('/clientes/',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*"); 
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome) value('"+Request.body.nome+"')", Response);
});

// OK
app.delete('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id="+ Request.params.id, Response);
});

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {console.log('App Rodando!')});