import express from "express";
import { AddAppointment, DeleteAppointment, ShowAllAppointments, ShowSingleAppointment, UpdateAppointment } from "../controller/Appointment.js";

const AppointmentRouter = express.Router();

AppointmentRouter.get("/", ShowAllAppointments)
    .get("/:id", ShowSingleAppointment)
    .post("/", AddAppointment)
    .put("/:id", UpdateAppointment)
    .delete("/:id", DeleteAppointment);

export { AppointmentRouter };
