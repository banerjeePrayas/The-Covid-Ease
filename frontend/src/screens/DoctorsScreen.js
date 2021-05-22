// import React, { useEffect } from 'react'
import React, { useState, useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router-dom';
// import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listDoctors } from '../actions/doctorActions.js'

const DoctorsScreen = () => {

    // const dispatch = useDispatch();

    // const doctorList = useSelector((state) => state.doctorList)
    // const { loading, error, doctors } = doctorList;


    // useEffect(() => {

    // //   dispatch({ type: BLOG_CREATE_RESET });

    // //     if(!userInfo || !userInfo.isAdmin) {
    // //         history.push('/login')
    // //     } 
        
    //     // if(successCreate) {
    //     //     history.push(`/admin/blogs/${createdBlog._id}/edit`)
    //     // } else {
    //         dispatch(listDoctors())
    //     // }

    // }, [dispatch])

    // const createBlogHandler = () => {
    //   dispatch(createBlog())
    // }

    // const deleteHandler = (id) => {
    //   if(window.confirm('Are You Sure?')) {
    //     dispatch(deleteBlog(id));
    //   }
    // }

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

  useEffect(() => {
    fetch('/api/doctors-consultancy')
      .then((res) => res.json())
      .then((doctors) => {
        setDoctors(doctors);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
        <div className='doctor-layout'>
           { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 

            <>
              { doctors.map((doctor) => (
                <div className="card-doctor" key={doctor._id}>
                    <img src="/images/doctor-profile.jpg" alt="Profile Pic"></img>
                    <h1 className='doctor-name'>{doctor.name}</h1>
                    <h2 className="doctor-degree">{doctor.degree}</h2>
                    <p className="title-doctor">{doctor.treatmentDomain}</p>
                    <p>Regd No: <span>{doctor.redgNo}</span></p>
                    <p className="doctor-address">Addrs: {doctor.address}</p>
                    
                    <p>
                        <button><a href={`tel:${doctor.mobileNo}`}><i class="fas fa-phone-alt"></i> Contact</a></button>
                        <button><a href={`mailto:${doctor.email}`}><i class="far fa-envelope"></i> Mail</a></button>
                    </p>
                </div>
              ))}
            </>
            }
                
            
        </div>
    )
}

export default DoctorsScreen
