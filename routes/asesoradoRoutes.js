const express = require("express");
const router = express.Router();
const asesoradoController = require("../controllers/asesoradoController");
const verificarToken = require("../middlewares/auth");

/**
 * @swagger
 * /api/asesorados/registrar:
 *   post:
 *     summary: Registrar un nuevo asesorado
 *     tags: [Asesorados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_completo:
 *                 type: string
 *               edad:
 *                 type: integer
 *               sexo:
 *                 type: string
 *                 enum: [Masculino, Femenino, Otro]
 *               actividad_fisica:
 *                 type: string
 *               altura_inicial:
 *                 type: number
 *               meta_peso:
 *                 type: number
 *               peso_actual:
 *                 type: number
 *               id_plan_coach:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Asesorado creado con éxito
 *       500:
 *         description: Error del servidor
 */
router.post("/registrar", verificarToken, asesoradoController.registrarAsesorado);

/**
 * @swagger
 * /api/asesorados:
 *   get:
 *     summary: Obtener lista de todos los asesorados del coach
 *     tags: [Asesorados]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de asesorados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", verificarToken, asesoradoController.obtenerAsesorados);

/**
 * @swagger
 * /api/asesorados/{id}:
 *   get:
 *     summary: Obtener detalle de un asesorado específico
 *     tags: [Asesorados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del asesorado
 *     responses:
 *       200:
 *         description: Datos del asesorado
 *       404:
 *         description: Asesorado no encontrado
 */
router.get("/:id", verificarToken, asesoradoController.obtenerAsesoradoDetalle);

module.exports = router;
