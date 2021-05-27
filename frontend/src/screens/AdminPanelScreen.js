import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const AdminPanelScreen = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    useEffect(() => {
        if(!userInfo || !userInfo.isAdmin) {
            history.push('/admin')
        } 
    }, [history, userInfo])

    return (
        <>
        {/* <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul> */}
        
        <div>
        <div class="card-adminPanel">
            <div class="card-body">
                <h4 class="card-title">Bed Data</h4>
                
                {/* <LinkContainer to='/adminPanel/register'>
                        <Button className='btn-sm' variant='success'>
                                Add Bed    
                        </Button>
                </LinkContainer> */}
                <LinkContainer to='/admin/bed-availabilityList'>
                        <Button className='btn-sm' variant='success'>
                                    Edit Data
                        </Button>
                </LinkContainer>
            </div>
            <div class="card-body">
                <h4 class="card-title">Doctors</h4>
                
                {/* <LinkContainer to='/doctors-consultancy'>
                        <Button className='btn-sm' variant='success'>
                                    Add Doctor
                        </Button>
                </LinkContainer> */}
                <LinkContainer to='/admin/doctors-consultancyList'>
                        <Button className='btn-sm' variant='success'>
                                    Edit Doctors
                        </Button>
                </LinkContainer>
            </div>
            <div class="card-body">
                <h4 class="card-title">Users</h4>
                
                <LinkContainer to='/adminPanel/register'>
                        <Button className='btn-sm' variant='success'>
                                    Add User
                        </Button>
                </LinkContainer>
                <LinkContainer to='/admin/adminUserList'>
                        <Button className='btn-sm' variant='success'>
                                    Edit Users
                        </Button>
                </LinkContainer>
            </div>
            {/* <div class="card-body">
                <h4 class="card-title">Card title</h4>
                
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> */}
        </div>
        </div>
        </>
    )
}

export default AdminPanelScreen
