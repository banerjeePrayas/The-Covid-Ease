import React from 'react'
import Country from '../components/countryData.js';
import HomeHelpSection from '../components/HomeHelpSection.js';
import ResourcesCard from '../components/ResourcesCard.js';
import BugsReport from '../components/BugsReport.js';
import Meta from '../components/Meta';


const HomeScreen = () => {
    return (
        <>
            <Meta />
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
            {/* <BugsReport /> */}
            {/* <img  src='/images/wear-mak-svg.png'></img> */}
            {/* <Footer /> */}
        </>
    )
}

export default HomeScreen;
