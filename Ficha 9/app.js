const express = require('express');
const {Sequelize,Model,DataTypes} = require('sequelize');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//server
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s",host,port);
});

//ligação a base de dados
const sequelize = new Sequelize('ficha9',"root","",{
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(()=>{
        console.log("Connection has been established");
    })
    .catch(err=>{
        console.error("unable to connect",err);
    });

//definioção do modelo
const Person = sequelize.define('persons', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    age: DataTypes.INTEGER
});

//adicionar modelo a BD
sequelize.sync({force:false})
    .then(()=>{
        console.log("Tables Created");
        
    })
    Person.bulkCreate([
        {firstName: "Juan", lastName: "Montoya",profession: "Driver",age:39},
        {firstName: "Pedro", lastName: "Perez",profession: "Chef",age:26},
        {firstName: "Juan", lastName: "Aveiro",profession: "Teacher",age:26},
        {firstName: "Alejandra", lastName: "Perez",profession: "Singer",age:51}
    ])