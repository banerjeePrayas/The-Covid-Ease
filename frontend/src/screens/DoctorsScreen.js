// import React, { useEffect } from 'react'
import React, { useState, useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';
import SearchBox from '../components/SearchBox';

const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DoctorsScreen = () => {

  const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000)
    }, []);


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
        <div>
          <Meta title='Doctors | The-Covid-Ease' description='Doctors for Online Consultation' keywords='doctors for Covid' />
          { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (
            
              <>
              <PageHeaders message='Doctors - ডাক্তার' />
              <SearchBox />
                <div className='doctor-layout'>
                {
                  doctors.map((doctor) => (
                    <div className="card-doctor" key={doctor._id}>
                        <Image src={doctor.image} alt={doctor.name}></Image>
                        <h1 className='doctor-name'>DR {doctor.name}</h1>
                        <h2 className="doctor-degree">{doctor.degree}</h2>
                        <p className="title-doctor">{doctor.treatmentDomain}</p>
                        {/* <p>Regd No: <span>{doctor.redgNo}</span></p> */}
                        <p className="doctor-address">Fees: {doctor.onlineConsultancyFees}</p>
                        
                        <p>
                            <button><a href={`tel:${doctor.mobileNo}`}><i class="fas fa-phone-alt"></i> Contact</a></button>
                            <button><a href={`mailto:${doctor.email}`}><i class="far fa-envelope"></i> Mail</a></button>
                        </p>
                    </div>
                  ))
                }
                </div>
              </>
              
            )
            }
                
            
        </div>
    )
}

export default DoctorsScreen
