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

module.exports = { obtenerPlanes };
