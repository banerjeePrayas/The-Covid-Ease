import React from 'react'
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ResourcesCard = () => {
    return (
        <Container>
            <h1>Your One Stop Solution for All Verified Covid Resources <i class="fas fa-check-circle" style={{ color: 'green' }}></i></h1>
            <div className='container'>
                <div className='card-resources'>
                    <div className='content'>
                    <img src='/images/covid-svg.svg'></img>
                        <h2>Beds</h2>
                        <p>Find Out the Bed's Available in WB</p>
                        <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                        <img src='/images/covid-svg.svg'></img>
                        <h2>Doctors</h2>
                        <p>Find Doctors for Online Consultation</p>
                        <LinkContainer to='/doctors-consultancy'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                    <img src='/images/covid-svg.svg'></img>
                        <h2>Oxygen</h2>
                        <p>Check Availability of Oxygen Cylinders Nearby.</p>
                        <LinkContainer to='/oxygen-stock'><a className='btn' href='#'>Read More</a></LinkContainer>
                    </div>
                </div>


                <div className='card-resources'>
                    <div className='content'>
                    <img src='/images/covid-svg.svg'></img>
                        <h2>Red Volunteers</h2>
                        <p>Want Help from Red Volunteers?</p>
                        <LinkContainer to='/redVolunteersWB'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                        <img src='/images/covid-svg.svg'></img>
                        <h2>Help Me</h2>
                        <p>Want Help from Our Side?</p>
                        <LinkContainer to='/help'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                {/* <div className='card-resources'>
                    <div className='content'>
                    <img src='/images/covid-svg.svg'></img>
                        <h2>Oxygen</h2>
                        <p>Check Availability of Oxygen Cylinders Nearby.</p>
                        <LinkContainer to='/doctors-consultancyy'><a className='btn' href='#'>Read More</a></LinkContainer>
                    </div>
                </div>
                 */}
            </div>
        </Container>
    )
}

export default ResourcesCard
