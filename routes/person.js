/*
 * GET users listing.
 */

var Person = require('../models/Person');

exports.list = function (req, res) {
    Person.find({}, function(err, persons) {
        if (err) return next(err);

        //res.send(persons);

        res.jsonp(200, persons);

    });
};

exports.get = function (req, res) {
    var personId = req.params.personId;

    Person.findOne({"id":personId}, function(err, person) {
        if (err) return next(err);

        //res.send(persons);

        res.jsonp(200, person);

    });
}