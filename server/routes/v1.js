const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

router.post('/user', UserController.create);
router.get('/user/:id', UserController.get);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.remove);
module.exports = router;
