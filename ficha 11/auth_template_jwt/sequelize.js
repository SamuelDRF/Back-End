// TODO Implement all the models and business logic using sequelize
//importar sequelize


const { Sequelize, Model, DataTypes } = require('sequelize');
const PersonModel= require('./models/users');

//ligação a base de dados
const sequelize = new Sequelize('ficha11', "root", "", {
    dialect: 'mysql',
});

//instanciar um modelo User
const User=PersonModel(sequelize,Sequelize);

//autenticação a base de dados
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("unable to connect", err);
    });

//sincronar para criar as tabela
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables Created");

})

//exportar
module.exports ={
    User
}
