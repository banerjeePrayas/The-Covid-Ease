import React from 'react'
import JSONDATA from '../SearchList.json'
import { useState } from 'react'
import { Card } from 'react-bootstrap';

const OxygenByCityScreen = () => {

    const [ searchTerm, setSearchTerm ] = useState('');

    return (
        <div style={{"textAlign": 'center'}}>
            <form action="" class="search-bar">
                {/* Search Here <i class="far fa-hand-point-right"></i> */}
                <input type="search" onChange={event => {setSearchTerm(event.target.value)}} name="search" pattern=".*\S.*" required></input>
                <button class="search-btn" type="submit">
                    <span>Search</span>
                </button>
            </form>
            <div className='city-div'>
            { JSONDATA.filter((val) => {
                if(searchTerm === '') {
                    return val;
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return <Card className='city-cards'>
                    <Card.Header>{val.name}</Card.Header>
                    <i class="fas fa-chevron-circle-right"></i>
                </Card>
            }) }
            </div>
        </div>
    )
}

export default OxygenByCityScreen
