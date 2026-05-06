const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

// Definimos que el acceso al login sea por POST
router.post("/login", coachController.login);
router.post("/registro", coachController.registrar);

module.exports = router;
