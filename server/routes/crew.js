var express = require('express');
var router = express.Router();
const controller = require("../controllers/crew.controller");

router.get('/', controller.getCrew);
router.post('/new', controller.postCrew);
router.patch('/edit/:id', controller.patchCrew);
router.delete('/delete/:id', controller.deleteCrew);

module.exports = router;