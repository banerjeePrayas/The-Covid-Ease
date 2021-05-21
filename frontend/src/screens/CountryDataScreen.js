import React from 'react'
import Country from '../components/countryData.js';
import HomeHelpSection from '../components/HomeHelpSection.js';


const HomeScreen = () => {
    return (
        <>
            {/* <Header /> */}
            <div className='welcome-banner'>
                <img className='welcome-banner-img' src='/images/largest-vaccine-banner.jpg'></img>
            </div>
            <Country />
            <HomeHelpSection />
            {/* <Footer /> */}
        </>
    )
}

export default HomeScreen;
