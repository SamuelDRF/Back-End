
const Person = require("../sequelize").Person;

exports.getallperson = function(req, res, next) {
    Person.findAll()
    .then(results => {
        res.send(results)
    });
}

exports.create = function(req, res, next) {
    var person = request.body;
    Person.create(person).then(person => {
        response.send(person);
    })
}