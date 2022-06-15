//importar sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');

const PersonModel= require('./models/person');

//ligação a base de dados
const sequelize = new Sequelize('ficha9', "root", "", {
    dialect: 'mysql',
});

const Person=PersonModel(sequelize,Sequelize);

module.exports ={
    Person
}


sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("unable to connect", err);
    });
