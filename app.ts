import express from "express";
import { createServer } from 'http'
import bodyParser from "body-parser";
import cors from 'cors'
import { config } from "dotenv";
import recordRouter from "./src/routes/record.route";
import patientRouter from "./src/routes/patient.route";

config()

const app = express();
const server = createServer(app);
const { PORT } = process.env

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5mb" }))
app.use(cors());

app.use("/api/v1/record", recordRouter);
app.use("/api/v1/patient", patientRouter);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});