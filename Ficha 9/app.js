const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

//ligação a base de dados
const sequelize = new Sequelize('ficha9', "root", "", {
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("unable to connect", err);
    });

//definioção do modelo
const Person = sequelize.define('persons', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    age: DataTypes.INTEGER
});

//adicionar modelo a BD
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables Created");

    })
/*
Person.bulkCreate([
    { firstName: "Juan", lastName: "Montoya", profession: "Driver", age: 39 },
    { firstName: "Pedro", lastName: "Perez", profession: "Chef", age: 26 },
    { firstName: "Juan", lastName: "Aveiro", profession: "Teacher", age: 26 },
    { firstName: "Alejandra", lastName: "Perez", profession: "Singer", age: 51 }
]).then(function () {
    return Person.findAll();
}).then(function (persons) {
    console.log(persons)
})
*/

app.get('/persons', (request, response) => {
    var id=request.query.id
    if (id===undefined) {
        Person.findAll().then(persons =>{
        response.send(persons);
        })
    }
    else{
        Person.findByPk(id).then(persons =>{
            if (persons==undefined){
                response.send("Id: " + id+" not found");
            }
            else{
                response.send(persons);
            }
        })
    }

});

app.get('/persons/:age/:profession', (request, response) => {
    var age = request.params.age;
    var profession = request.params.profession;
    Person.findOne({where: {profession:profession}&&{age:age}}).then(persons =>{
        response.send(persons);
        })
});
  

app.post('/persons', (request, response) => {
    var person = request.body;
    Person.create(person).then(person => {
        response.send(person);
    })
});

app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;
    if (isNaN(id)){
        response.status(400).send('Invalid id')
    }
    else{
        Person.destroy({
            where:{
                id:id
            }
        }).then(result =>{
            if (result==0){
                response.status(400).send("Cannot find it");
            }
            else {
                response.send("Number of deleted instance: "+result)
            }
        })
    }
});

app.delete('/persons', (request, response) => {
    var id = request.body.id;
        Person.destroy({
            where:{
                id:id
            }
        }).then(result =>{
            if (result==0){
                response.status(400).send("Cannot find it");
            }
            else {
                response.send("Number of deleted instance: "+result)
            }
        })
});

app.put('/persons/:id', (request, response) => {
    var id = request.params.id;
    var person = request.body;
    
});