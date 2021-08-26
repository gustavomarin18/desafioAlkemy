const { Movement } = require('../../database/models');
const DB = require('../../database/models')
const Op = DB.Sequelize.Op;

const movement = require('../../database/models/movement');



const apiMovementController = {
    list: (req, res) =>{
        Movement.findAll(
            {attributes: ['id','concept','amount','date','type']}
            
        )
        .then (movements =>{
return res.status(200).json ({
total: movements.length,
data: movements,
status: 200
})
 })
},
show: (req,res)=>{
    Movement.findByPk((req.params.id),
        {attributes: ['id','concept','amount','date','type']}
        
    )
    .then (movement =>{
return res.status(200).json ({
data: movement,
status: 200
})
})},
store: (req,res)=>{
    Movement.create((req.body),
    {attributes: ['id','concept','amount','date','type']}
    
)
.then (movement =>{
return res.status(200).json ({
data: movement,
status: 200,
created: "ok"
})
})},

delete: (req, res)=>
Movement.destroy(
    {
where: {
id: req.params.id}
}

)
.then (response =>{
return res.json(response)



}),
search: (req, res)=>
DB.Movement
         .findAll ({
             where:{
                concept: {[Op.like]: '%' + req.query.keyword + '%'} }
 })
         .then (movements=>{
             if (movements.length > 0){
     return res.status (200).json(movements);}
     return res.status (200).json ("No encontramos conceptos con ese nombre")

            })
            

            
            
            























}

module.exports = apiMovementController;