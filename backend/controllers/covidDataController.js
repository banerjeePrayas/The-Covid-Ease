import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import stateCovidData from '../models/stateCovidData.js';

// @desc      Get Whole Country COVID Data
// @route     GET  /api/covidData
// @access    Public
const getCovidData = asyncHandler (async (req, res) => {

    const data = await stateCovidData.find({});

    res.json(data)
 })



// @desc      Insert a State Data
// @route     POST  /api/covidData/
// @access    Private/Admin
const insertCovidData = asyncHandler(async(req, res) => {

   const stateData = new stateCovidData({
       state: 'Example State',
       activeCases: 0,
       death: 0,
       recovered: 0,
       vaccinated: 0
   })

   const insertStateData = await stateData.save();
   res.status(201).json(insertStateData);
})



// @desc      Update the Present State Data
// @route     PUT  /api/covidData/:id
// @access    Private/Admin
const updateStateData = asyncHandler(async(req, res) => {

   const { state, activeCases, death, recovered, vaccinated } = req.body;

   const State = await stateCovidData.findById(req.params.id)


   if(State) {
       State.state = state;
       State.activeCases = activeCases;
       State.death = death;
       State.recovered = recovered;
       State.vaccinated = vaccinated;

       const updatedStateData = await State.save();
       res.json(updatedStateData);
   } else {
       res.status(404);
       throw new Error('State Not Found');
   }
})




 export {
    getCovidData,
    insertCovidData,
    updateStateData
 }