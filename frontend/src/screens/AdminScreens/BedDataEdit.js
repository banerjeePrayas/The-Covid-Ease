import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Row, Col, Container } from 'react-bootstrap'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { createHospital, deleteHospital } from '../../actions/bedActions.js'
import { HOSPITAL_CREATE_RESET } from '../../constants/bedConstants';

const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const BedDataEdit = ({ history }) => {

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

    const hospitalDelete = useSelector((state) => state.hospitalDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = hospitalDelete;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const hospitalCreate = useSelector((state) => state.hospitalCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, hospital: createdHospital } = hospitalCreate;

    const [beds, setBeds] = useState([]);

    useEffect(() => {
        dispatch({ type: HOSPITAL_CREATE_RESET });
        if(!userInfo || !userInfo.isAdmin) {
            history.push('/admin')
        } 

        if(successCreate) {
            history.push(`/admin/WB-beds/${createdHospital._id}/edit`)
        }
             // dispatch(listHospitals());
            fetch('/api/WB-beds')   
            .then((res) => res.json())
            .then((beds) => {
                setBeds(beds);
            })
            .catch((err) => {
                console.log(err);
            });
        

        
    }, [createdHospital, dispatch, history, userInfo, successCreate, successDelete])

    // if(successDelete) {
    //     history.push('/adminPanel')
    // }

    const createBedHandler = () => {
        dispatch(createHospital())
      }

    const deleteHandler = (id) => {
        if(window.confirm('Are You Sure?')) {
            dispatch(deleteHospital(id))
        }

       
    }

    return (
        <>
        {/* { loading && <Loader /> }
        { error && <Message variant='Danger'>{error}</Message> } */}
        { loadingDelete && <Loader /> }
        { errorDelete && <Message variant='Danger'>{errorDelete}</Message> }

            
        { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (

            <>
                <Container>
                <Row className='align-items-center'>
                <Col>
                    <h1>Beds Available</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' variant='success'  onClick={createBedHandler}>
                        <i className='fas fa-plus'></i> Add Bed
                    </Button>
                </Col>
                </Row>
                <table class="table table-hover table-bed">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Beds Available</th>
                    <th scope="col">Edit & Delete</th>
                    </tr>
                </thead>
                <tbody className='table-bed-body'>
                    { beds.map((bed) => (
                        <tr key={bed._id} class="info">
                        <th scope="row">{bed.name}</th>
                        <th scope="row">{bed.address}</th>
                        <td>{bed.bedAvailable}</td>
                        {/* <td><a href={`tel:${bed.contactNo}`}><i class="fas fa-phone-alt"></i> Contact</a></td> */}
                        <td>
                            <LinkContainer to={`/admin/bed-availabilityEdit/${bed._id}/edit`}> 
                                <Button className='btn-sm' variant='light'>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button className='btn-sm' variant='danger' onClick={() => deleteHandler(bed._id)}>
                                    <i className='fas fa-trash'></i>
                            </Button>
                            </td>
                        </tr>
                    )) }
                </tbody>
                </table> 
                </Container>
            </>
        
        
        )}

        </>
    )
}

export default BedDataEdit
