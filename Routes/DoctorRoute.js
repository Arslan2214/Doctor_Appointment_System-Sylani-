import express from "express";
import { AddDoctor, DeleteDoctor, ShowAllDoctors, ShowSingleDoctor, UpdateDoctor } from "../controller/Doctor.js";

const DoctorRouter = express.Router();

DoctorRouter.get("/", ShowAllDoctors)
    .get("/:id", ShowSingleDoctor)
    .post("/", AddDoctor)
    .put("/:id", UpdateDoctor)
    .delete("/:id", DeleteDoctor);

export { DoctorRouter };
