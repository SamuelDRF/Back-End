//definioção do modelo
module.exports = (sequelize,type)=> {
    return sequelize.define('persons',{
        firstName: type.TEXT,
        lastName: type.TEXT,
        profession: type.TEXT,
        age: type.INTEGER
    });
};
    
