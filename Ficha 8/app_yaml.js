// importar o express
//const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ficha7'
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});