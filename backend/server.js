import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import covidDataRoutes from './routes/covidDataRoutes.js';
import WBBedRoutes from './routes/wbHospitalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';


dotenv.config();

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// To be able to achieve JSON data from body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is Running.....');
});


app.use('/api/covidData', covidDataRoutes);


app.use('/api/WB-beds', WBBedRoutes);

app.use('/api/adminUser', userRoutes);

app.use('/api/doctors-consultancy', doctorRoutes);



const PORT = process.env.PORT || 8500;

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on Port ${PORT}`));