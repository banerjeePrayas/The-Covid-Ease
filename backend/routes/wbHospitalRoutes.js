import express from 'express';
const router = express.Router();
import { getWBBedsData, insertWBHospitalData, getHospitalById, updateHospitalData, deleteHospitalData } from '../controllers/wbHospitalController.js'
import { admin, protect } from '../middleware/authMiddleware.js'



router.route('/').get(getWBBedsData).post(protect, admin, insertWBHospitalData);

router.route('/:id').get(getHospitalById).put(protect, admin, updateHospitalData).delete(protect, admin, deleteHospitalData)

export default router;
