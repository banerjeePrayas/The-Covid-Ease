import express from 'express';
const router = express.Router();
import { getWBBedsData, insertWBHospitalData, updateStateData } from '../controllers/wbHospitalController.js'

router.route('/').get(getWBBedsData).post(insertWBHospitalData);

router.route('/:id').put(updateStateData);

export default router;
