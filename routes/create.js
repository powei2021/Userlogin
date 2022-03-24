const express = require('express');
const router = express.Router();
const createCtrl = require('../controller/create.controller');

/* Get home page */
router.use('/register', createCtrl.register);
router.post('/login', createCtrl.login);

module.exports = router;