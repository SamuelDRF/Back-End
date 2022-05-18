const fs = require('fs');
const express = require ('express');
const app = express();

var server = app.listen(8081, function(){
});


//4------------------------------------------------
    //a

app.get('/', (req, res)=>{
    var body = "Hello World";
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(body),
        "Content-Type": "text/plain"
    });
    res.end(body);
});

    //b

app.get('/html', (req, res)=>{
    var body = "<h1 style='color:blue'>Hello</h1>";
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
});

    //c

app.get('/htmla', (req, res)=>{
    var body = fs.readFileSync('./test.html',"utf-8");
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
});

    //e

app.get('/htmlb', (req, res)=>{
    var body = fs.readFileSync('./test.html',"utf-8");
    body = body.replace('World','People')
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
});

//5------------------------------------------------

app.get('/user/:name', (req, res)=>{
    var name = req.params.name
    var body = fs.readFileSync('./test.html',"utf-8");
    body = body.replace('World',name)
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})