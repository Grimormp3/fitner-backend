const express = require("express");
const router = express.Router();
const verificarToken = require("../middlewares/auth");
const planController = require("../controllers/planControllers");

//GET
router.get("/", verificarToken, planController.obtenerPlanes);

module.exports = router;
