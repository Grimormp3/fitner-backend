const Asesorado = require("../models/asesoradoModel");

const registrarAsesorado = async (req, res) => {
    try {
        // Los datos que vienen del formulario del frontend
        const datosAsesorado = {
            ...req.body,
            id_coach: req.coachId, // Inyectamos el ID del coach que sacamos del token
        };

        const resultado = await Asesorado.crear(datosAsesorado);

        res.status(201).json({
            message: "Asesorado registrado con éxito",
            id_asesorado: resultado.insertId,
        });
    } catch (error) {
        console.error("Error al registrar asesorado:", error);
        res.status(500).json({ error: "No se pudo registrar al asesorado" });
    }
};

const obtenerAsesorados = async (req, res) => {
    try {
        const id_coach = req.coachId;
        const lista = await Asesorado.listarPorCoach(id_coach);

        res.status(200).json(lista);
    } catch (error) {
        console.error("Error al listar:", error);
        res.status(500).json({ error: "Error al obtener la lista de asesorados" });
    }
};

const obtenerAsesoradoDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const id_coach = req.coachId;

        const asesorado = await Asesorado.obtenerPorId(id, id_coach);

        if (!asesorado) {
            return res.status(404).json({ message: "Asesorado no encontrado" });
        }

        res.status(200).json(asesorado);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los detalles del asesorado" });
    }
};

module.exports = { registrarAsesorado, obtenerAsesorados, obtenerAsesoradoDetalle };
