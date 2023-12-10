import { Patient } from '../model/Patient.js'


export const ShowAllPatients = async (req, res) => {
    try {
        const data = await Patient.find();
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const ShowSinglePatient = async (req, res) => {
    try {
        const data = await Patient.findById(req.params.id);
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const AddPatient = async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json(newPatient);
    } catch (error) {
        console.log("Error creating patient:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const UpdatePatient = async (req, res) => {
    try {
        const newPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(newPatient);
    } catch (error) {
        console.log("Error updating patient:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const DeletePatient = async (req, res) => {
    try {
        const deletePatient = await Patient.findByIdAndDelete(req.params.id);
        res.status(201).json(deletePatient);
    } catch (error) {
        console.log("Error deleting patient:", error.message);
        res.status(500).send("Internal Server Error");
    }
}