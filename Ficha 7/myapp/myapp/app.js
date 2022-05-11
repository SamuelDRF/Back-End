const express = require ('express');
//const mysql = require ('mysql');
const mysql = require('mysql2')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Server
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);

});

var conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'ficha7'
});

//conection.connect();


//listo
app.get('/persons',function(request,response){
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        response.send(rows);
    })
});

//listo
app.get('/persons/:id',function(request,response){
    var id = request.params.id;
    conection.query("SELECT * FROM persons where id = ?",[id], function(err,rows,fields){
        response.send(rows);
    })
});

//listo
app.post('/persons', (request, response) => {
    var person = request.body;
    conection.query("INSERT persons SET ?", [person], function(err,rows,fields){
        response.send("Person inserted with id: "+ rows.insertId);
    });
});  


app.delete('/persons/:id', (request, response) => {
    var sql = "DELETE FROM persons WHERE id = ?";
    var id = request.params.id;
    conection.query(sql, id, function(error,result,fields){
        if (error) throw error;
        response.send("affected Rows:"+result.affectedRows);
    });
});

app.get('/persons/:age/:profession', (request, response) => {
    var age = request.params.age;
    var profession = request.params.profession;
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        response.send(rows);
    })
})  

app.put('/persons/:id', (request, response) => {
    var id = request.params.id;
    var person = request.body;
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        response.send(rows);
    })
})  