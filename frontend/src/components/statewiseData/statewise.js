import React, { useState, useEffect } from 'react';
import { Loader } from 'react-feather';
import './statewise.css';

const StatewiseData = () => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);


    const getCovidData = async() => {
        try {
            setLoading(true);
            const response = await fetch('https://api.covid19india.org/data.json');

            const actualData = await response.json();
            setData(actualData.statewise)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();

    }, [])


    return (
        <>

            { loading ? <Loader /> : (
                <div className='container-fluid mt-5'>
                {/* <div className='MapSwitcher-div'>
                    <div className='MapSwitcher'>
                        <div className='highlight'></div>
                        <div className='clickable is-confirmed'>222222</div>
                        <div className='clickable is-active'>222222</div>
                        <div className='clickable is-recovered'>222222</div>
                        <div className='clickable is-decreased'>222222</div>
                    </div>
                </div> */}
                <div className='main-heading'>
                    <h1 className='mt-5 text-center'> <span className='font-weight-bold'>India</span> COVID-19 Statewise Data</h1>
                </div>

                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'> 
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated At</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.map((currElement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> { currElement.state } </td>
                                            <td> { currElement.confirmed } </td>
                                            <td> { currElement.recovered } </td>
                                            <td> { currElement.deaths } </td>
                                            <td> { currElement.active } </td>
                                            <td> { currElement.lastupdatedtime } </td>
                                        </tr>
                                    )
                                })
                            }


                            
                        </tbody>
                    </table>
                </div>
            </div>
            )  }
        </>
    )
}

export default StatewiseData
