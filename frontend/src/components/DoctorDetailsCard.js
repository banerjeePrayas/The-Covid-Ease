import React from 'react'

const DoctorDetailsCard = () => {
    return (
        <>
            <div className="card">
                <img src="/images/doctor-profile.jpg" alt="Profile Pic" style="width:100%"></img>
                <h1>Doctor</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button>Contact</button></p>
            </div>
        </>
    )
}

export default DoctorDetailsCard
