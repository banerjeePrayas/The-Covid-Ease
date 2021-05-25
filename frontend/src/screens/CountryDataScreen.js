import React from 'react'
import Country from '../components/countryData.js';
import HomeHelpSection from '../components/HomeHelpSection.js';
import ResourcesCard from '../components/ResourcesCard.js';


const HomeScreen = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <img  src='/images/health-svg.png'></img> */}
            
            <div className='welcome-banner'>
                {/* <img className='welcome-banner-img'  src='/images/health-svg.png'></img> */}
                <img className='welcome-banner-img'  src='/images/wear-mak-svg.png'></img>

                {/* <img className='welcome-banner-img' src='/images/largest-vaccine-banner.jpg'></img> */}
            </div>
            {/* <Country /> */}
            {/* <HomeHelpSection /> */}
            <ResourcesCard />
            {/* <img  src='/images/wear-mak-svg.png'></img> */}
            {/* <Footer /> */}
        </>
    )
}

export default HomeScreen;
