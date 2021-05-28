import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
    return (
        <>
            <div className='back-home'>
                <LinkContainer to='/'>
                    <button className='btn'>Bact to Home</button>
                </LinkContainer>
            </div>
            <div className='not-found'>
                
                <img className='not-found-svg' src='/images/not-found.svg' alt='not-found-svg'></img>
            </div>
        </>
    )
}

export default NotFound

