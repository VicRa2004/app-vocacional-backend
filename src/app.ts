// Se agrega al principio para que carge bien
import dotenv from "dotenv";
import path from "path";

// Carga el archivo .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

export default app;
