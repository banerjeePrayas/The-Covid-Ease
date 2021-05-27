import React from 'react'
import StatewiseData from '../components/statewiseData/statewise.js';
import Meta from '../components/Meta';

const HomeScreen = () => {
    return (
        <>
            <Meta title='State Covid Count | The-Covid-Ease' description='Statewise Covid Count' keywords='Covid Statistics' />
            {/* <Header /> */}
            <StatewiseData />
            {/* <Footer /> */}
        </>
    )
}

export default HomeScreen;
