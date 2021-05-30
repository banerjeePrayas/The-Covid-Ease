import express from 'express';
const router = express.Router();
import { createDonations, verifyDonation } from '../controllers/donationController.js'


router.route("/donations").post(createDonations);
router.route("/success").post(verifyDonation);

export default router;



