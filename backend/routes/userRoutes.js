import express from 'express';
const router = express.Router();
import { registerAdminUser, authAdminUser, getUsers, getUserById, updateUser, deletetUser } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'


router.route('/').get(protect, admin, getUsers);
router.route('/register').post(protect, admin, registerAdminUser)
router.route('/login').post(authAdminUser);
router.route('/:id').get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deletetUser)

export default router;
