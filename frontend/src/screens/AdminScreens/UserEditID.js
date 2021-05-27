import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Form } from 'react-bootstrap'
import { updateUser } from '../../actions/userActions'
// import { HOSPITAL_UPDATE_RESET } from '../../constants/bedConstants';
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { USER_UPDATE_RESET } from '../../constants/userConstants';

const UserEditID = ({ history, match }) => {

    const userId = match.params.id;

  const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState('')



    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

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
            dispatch({ type:USER_UPDATE_RESET })
            history.push('/admin/adminUserList')
        } else {
            loading = true;
            fetch(`/api/adminUser/${userId}`, {
                method: 'get', 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }), 
            })   
            .then((res) => res.json())
            .then((user) => {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
                loading= false;
            })
            
            .catch((err) => {
                console.log(err);
            });
        }


        
    }, [history, userInfo, successUpdate, dispatch])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, isAdmin, email }));
      }


    return (
        <>
            <div className='container-form'>
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
                        <label for="exampleInputEmail1" class="form-label mt-4"controlId="name">Full Name</label>
                        <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name..."></input>
                    </div>
                   
                    
                    <div class="form-group">
                        <label for="exampleInputEmail6" class="form-label mt-4">Email Id</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail6" placeholder="Email Id..."></input>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" label='isAdmin' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"></input>
                        Admin?
                        </label>
                        
                    </div>
                    
                    <Button type="submit" className="btn" variant='success'>Update</Button>
                </fieldset>
                </form>
            ) }
            
            </div>
        </>
    )
}

export default UserEditID
