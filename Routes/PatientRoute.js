import express from "express";
import { AddPatient, DeletePatient, ShowAllPatients, ShowSinglePatient, UpdatePatient } from "../controller/Patient.js";

const PatientRouter = express.Router();

PatientRouter.get("/", ShowAllPatients)
    .get("/:id", ShowSinglePatient)
    .post("/", AddPatient)
    .put("/:id", UpdatePatient)
    .delete("/:id", DeletePatient);

export { PatientRouter };
