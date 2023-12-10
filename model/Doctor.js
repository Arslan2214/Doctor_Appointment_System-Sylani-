import { Schema, model } from "mongoose";

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
    unique: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

export const Doctor = model("Doctor", DoctorSchema);