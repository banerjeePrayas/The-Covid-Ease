import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const CountryData = () => {

    const [ data, setData ] = useState([]);


    const getCovidData = async() => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json');

            const actualData = await response.json();
            console.log(actualData);
            setData(actualData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();

    }, [])



    return (
        <>
            <div className="row">
                <div className="column">
                    <div className="card is-confirmed">
                        <p>Confirmed</p>
                        <h3>{data.confirmed}</h3>
                        {/* <p>Some text</p> */}
                    </div>
                </div>
                <div className="column">
                    <div className="card is-active">
                        <p>Active Cases</p>
                        <h3>{data.active}</h3>
                        {/* <p>Some text</p> */}
                    </div>
                </div>
                <div className="column">
                    <div className="card is-recovered">
                        <p>Recovered</p>
                        <h3>{data.recovered}</h3>
                        {/* <p>Some text</p> */}
                    </div>
                </div>
                <div className="column">
                    <div className="card is-deaths">
                        <p>Deaths</p>
                        <h3>{data.deaths}</h3> 
                        {/* <p>Some text</p> */}
                    </div>
                </div>
                
            </div>
            {/* <div class="d-grid gap-1">
                <button class="btn btn-lg btn-outline-dark" type="button">Block button</button>
            </div> */}
            <div className='to-state-button'>
                
                {/* <button type="button" class="btn btn-dark">Dark</button> */}
                <LinkContainer to='/country'>
                <Button className='btn-sm' variant='success'>
                            Watch Data
                </Button>
                </LinkContainer>
            </div>

            <div className="help-banner"  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/red-volunteer.jpg'})`,
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className='help-banner-main'> 
                <h2>Want Help from Red Volunteers?</h2>
                <h3>Visit their Site for All Volunteers Near You</h3>
                <div className='to-state-button'>
                <Button className='btn' variant='success'>
                                    Visit
                </Button>
                </div>
                </div>
            </div>
        </>
    )
}

export default CountryData
