import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Form } from 'react-bootstrap'
import { updateDoctor } from '../../actions/doctorActions'
import { HOSPITAL_UPDATE_RESET } from '../../constants/bedConstants';
import Loader from '../../components/Loader'
import axios from 'axios'
import Message from '../../components/Message'
import { DOCTOR_UPDATE_RESET } from '../../constants/doctorConstants';

const DoctorEditID = ({ history, match }) => {

    const doctorId = match.params.id;

  const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [degree, setDegree] = useState('')
    const [image, setImage] = useState('')
    const [treatmentDomain, setTreatmentDomain] = useState('')
    const [redgNo, setRegdNo] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [onlineConsultancyFees, setFees] = useState('')
    const [uploading, setUploading] = useState(false)



    const doctorUpdate = useSelector((state) => state.doctorUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = doctorUpdate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    let loading = false;

    useEffect(() => {
        // if(!userInfo || !userInfo.isAdmin) {
        //     console.log('Admin');
        //     history.push('/admin')
        // } 

        
        if(successUpdate) {
            console.log('Updated');
            dispatch({ type:DOCTOR_UPDATE_RESET })
            history.push('/admin/doctors-consultancyList')
        } else {
            loading = true;
            fetch(`/api/doctors-consultancy/${doctorId}`)   
            .then((res) => res.json())
            .then((doctor) => {
                setName(doctor.name)
                setDegree(doctor.degree)
                setImage(doctor.image)
                setTreatmentDomain(doctor.treatmentDomain)
                setRegdNo(doctor.redgNo)
                setMobileNo(doctor.mobileNo)
                setEmail(doctor.email)
                setAddress(doctor.address)
                setFees(doctor.onlineConsultancyFees)
                loading= false;
            })
            
            .catch((err) => {
                console.log(err);
            });
        }


        
    }, [history, userInfo, dispatch, successUpdate])


    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        // console.log(file);
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
          console.log(data);  
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateDoctor({ _id: doctorId, name, degree, image, treatmentDomain,
             redgNo, mobileNo, email, address, onlineConsultancyFees }));
      }


    return (
        <>
            <Container>
            { loadingUpdate && <Loader /> }

            { loading ? <Loader />  : (
                <form  onSubmit={submitHandler}>
                <fieldset>
                    <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"><i class="far fa-user-circle"></i> User</label>
                    <div class="col-sm-10">
                        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={userInfo.name}></input>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4"controlId="name">DR. Name</label>
                        <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name of the Hospital"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2" class="form-label mt-4">Degree</label>
                        <input type="name" value={degree} onChange={(e) => setDegree(e.target.value)} class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Contact No of the Hospital"></input>
                    </div>
                    <Form.Group controlId='image'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id='image-file'
                    type='file'
                    name='image'
                    label='Choose File'
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>
                    <div class="form-group">
                        <label for="exampleInputEmail3" class="form-label mt-4">Treatment Domain</label>
                        <input type="text" value={treatmentDomain} onChange={(e) => setTreatmentDomain(e.target.value)} class="form-control" id="exampleInputEmail3" placeholder="Treatment Domain..."></input>
                        <small id="emailHelp" class="form-text text-muted">Enter the No Of Bed's available in Number Format.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail4" class="form-label mt-4">Registration No</label>
                        <input type="text" value={redgNo} onChange={(e) => setRegdNo(e.target.value)} class="form-control" id="exampleInputEmail4" placeholder="Doctor's Registered No..."></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail5" class="form-label mt-4">Contact No</label>
                        <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} class="form-control" id="exampleInputEmail5" placeholder="Contact No..."></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail6" class="form-label mt-4">Email Id</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail6" placeholder="Email Id..."></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea" class="form-label mt-4">Address</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail7" class="form-label mt-4">Fees</label>
                        <input type="text" value={onlineConsultancyFees} onChange={(e) => setFees(e.target.value)} class="form-control" id="exampleInputEmail7" placeholder="Enter Amount of Consultation Fees..."></input>
                        <small id="emailHelp" class="form-text text-muted">If You have the good-will to Check Patients for FREE then mention FREE in the Text Box.</small>
                    </div>
                    
                    
                    <Button type="submit" className="btn" variant='success'>Update</Button>
                </fieldset>
                </form>
            ) }
            
            </Container>
        </>
    )
}

export default DoctorEditID
