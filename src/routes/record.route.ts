import { Router } from "express";
import recordController from "../controllers/record.controller";

const recordRouter = Router();

recordRouter.post("/add-record", recordController.addRecord)
recordRouter.delete("/delete/:id", recordController.deleteRecord)
recordRouter.get("/all", recordController.getRecords)
recordRouter.get("/:id", recordController.getRecord)
recordRouter.put("/update/:id", recordController.updateRecord)
recordRouter.get("/patient/:patient_id", recordController.getRecordsByPatient)

export default recordRouter;
