
const User = require('mongoose').model('User');

module.exports = {
    
    byName(req, res){
        User.find({name: new RegExp(req.term, 'i')}, {_pw:0,__v:0})
        .then(matches => res.json(matches))
        .catch(err => res.send(500).json(err));
    },

    byEmail(req, res){
        User.find({email: new RegExp(req.term, 'i')}, {_pw:0,__v:0})
        .then(matches => res.json(matches))
        .catch(err => res.send(500).json(err));
    }

}