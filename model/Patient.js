import { model, Schema } from 'mongoose'

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
    unique: true,
  },
  medicalHistory:{
    type: [String],
    default: [],
  }
});

export const Patient = model("Patient", PatientSchema);