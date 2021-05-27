import React from 'react'
import Meta from '../components/Meta';

const GoogleFormScreen = () => {
    return (
        <div className='google-form-div'>
            <Meta title='Help ME | The-Covid-Ease' description='Help Me Form' keywords='Form for Help' />

            <iframe title='g-form' className='google-form' src="https://docs.google.com/forms/d/e/1FAIpQLSes-Ts-ftvoe3XoKiVMfaql20LZf-bLh9QWjLB3e6LC_MpL2w/viewform?embedded=true" width="640" height="1900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}

export default GoogleFormScreen
