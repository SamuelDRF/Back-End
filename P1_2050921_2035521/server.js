const express = require ('express');
const mysql = require ('mysql');

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
    database:'projetobackend'
});


//Aa
app.get('/product',function(request,response){
    conection.query("SELECT * FROM projetobackend.product", function(err,rows,fields){
        response.send(rows);
    })
});

//Ab
app.post('/product', (request, response) => {
    var product = request.body;
    conection.query("INSERT product SET ?", [product], function(err,rows,fields){
        response.send("product inserted with id: "+ rows.insertId);
    });
});

//Ac
app.get('/product/:id',function(request,response){
    var id = request.params.id;
    conection.query("SELECT * FROM projetobackend.product where seller_id = ?",[id], function(err,rows,fields){
        response.send(rows);
    })
});


app.put('/product/:id' ,function(req, res){
    var pro_Id = req.params.id;
    conection.query("UPDATE product SET views = views + 1 WHERE product.id = ?", [pro_Id], function(err,rows,fields){
        res.send(rows);
    })
})

//Ae
app.get('/product/tags',function(request,response){
    var id = request.params.id;
    conection.query("SELECT * FROM projetobackend.product where tags = ?",[id], function(err,rows,fields){
        response.send(rows);
    })
});