const express = require("express");
const router = express.Router();
const verificarToken = require("../middlewares/auth");
const planController = require("../controllers/planControllers");

/**
 * @swagger
 * /api/planes:
 *   get:
 *     summary: Obtener la lista de planes del coach
 *     tags: [Planes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de planes obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get("/", verificarToken, planController.obtenerPlanes);

/**
 * @swagger
 * /api/planes/registrar:
 *   post:
 *     summary: Registrar un nuevo plan de asesoría
 *     tags: [Planes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_plan:
 *                 type: string
 *                 example: "Plan Pro"
 *               precio:
 *                 type: number
 *                 example: 49.99
 *               descripcion:
 *                 type: string
 *                 example: "Asesoría completa con seguimiento semanal"
 *               incluye_vinetas:
 *                 type: string
 *                 example: "Dieta, Rutina, Chat 24/7"
 *               duracion_meses:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Plan creado con éxito
 *       500:
 *         description: Error al crear el plan
 */
router.post("/registrar", verificarToken, planController.crearPlan);

/**
 * @swagger
 * /api/planes/{id}:
 *   delete:
 *     summary: Eliminar un plan de asesoría
 *     tags: [Planes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan a eliminar
 *     responses:
 *       200:
 *         description: Plan eliminado correctamente
 *       404:
 *         description: Plan no encontrado o no pertenece al coach
 *       500:
 *         description: Error al eliminar el plan
 */
router.delete("/:id", verificarToken, planController.eliminarPlan);

module.exports = router;
