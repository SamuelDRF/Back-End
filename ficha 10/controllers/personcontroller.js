
const person = require("../sequelize").person;

exports.getallperson = function(req, res, next) {
    person.findall()
    .then(results => {
        res.send(results)
    });
}