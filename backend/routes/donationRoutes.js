import express from 'express';
const router = express.Router();
import { createDonations, verifyDonation } from '../controllers/donationController.js'


router.route("/payDonation").post(createDonations);
router.route("/verification").post(verifyDonation);

export default router;



