//router imports
const  { Router } = require('express');
const router = Router();

const userControllers = require('../controllers/userControllers');

//get all users
router.get('/all', userControllers.allUsers_get);

//add a user
router.post('/', userControllers.addNewUser_post);

//edit a user
router.put('/:id', userControllers.editUser_put);

//delete a user
router.delete('/single/:id', userControllers.deleteSingleUser_delete);

//delete multiple user
router.delete('/multiple', userControllers.deleteMultipleUsers_delete);


module.exports = router;


