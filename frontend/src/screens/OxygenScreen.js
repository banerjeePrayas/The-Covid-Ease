import React, { useState, useEffect } from 'react';
import { Loader } from 'react-feather';
import { LinkContainer } from 'react-router-bootstrap'
import Meta from '../components/Meta';


const OxygenScreen = () => {
    const [isLoading, setLoading] = useState(false);

    const [oxygens, setOxygens] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('/api/oxygen-cylinder')   
        .then((res) => res.json())
        .then((oxygens) => {
            setOxygens(oxygens);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <>
            <Meta title='Beds | The-Covid-Ease' description='Beds Available' keywords='Bed needed for Covid' />
            
            { isLoading ? ( <Loader /> ) : (
                
                <>
                    { oxygens.map((oxygen) => (

                    <div className='container-oxygen'>
                    <div className='card-resources'>
                        <div className='content'>
                        {/* <img src='/images/covid-svg.svg'></img> */}
                            <img src='/images/hospital-bed.png'></img>
                            <h2>{oxygen.dealerName}</h2>
                            <p><i style={{"color": 'red'}} class="fas fa-map-marker-alt"></i>: {oxygen.location}</p>
                            {/* <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer> */}
                        </div>
                    </div>   
                    </div>
                    ))}
                </>
                
            )}
        </>
    )
}

export default OxygenScreen