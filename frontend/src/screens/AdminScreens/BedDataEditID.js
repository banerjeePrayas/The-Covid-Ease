import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { updateHospital } from '../../actions/bedActions'
import { HOSPITAL_UPDATE_RESET } from '../../constants/bedConstants';
import Loader from '../../components/Loader'
import Message from '../../components/Message'

const BedDataEditID = ({ history, match }) => {

    const hospitalId = match.params.id;

  const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [contactNo, setContact] = useState('')
    const [bedAvailable, setBedNo] = useState(0)
    const [address, setAddress] = useState('')



    const hospitalUpdate = useSelector((state) => state.hospitalUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = hospitalUpdate

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
            dispatch({ type: HOSPITAL_UPDATE_RESET })
            history.push('/admin/bed-availabilityList')
        } else {
            loading = true;
            fetch(`/api/WB-beds/${hospitalId}`)   
            .then((res) => res.json())
            .then((hospital) => {
                setName(hospital.name)
                setContact(hospital.contactNo)
                setBedNo(hospital.bedAvailable)
                setAddress(hospital.address)
                loading= false;
            })
            
            .catch((err) => {
                console.log(err);
            });
        }


        
    }, [history, hospitalId, userInfo, successUpdate, dispatch])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateHospital({ _id: hospitalId, name, contactNo, bedAvailable, address }))
      }


    return (
        <>
            <Container>
            { loadingUpdate && <Loader /> }

            { loading ? <Loader />  : (
                <form  onSubmit={submitHandler}>
                <fieldset>
                    <legend>Legend</legend>
                    <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">User</label>
                    <div class="col-sm-10">
                        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={userInfo.name}></input>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4"controlId="name">Hospital Name</label>
                        <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name of the Hospital"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail2" class="form-label mt-4">Contact No</label>
                        <input type="name" value={contactNo} onChange={(e) => setContact(e.target.value)} class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Contact No of the Hospital"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail3" class="form-label mt-4">Beds Available</label>
                        <input type="number" value={bedAvailable} onChange={(e) => setBedNo(e.target.value)} class="form-control" id="exampleInputEmail3" placeholder="No Of Beds Available"></input>
                        <small id="emailHelp" class="form-text text-muted">Enter the No Of Bed's available in Number Format.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea" class="form-label mt-4">Address</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    
                    
                    <button type="submit" class="btn btn-primary">Update</button>
                </fieldset>
                </form>
            ) }
            
            </Container>
        </>
    )
}

export default BedDataEditID
