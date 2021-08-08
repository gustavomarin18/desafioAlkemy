const {Movement} = require('../database/models');







let homeController = {
    show: (req, res) => {
        res.render('home');
        
    },
    store: (req, res) => {
        console.log ("entre al store");
        console.log(req.body);
           Movement.create({
            concept: req.body.concept,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type,})
        .then(result => { 
        res.redirect('/');
        })
        .catch(error => res.send(error));
 },

 







};

 



module.exports = homeController;