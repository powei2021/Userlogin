const express = require('express');
const router = express.Router();
const createCtrl = require('../controller/create.controller');

/* Get home page */
router.post('/register', createCtrl.register);

module.export = router;