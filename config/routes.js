var express= require("express");
var router = express.Router();

router.use("/",require("../controller/index"));

module.exports = router;