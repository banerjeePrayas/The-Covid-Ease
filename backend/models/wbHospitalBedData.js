import mongoose from 'mongoose';

const WBHospitalBedSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bedAvailable: {
        type: Number,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const WBHospitalData = mongoose.model('StateHospitalData', WBHospitalBedSchema);

export default WBHospitalData;