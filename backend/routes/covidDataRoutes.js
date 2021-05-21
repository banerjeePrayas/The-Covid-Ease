import express from 'express';
const router = express.Router();
import { admin, protect } from '../middleware/authMiddleware.js'
import { getCovidData, insertCovidData, updateStateData } from '../controllers/covidDataController.js'

router.route('/').get(getCovidData).post(protect, admin, insertCovidData);
router.route('/:id').put(protect, admin, updateStateData);

export default router;
