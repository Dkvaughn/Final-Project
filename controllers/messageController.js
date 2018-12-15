const db = require("../models");

module.exports = {
    createMessage: function (req, res){
        console.log(req.body);
        db.Message
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllMessages: function(req, res){
        console.log(req.body)
        db.Message
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}