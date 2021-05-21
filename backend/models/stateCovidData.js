import mongoose from 'mongoose';

const stateCovidDataSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    activeCases: {
        type: Number,
        required: true,
    },
    death: {
        type: Number,
        required: true
    },
    recovered: {
        type: Number,
        required: true
    },
    vaccinated: {
        type: Number,
        required: true
    }
    
}, {
    timestamps: true
})


const StateData = mongoose.model('StateData', stateCovidDataSchema);

export default StateData;