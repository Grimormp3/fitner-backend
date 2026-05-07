const db = require("../config/db");

const Planes = {
    listarPorCoach: async (id_coach) => {
        const query = `
            SELECT id_plan_coach, nombre_plan, precio, descripcion, incluye_vinetas, duracion_meses 
            FROM planes_coach 
            WHERE id_coach = ? 
            ORDER BY precio ASC`;
        const [rows] = await db.query(query, [id_coach]);
        return rows;
    },

    crear: async (datos) => {
        const query = "INSERT INTO planes_coach SET ?";
        const [result] = await db.query(query, datos);
        return result;
    },

    eliminar: async (id_plan_coach, id_coach) => {
        // Importante: Pedimos id_coach para asegurar que el coach solo borre SUS planes
        const query = "DELETE FROM planes_coach WHERE id_plan_coach = ? AND id_coach = ?";
        const [result] = await db.query(query, [id_plan_coach, id_coach]);
        return result;
    },
};

module.exports = Planes;
