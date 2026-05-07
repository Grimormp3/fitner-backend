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
};

module.exports = Planes;
