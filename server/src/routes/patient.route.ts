import { Router } from "express";
import patientController from "../controllers/patient.controller";

const patientRouter = Router();

patientRouter.post("/add-patient", patientController.addPatient)
patientRouter.delete("/delete/:id", patientController.deletePatient)
patientRouter.get("/all", patientController.getPatients)
patientRouter.get("/:id", patientController.getPatient)
patientRouter.put("/update/:id", patientController.updatePatient)

export default patientRouter;
