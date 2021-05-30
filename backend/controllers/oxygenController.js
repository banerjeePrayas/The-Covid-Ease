import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import Oxygen from '../models/Oxygen.js';

// @desc      Get All Oxygen Cylinders Available in WB
// @route     GET  /api/oxygen-cylinder
// @access    Public
const getOxygenData = asyncHandler (async (req, res) => {

    const data = await Oxygen.find({});

    res.json(data)
 })



// @desc      Insert a Oxygen Cylinder Supplier
// @route     POST  /api/oxygen-cylinder
// @access    Private/Admin
const insertOxygenData = asyncHandler(async(req, res) => {

   const oxygenData = new Oxygen({
       dealerName: 'Example Supplier',
       location: 'Sample Location City',
       availableCylinder: 4,
       contactNo: '000-000-0001'
   })

   const insertOxygenData = await oxygenData.save();
   res.status(201).json(insertOxygenData);
})



// @desc      Fetch Single Oxygen Dealer
// @route     GET  /api/oxygen-cylinder/:id
// @access    Public
const getOxygenDealerById = asyncHandler(async(req, res) => {

    const oxygenDealer = await Oxygen.findById(req.params.id)
    
    if(oxygenDealer) {
        res.json(oxygenDealer);
    } else {
        res.status(404).json({ message: 'Oxygen Dealer Not Found' });
    }
})



// @desc      Update the Oxygen Dealer Available Details
// @route     PUT  /api/oxygen-cylinder/:id
// @access    Private/Admin
const updateOxygenData = asyncHandler(async(req, res) => {

   const { dealerName, location, availableCylinder, contactNo } = req.body;

   const OxygenDealer = await Oxygen.findById(req.params.id)


   if(OxygenDealer) {
    OxygenDealer.dealerName = dealerName;
    OxygenDealer.location = location;
    OxygenDealer.availableCylinder = availableCylinder;
    OxygenDealer.contactNo = contactNo;


       const updatedOxygenData = await OxygenDealer.save();
       res.json(updatedOxygenData);
   } else {
       res.status(404);
       throw new Error('Oxygen Dealer Not Found');
   }
})


// @desc      Delete a Oxygen Dealer by ID
// @route     DELETE  /api/oxygen-cylinder/:id
// @access    Private/admin
const deleteOxygenlData = asyncHandler(async(req, res) => {

    const oxygenDealer = await Oxygen.findById(req.params.id)
    
    if(oxygenDealer) {
        await oxygenDealer.remove();
        res.json({
            message: 'Oxygen Dealer Removed'
        })
    } else {
        res.status(404).json({ message: 'Oxygen Dealer Not Found' });
    }
})


 export {
    getOxygenData,
    insertOxygenData,
    getOxygenDealerById,
    updateOxygenData,
    deleteOxygenlData
 }