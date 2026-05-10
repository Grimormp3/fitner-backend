const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

/**
 * @swagger
 * /api/coaches/registro:
 *   post:
 *     summary: Registrar un nuevo coach
 *     tags: [Coaches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre_completo
 *               - email
 *               - password
 *             properties:
 *               nombre_completo:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 example: juan.coach@fitner.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       201:
 *         description: Coach creado exitosamente
 *       400:
 *         description: El correo ya está registrado o faltan datos
 */
router.post("/registro", coachController.registrar);

/**
 * @swagger
 * /api/coaches/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Coaches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: juan.coach@fitner.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve el token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Contraseña incorrecta
 *       404:
 *         description: El coach no existe
 */
router.post("/login", coachController.login);

module.exports = router;
