const db = require("../config/db");

const Planes = {
    listarPorCoach: async (id_coach) => {
        const [rows] = await db.query("SELECT id_plan_coach FROM planes_coach WHERE id_coach = ?", [id_coach]);
        return rows;
    },
};

module.exports = Planes;
