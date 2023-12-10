import { Doctor } from '../model/Doctor.js'


export const ShowAllDoctors = async (req, res) => {
    try {
        const data = await Doctor.find();
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const ShowSingleDoctor = async (req, res) => {
    try {
        const data = await Doctor.findById(req.params.id);
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const AddDoctor = async (req, res) => {
    try {
        const newDoctor = await Doctor.create(req.body);
        res.status(201).json(newDoctor);
    } catch (error) {
        console.log("Error creating doctor:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const UpdateDoctor = async (req, res) => {
    try {
        const newDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(newDoctor);
    } catch (error) {
        console.log("Error updating doctor:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const DeleteDoctor = async (req, res) => {
    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteDoctor);
    } catch (error) {
        console.log("Error deleting doctor:", error.message);
        res.status(500).send("Internal Server Error");
    }
}