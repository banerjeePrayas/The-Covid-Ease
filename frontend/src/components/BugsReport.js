import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const BugsReport = () => {
    return (
        <>
            <div className="bugs-banner">
                <div className='bugs-image'>
                    <img src='/images/covid-pandemic-set.png'></img>
                </div>
                <div className='bugs-banner-main'> 
                    <h2>Want Help from Our Side?</h2>
                    <h3>Fill Out this Form and Let Us Know</h3>
                    <h4>Currently We are Serviceable Only in <span>Kolkata</span></h4>
                    <div className='to-state-button'>

                        <LinkContainer to='/help/form'>
                        <Button className='btn' variant='success'>
                        Fill It Up
                        </Button>
                        </LinkContainer>  
                    </div>
                </div>
            </div>
            {/* https://forms.gle/Jv3KxydwWHCAdGWMA */}
            
        </>
    )
}

export default BugsReport
