import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Row, Col } from 'react-bootstrap'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Meta from '../../components/Meta';
import { createDoctor, deleteDoctor } from '../../actions/doctorActions'

const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const DoctorEdit = ({ history }) => {

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000)
    }, []);

    const dispatch = useDispatch();

    // const hospitalList = useSelector((state) => state.hospitalList)
    // const { loading, error, hospitals } = hospitalList;

    const doctorDelete = useSelector((state) => state.doctorDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = doctorDelete;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const doctorCreate = useSelector((state) => state.doctorCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, doctor: createdDoctor } = doctorCreate;

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        if(!userInfo || !userInfo.isAdmin) {
            history.push('/admin')
        } 

        if(successCreate) {
            history.push(`/admin/doctor-profile/${createdDoctor._id}/edit`)
        }

        // dispatch(listHospitals());
        fetch('/api/doctors-consultancy')   
        .then((res) => res.json())
        .then((doctors) => {
            setDoctors(doctors);
        })
        .catch((err) => {
            console.log(err);
        });

        
    }, [history, userInfo, createdDoctor, successCreate, successDelete])

    // if(successDelete) {
    //     history.push('/adminPanel')
    // }

    const createDoctorHandler = () => {
        dispatch(createDoctor())
    }

    const deleteHandler = (id) => {
        if(window.confirm('Are You Sure?')) {
            dispatch(deleteDoctor(id))
        }

       
    }

    return (
        <>
        <Meta title='Doctors | The-Covid-Ease' description='Admin Doctors Page' />

        {/* { loading && <Loader /> }
        { error && <Message variant='Danger'>{error}</Message> } */}
        { loadingDelete && <Loader /> }
        { errorDelete && <Message variant='Danger'>{errorDelete}</Message> }

            
        { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (

            <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Doctors</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' variant='success'  onClick={createDoctorHandler}>
                        <i className='fas fa-plus'></i> Add Doctor
                    </Button>
                </Col>
            </Row>
            <table class="table table-hover table-bed">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Treatment Domain</th>
                <th scope="col">Edit & Delete</th>
                {/* <th scope="col">Regd No</th> */}
                {/* <th scope="col">Mobile No</th> */}
                </tr>
            </thead>
            <tbody className='table-bed-body'>
                { doctors.map((doctor) => (
                    <tr key={doctor._id} class="info">
                    <th scope="row">{doctor.name}</th>
                    <td>{doctor.treatmentDomain}</td>
                    {/* <td>{doctor.redgNo}</td> */}
                    {/* <td><a href={`tel:${doctor.mobileNo}`}><i class="fas fa-phone-alt"></i> Contact</a></td> */}
                    <td>
                        <LinkContainer to={`/admin/doctor-profile/${doctor._id}/edit`}> 
                            <Button className='btn-sm' variant='light'>
                                <i className='fas fa-edit'></i>
                            </Button>
                        </LinkContainer>
                        <Button className='btn-sm' variant='danger' onClick={() => deleteHandler(doctor._id)}>
                                <i className='fas fa-trash'></i>
                        </Button>
                        </td>
                    </tr>
                )) }
            </tbody>
            </table> 
            </>
        
        )}

        </>
    )
}

export default DoctorEdit
