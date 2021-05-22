import express from 'express';
const router = express.Router();
import { getAllDoctors, createDoctorProfile, updateDoctorProfile } from '../controllers/doctorController.js'
import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').get(getAllDoctors).post(protect, admin, createDoctorProfile)
router.route('/:id').put(protect, admin, updateDoctorProfile);
// .delete(protect, admin, deleteProduct)


export default router;
