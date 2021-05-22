import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    treatmentDomain: {
        type: String,
        required: true
    },
    redgNo: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    onlineConsultancyFees: {
        type: Number,
        required: true
    }
    
}, {
    timestamps: true
})



const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;