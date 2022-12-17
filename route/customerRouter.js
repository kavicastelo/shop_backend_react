const express = require('express');
const customerController = require('../controller/customerController');

const router = express.Router();

router.post('/save',customerController.save);
router.get('/find',customerController.get);
router.put('/update',customerController.update);
router.delete('/delete',customerController.del);
router.get('/list',customerController.getAll);

module.exports = router;