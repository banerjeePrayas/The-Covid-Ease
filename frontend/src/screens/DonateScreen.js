import React from 'react'

// https://blog.learncodeonline.in/razorpay-integration-in-react
// https://hashnode.com/


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


const __DEV__ = document.domain === 'localhost';

const DonateScreen = () => {

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        const data = await fetch('api/donation/payDonation', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

        var options = {
            key: __DEV__ ? process.env.RAZORPAY_KEY_ID : process.env.RAZORPAY_KEY_ID,
            amount: data.amount.toString(), 
            currency: data.currency,
            name: "The-Covid-Ease",
            description: "Donate Us & Help Us Grow",
            image: "https://the-covid-ease.herokuapp.com/images/covid-svg.svg",
            order_id: data.id, 
            callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
            prefill: {
				name: 'Prayas',
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			},
            "theme": {
                "color": "#3399cc"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    

    return (
        <div>
            <h1>
            Donate Any Amount of Your Choice to Help Us Support More People Free of Cost.
            </h1>
            <a target="_blank" onClick={displayRazorpay}>Donate Rs. 100</a>
        </div>
    )
}

export default DonateScreen