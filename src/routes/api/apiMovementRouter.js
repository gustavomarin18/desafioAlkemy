const express = require('express');
const router = express.Router();
const apiMovementController = require('../../controller/api/apiMovementController');



router.get('/',apiMovementController.list);
router.get('/:id',apiMovementController.show);
router.post('/',apiMovementController.store);
router.delete('/:id',apiMovementController.delete);





module.exports= router;
