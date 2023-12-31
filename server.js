import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'

import { PatientRouter } from './Routes/PatientRoute.js'
import { AppointmentRouter } from './Routes/AppointmentRoute.js'
import { DoctorRouter } from './Routes/DoctorRoute.js'

const app = express();
dotenv.config()   // .env Config()
app.use(cors())
const PORT = process.env.PORT;

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}

// middleware
app.use(express.json())

// Routes
app.use('/api/patient', PatientRouter)
app.use('/api/doctor', DoctorRouter)
app.use('/api/appointment', AppointmentRouter)


app.listen(PORT, () => console.log(`Server is live ... ${PORT}`))