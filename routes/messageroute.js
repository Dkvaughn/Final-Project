const router = require("express").Router();
const messageController = require("../controllers/messageController")


router.route("/message")
    .post(messageController.createMessage)
    .get(messageController.findAllMessages);

module.exports = router;