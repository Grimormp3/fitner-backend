const Planes = require("../models/planModel");

const obtenerPlanes = async (req, res) => {
    try {
        const planes = await Planes.listarPorCoach(req.coachId);
        res.json(planes); // Devolvemos el arreglo de planes
    } catch (error) {
        console.log("Error detallado: ", error);
        res.status(500).json({ error: "Error al obtener planes" });
    }
};

const crearPlan = async (req, res) => {
    try {
        const nuevoPlan = {
            ...req.body,
            id_coach: req.coachId,
        };

        const resultado = await Planes.crear(nuevoPlan);

        res.status(201).json({
            message: "Plan creado exitosamente",
            id_plan_coach: resultado.insertId,
        });
    } catch (error) {
        console.error("Error al crear plan:", error);
        res.status(500).json({ error: "No se pudo crear el plan" });
    }
};

module.exports = { obtenerPlanes, crearPlan };
