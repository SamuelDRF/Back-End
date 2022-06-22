//definioção do modelo
module.exports = (sequelize,type)=> {
    return sequelize.define('user',{
        password: type.STRING,
        email: type.STRING,
    });
};