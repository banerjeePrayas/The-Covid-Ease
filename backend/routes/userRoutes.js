import express from 'express';
const router = express.Router();
import { registerAdminUser, authAdminUser } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').post(protect, admin, registerAdminUser);
router.route('/login').post(authAdminUser);

export default router;
