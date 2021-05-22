import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import Doctors from '../models/Doctor.js';


// @desc      Get All Doctor's Name
// @route     GET  /api/doctors-consultancy
// @access    Public
const getAllDoctors = asyncHandler (async (req, res) => {

    const data = await Doctors.find({});

    res.json(data)
 })



// @desc      Create a Doctor Profile
// @route     POST  /api/doctors-consultancy/
// @access    Private/admin
const createDoctorProfile = asyncHandler(async(req, res) => {

    const doctor = new Doctors({
        name: 'Sample Name',
        degree: 'Sample Degree',
        image: '/images/doctor-profile.jpg',
        treatmentDomain: 'Sample Treatment Domain',
        redgNo: 'WB/xx/xxx',
        mobileNo: 'xxxxxxxxxxx',
        email: 'example@email.com',
        address: 'Sample Address',
        onlineConsultancyFees: 100
    })

    const createdDoctorProfile = await doctor.save();
    res.status(201).json(createdDoctorProfile);
})


// @desc      Update a Doctor Profile
// @route     PUT  /api/doctors-consultancy/:id
// @access    Private/admin
const updateDoctorProfile = asyncHandler(async(req, res) => {

    const { name, degree, image, treatmentDomain, redgNo, mobileNo, email, address, onlineConsultancyFees } = req.body;

    const doctor = await Doctors.findById(req.params.id)


    if(doctor) {
        doctor.name = name;
        doctor.degree = degree;
        doctor.image = image;
        doctor.treatmentDomain = treatmentDomain;
        doctor.redgNo = redgNo;
        doctor.mobileNo = mobileNo;
        doctor.email = email;
        doctor.address = address;
        doctor.onlineConsultancyFees = onlineConsultancyFees;

        const updatedDoctor = await doctor.save();
        res.json(updatedDoctor);
    } else {
        res.status(404);
        throw new Error('Doctor Not Found');
    }
})



export {
    getAllDoctors,
    createDoctorProfile,
    updateDoctorProfile
}