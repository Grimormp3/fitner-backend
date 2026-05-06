const db = require("../config/db");

const Coach = {
    buscarPorEmail: async (email) => {
        const [rows] = await db.query("SELECT * FROM coaches WHERE email = ?", [email]);
        return rows; // Retorna el primer coach encontrado o undefined
    },

    crear: async (datos) => {
        const { nombre_completo, email, password } = datos;
        const query = "INSERT INTO coaches (nombre_completo, email, password) VALUES (?, ?, ?)";
        const [result] = await db.query(query, [nombre_completo, email, password]);
        return result;
    },
};

module.exports = Coach;
