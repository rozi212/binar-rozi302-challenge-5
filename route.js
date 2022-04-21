const express = require('express');
const router = express.Router();

const menuController = require('./control/menu');
const permainanController = require('./control/permainan');
const loginController = require('./control/login');
const usersController = require('./control/users');


//router//
router.get('/', menuController.menu);
router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);
router.get('/users', usersController.users);
router.get('/users/:id', usersController.usersById);
router.get('/menu', menuController.menu);
router.get('/permainan', permainanController.permainan);



//module//
module.exports = router;