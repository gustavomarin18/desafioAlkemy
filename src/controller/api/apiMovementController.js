const { Movement } = require('../../database/models');
const { Op } = require("sequelize");




const apiMovementController = {
    list: (req, res) =>{
        Movement.findAll(
            {
                attributes: ['id','concept','amount','date','type']


            }
            
        )
        .then (movements =>{
return res.status(200).json ({
total: movements.length,
data: movements,
status: 200
})
 })
},







}

module.exports = apiMovementController;