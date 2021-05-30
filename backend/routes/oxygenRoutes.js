import express from 'express';
const router = express.Router();
import { getOxygenData,
    insertOxygenData,
    getOxygenDealerById,
    updateOxygenData,
    deleteOxygenlData } from '../controllers/oxygenController.js'
import { admin, protect } from '../middleware/authMiddleware.js'



router.route('/').get(getOxygenData).post(protect, admin, insertOxygenData);

router.route('/:id').get(getOxygenDealerById).put(protect, admin, updateOxygenData).delete(protect, admin, deleteOxygenlData)

export default router;
