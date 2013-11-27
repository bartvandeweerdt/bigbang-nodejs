/*
 * GET users listing.
 */

var Person = require('../models/Person');

exports.list = function (req, res) {
    Person.find({}, function(err, persons) {
        if (err) return next(err);
        res.send(persons);
    });
};