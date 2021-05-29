import React from 'react'
import {
    useLocation
  } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
    let location = useLocation();
    return (
        <>
            <div className='back-home'>
                <LinkContainer to='/'>
                    <button className='btn'>Bact to Home</button>
                </LinkContainer>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
            <div className='not-found'>
                
                <img className='not-found-svg' src='/images/not-found.svg' alt='not-found-svg'></img>
            </div>
        </>
    )
}

export default NotFound

