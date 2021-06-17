import asyncHandler from 'express-async-handler';  
import Razorpay  from 'razorpay';
import shortId  from 'shortid';

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_SECRET;
const razorpay = new Razorpay({
    key_id: "rzp_live_lsy6BoOE1OVfaP",
    key_secret: "eaGjTFtyfbU7KJ2IGsYznfH7"
  });

const createDonations = asyncHandler (async (req, res) => {

    // const { amount } = req.body;
    const payment_capture = 1;
    // const Amount = amount;
    const amount = 10;
    const currency = "INR";
    
    const options = {
        amount: (amount * 100).toString(),
         currency, 
         receipt: shortId.generate(), 
         payment_capture
    }
    
    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error);
    }

 })

 const verifyDonation = () => {
    // Do a Validation
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}

    res.json({ status: 'ok' })
 }



export {
    createDonations,
    verifyDonation
}