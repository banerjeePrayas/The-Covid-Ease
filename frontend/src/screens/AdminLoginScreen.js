import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'react-bootstrap'
import { adminLogin } from '../actions/userActions.js'
import Message from '../components/Message'
import Loader from '../components/Loader'


const AdminLoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = '/adminPanel';
    // location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        // DISPATCH LOGIN
        dispatch(adminLogin(email, password))
    }


    return (
        <>
            { error && <Message variant='danger'>Invalid Username or Password</Message> }
            { loading && <Loader /> }
            <Container>
            <form onSubmit={submitHandler}> 
            <fieldset>
            <div style={{"textAlign": 'center'}}><img className='rotate' src='/images/covid-svg.svg'></img> Covid Ease</div>

                <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"></input>
                </div>
            </fieldset>
            <Button style={{ "marginTop": '1rem', "padding": '1rem 2rem' }}  type='submit' className='btn-sm' variant='success'>
                                    Login IN
            </Button>
            </form>
            </Container>
        </>
    )
}

export default AdminLoginScreen
