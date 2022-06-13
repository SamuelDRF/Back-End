const Person = sequelize.define('persons', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    age: DataTypes.INTEGER
});
