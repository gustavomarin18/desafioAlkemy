const express = require('express');
const router = express.Router();
const apiMovementController = require('../../controller/api/apiMovementController');



router.get('/',apiMovementController.list);



module.exports= router;
