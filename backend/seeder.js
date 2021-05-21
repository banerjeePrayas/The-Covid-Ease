import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import stateCovidData from './data/stateCovidData.js';
import wbBed from './data/wbHospitalBedData.js';
import stateData from './models/stateCovidData.js';
import WbBedData from './models/wbHospitalBedData.js';
import connectDB from './config/db.js';


dotenv.config();

connectDB();

// Import Data into DB
const importData = async () => {
    try {
        // To delete all Past Data in DB
        await stateData.deleteMany();
        await WbBedData.deleteMany();


        const createdStateData = await stateData.insertMany(stateCovidData);

        const WBBedData = await WbBedData.insertMany(wbBed);

        // const adminUser = createdUsers[0]._id;

        // // To introduce admin field in each products created
        // const sampleProducts = products.map(product => {
        //     return{ ...product, user: adminUser }
        // })

        // await Product.insertMany(sampleProducts);

        console.log('Data Imported');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

// Destroy Data into DB
const destroyData = async () => {
    try {
        // To delete all Past Data in DB
        await stateData.deleteMany();
        await WbBedData.deleteMany();
        // await User.deleteMany();

        console.log('Data Destroyed');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}


if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}