import React from 'react'
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


// ICONS from: https://www.flaticon.com/

const ResourcesCard = () => {
    return (
        <Container>
            {/* <i class="fas fa-check-circle" style={{ color: 'green' }}></i> */}
            <h1 className='resources-card-heading'>Your One Stop Solution for All Verified Covid Resources <img style={{ "width": '40px', "height": '40px' }} src='/images/correct.png'></img></h1>
            <p className='resources-card-paragraph'>This Website is to bring all the Covid related information in one place. Please help others by adding verified Oxygen or Ambulance or Volunteers leads in respective pages. We shall win this fight together. (এই Website টি Covid সম্পর্কিত সমস্ত তথ্য এক জায়গায় আনার চেষ্টা। আপনার কাছে অক্সিজেন / অ্যাম্বুলেন্স / ভলান্টিয়ার দের তথ্য থাকলে অনুগ্রহ করে Website এ দেওয়া ফর্ম এ জমা দিন এবং অপরকে সাহায্য করুন। এই লড়াই আমরা একসাথেই জিতব।)</p>
            <div className='container'>
                <div className='card-resources'>
                    <div className='content'>
                    {/* <img src='/images/covid-svg.svg'></img> */}
                        <img src='/images/hospital-bed.png'></img>
                        <h2>Beds</h2>
                        <p>Find Out the Beds Available in WB</p>
                        <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div>
                {/* <div className='card-resources'>
                    <div className='content'>
                        <img src='/images/blood.png'></img>
                        <h2>Blood</h2>
                        <p>Find Out Blood Donors in WB</p>
                        <LinkContainer to='/blood-donor'><a href='#'>Read More</a></LinkContainer>
                    </div>
                </div> */}

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
                        <LinkContainer to='/oxygen-cylinder'><a className='btn' href='#'>Read More</a></LinkContainer>
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
