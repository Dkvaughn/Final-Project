const router = require("express").Router();
const mgeroute= require("./messageroute");


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Profile routes
router.use("/message", mgeroute);

module.exports = router;