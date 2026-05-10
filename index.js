const express = require("express");
const cors = require("cors");
const coachRoutes = require("./routes/coachRoutes");
const asesoradoRoutes = require("./routes/asesoradoRoutes");
const planesRoutes = require("./routes/planesRoutes");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next();
});
// Usamos las rutas de coaches
app.use("/api/coaches", coachRoutes);
app.use("/api/asesorados", asesoradoRoutes);
app.use("/api/planes", planesRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Fitner API",
            version: "1.0.0",
            description: "Documentación de la API para la app Fitner",
        },
        servers: [{ url: "http://localhost:3000" }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    // Indicamos dónde están las rutas para que Swagger lea los comentarios
    apis: ["routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
console.log("Endpoints => http://localhost:3000/api-docs");
