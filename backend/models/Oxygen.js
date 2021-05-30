import mongoose from 'mongoose';

const OxygenSchema = mongoose.Schema({
    dealerName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availableCylinder: {
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


const OxygenData = mongoose.model('OxygenData', OxygenSchema);

export default OxygenData;