//definioção do modelo
module.exports = (sequelize,type)=> {
    return sequelize.sequelize('persons',{
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    age: DataTypes.INTEGER
    });
}
    
