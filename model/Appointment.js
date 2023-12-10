import { model, Schema } from "mongoose";

const AppointmentSchema = new Schema({
  doctorName: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  notes:{
    type: String,
  }
});

export const Appointment = model("Appointment", AppointmentSchema);
