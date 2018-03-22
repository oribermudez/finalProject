var express = require('express');
var router = express.Router();
const controller = require("../controllers/ticket.controller");
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/', controller.getTickets);
router.post('/new', upload.single('file'), controller.postTicket);
router.patch('/edit/:id', controller.patchTicket);
router.post('/editpic/:id', upload.any(), controller.patchTicketPic);
router.delete('/delete/:id', controller.deleteTicket);
router.get('/mytickets', controller.myTickets);
router.get('/zone/:zone', controller.zone);
router.get('/techtickets/:zone', controller.techTickets);

module.exports = router;

