import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Meta from '../../components/Meta';
import { deleteUser } from '../../actions/userActions'

const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const UserEdit = ({ history }) => {

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

    const userDelete = useSelector((state) => state.userDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = userDelete;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const [users, setUsers] = useState([]);

    useEffect(() => {

        if(userInfo && userInfo.isAdmin) {
            fetch('/api/adminUser', {
                method: 'get', 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }), 
            })   
            .then((res) => res.json())  
            .then((users) => {
                setUsers(users);
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            history.push('/admin')
        }
        

        
    }, [history, userInfo, successDelete])

    // if(successDelete) {
    //     history.push('/adminPanel')
    // }

    const deleteHandler = (id) => {
        if(window.confirm('Are You Sure?')) {
            dispatch(deleteUser(id))
        }

       
    }

    return (
        <>
        <Meta title='Users | The-Covid-Ease' description='Admin Users Page' />
        {/* { loading && <Loader /> }
        { error && <Message variant='Danger'>{error}</Message> } */}
        { loadingDelete && <Loader /> }
        { errorDelete && <Message variant='Danger'>{errorDelete}</Message> }

            
        { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (


        <table class="table table-hover table-bed">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">IsAdmin</th>
            </tr>
        </thead>
        <tbody className='table-bed-body'>
            { users.map((user) => (
                <tr key={user._id} class="info">
                <th scope="row">{user.name}</th>
                <td><a href={`mailto:${user.email}`}><i class="far fa-envelope"></i> E-Mail</a></td>
                <td>{user.isAdmin ?  <i class="fas fa-check fa-2x" style={{ color: 'green' }}></i> : (
                      <i className='fas fa-times fa-2x' style={{ color: 'red' }}></i>
                    )}</td>
                <td></td>
                <td>
                      <LinkContainer to={`/admin/adminUserList/${user._id}/edit`}> 
                        <Button className='btn-sm' variant='light'>
                            <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button className='btn-sm' variant='danger' onClick={() => deleteHandler(user._id)}>
                            <i className='fas fa-trash'></i>
                    </Button>
                    </td>
                </tr>
            )) }
        </tbody>
        </table> 
        )}

        </>
    )
}

export default UserEdit
