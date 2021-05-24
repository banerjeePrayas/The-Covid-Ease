import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import wbHospitalData from '../models/wbHospitalBedData.js';

// @desc      Get All Hospital Beds Available in WB
// @route     GET  /api/WB-beds
// @access    Public
const getWBBedsData = asyncHandler (async (req, res) => {

    const data = await wbHospitalData.find({});

    res.json(data)
 })



// @desc      Insert a Hospital with Bed Details
// @route     POST  /api/WB-beds/
// @access    Private/Admin
const insertWBHospitalData = asyncHandler(async(req, res) => {

   const hospitalData = new wbHospitalData({
       name: 'Example Name',
       address: 'Please Edit the Address',
       bedAvailable: 0,
       contactNo: '000-000-0001'
   })

   const insertHospitalData = await hospitalData.save();
   res.status(201).json(insertHospitalData);
})



// @desc      Fetch Single Hospital
// @route     GET  /api/WB-neds/:id
// @access    Public
const getHospitalById = asyncHandler(async(req, res) => {

    const hospital = await wbHospitalData.findById(req.params.id)
    
    if(hospital) {
        res.json(hospital);
    } else {
        res.status(404).json({ message: 'Hospital Not Found' });
    }
})



// @desc      Update the Hospital with Bed Details
// @route     PUT  /api/WB-beds/:id
// @access    Private/Admin
const updateHospitalData = asyncHandler(async(req, res) => {

   const { name, address, bedAvailable, contactNo } = req.body;

   const Hospital = await wbHospitalData.findById(req.params.id)


   if(Hospital) {
       Hospital.name = name;
       Hospital.address = address;
       Hospital.bedAvailable = bedAvailable;
       Hospital.contactNo = contactNo;


       const updatedHospitalData = await Hospital.save();
       res.json(updatedHospitalData);
   } else {
       res.status(404);
       throw new Error('Hospital Not Found');
   }
})


// @desc      Delete a Hospital by ID
// @route     DELETE  /api/products/:id
// @access    Private/admin
const deleteHospitalData = asyncHandler(async(req, res) => {

    const hospital = await wbHospitalData.findById(req.params.id)
    
    if(hospital) {
        await hospital.remove();
        res.json({
            message: 'Hospital Removed'
        })
    } else {
        res.status(404).json({ message: 'Hospital Not Found' });
    }
})


 export {
    getWBBedsData,
    insertWBHospitalData,
    getHospitalById,
    updateHospitalData,
    deleteHospitalData
 }