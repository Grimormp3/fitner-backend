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

const eliminarPlan = async (req, res) => {
    try {
        const { id } = req.params; // El ID viene en la URL
        const id_coach = req.coachId;

        const resultado = await Planes.eliminar(id, id_coach);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Plan no encontrado o no tienes permiso" });
        }

        res.json({ message: "Plan eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "No se pudo eliminar el plan" });
    }
};

module.exports = { obtenerPlanes, crearPlan, eliminarPlan };
