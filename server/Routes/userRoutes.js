const router = require("express").Router();
const { register } = require("../Controllers/userControllers");

router.post("/register", register);

module.exports = router;