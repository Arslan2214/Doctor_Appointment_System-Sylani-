import { Appointment } from '../model/Appointment.js'


export const ShowAllAppointments = async (req, res) => {
    try {
        const data = await Appointment.find();
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const ShowSingleAppointment = async (req, res) => {
    try {
        const data = await Appointment.findById(req.params.id);
        if (data) {
            res.status(200).json(data);
            return;
        }
        res.status(404).send("Not Found");
    } catch (error) {
        res.json({ "Error": error.message });
    }
}

export const AddAppointment = async (req, res) => {
    try {
        const newAppointment = await Appointment.create(req.body);
        res.status(201).json(newAppointment);
    } catch (error) {
        console.log("Error creating appointment:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const UpdateAppointment = async (req, res) => {
    try {
        const newAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(newAppointment);
    } catch (error) {
        console.log("Error updating appointment:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const DeleteAppointment = async (req, res) => {
    try {
        const deleteAppointment = await Appointment.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteAppointment);
    } catch (error) {
        console.log("Error deleting appointment:", error.message);
        res.status(500).send("Internal Server Error");
    }
}