import React from 'react'
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


// ICONS from: https://www.flaticon.com/

const ResourcesCard = () => {
    return (
        <Container>
            {/* <i class="fas fa-check-circle" style={{ color: 'green' }}></i> */}
            <h1 className='resources-card-heading'>Your One Stop Solution for All Verified Covid Resources <img style={{ "width": '40px', "height": '40px' }} src='/images/correct.png'></img></h1>
            <div className='container'>
                <div className='card-resources'>
                    <div className='content'>
                    {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/hospital-bed.png'></img>
                        <h2>Beds</h2>
                        <p>Find Out the Bed's Available in WB</p>
                        <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>
                <div className='card-resources'>
                    <div className='content'>
                    {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/blood.png'></img>
                        <h2>Blood</h2>
                        <p>Find Out Blood Donors in WB</p>
                        <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                        {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/doctor.png'></img>
                        <h2>Doctors</h2>
                        <p>Find Doctors for Online Consultation</p>
                        <LinkContainer to='/doctors-consultancy'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                    {/* <img src='/images/covid-svg.svg'></img> */}
                    <img src='/images/oxygen-mask.png'></img>
                        <h2>Oxygen</h2>
                        <p>Check Availability of Oxygen Cylinders Nearby.</p>
                        <LinkContainer to='/oxygen-stock'><a className='btn' href='#'>Read More</a></LinkContainer>
                    </div>
                </div>


                <div className='card-resources'>
                    <div className='content'>
                    {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/love.png'></img>
                        <h2>Red Volunteers</h2>
                        <p>Want Help from Red Volunteers?</p>
                        <LinkContainer to='/redVolunteersWB'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>

                <div className='card-resources'>
                    <div className='content'>
                        {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/help.png'></img>
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
