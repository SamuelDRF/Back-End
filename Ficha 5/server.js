const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


function readFile(path) {
    var filecontent = fs.readFileSync(path, 'utf-8');
    return filecontent;
}

function WriteFile(path,data) {
  fs.writeFileSync(path, data);
}

console.log(readFile('./person.json'));


//end point
// 1º é a rota /path do endpoint
//2º o codigo que vai ser executado quando este endpoint for invocado
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personobject["person"+id];
  if (person===undefined){
    res.send("this Id does not exist");
  }
  else{
    res.send(person);
  }
})

app.post('/users', (req, res) => {
    // person que vem do body do pedido
  var person = req.body;
    // selecionar as chaves no array e pbter o seu tamanho
  var size=Object.keys(personobject).length;
    // incrementar 1 valor
  size++;
    //atribuir o id id igual ao tamanho +1
  person.id = size;
    //contruir uma string para ser a chave
  personobject['person'+ person.id]=person;

  WriteFile("./person.json",JSON.stringify(personobject));//<------------------------------

    //enviar o id da pessoa que foi incerida
  res.send(personobject);
})  

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personfrombody = req.body;
  var person = personobject["person"+id];

  if (person===undefined){
    res.send("this Id does not exist");
  }
  else{
    personfrombody.id = parseInt(id);
    personobject["person"+id] = personfrombody;

    WriteFile("./person.json",JSON.stringify(personobject));//<------------------------------

    res.send(personfrombody);
  }
})  

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = personobject["person"+id];
  if (person===undefined){
    res.send("this Id does not exist");
  }
  else{
    delete personobject["person"+id];

    WriteFile("./person.json",JSON.stringify(personobject));//<------------------------------

    res.send("Id: "+id+ " was deleted");
  }
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var personstring = readFile('./person.json');
var personobject = JSON.parse(personstring);