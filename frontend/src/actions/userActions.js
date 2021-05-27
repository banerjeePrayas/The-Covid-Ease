import axios from "axios"
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants.js'



export const register = (name, email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
      }

    const { data } = await axios.post(
      '/api/adminUser/register',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Login Action
export const adminLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            heading: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/adminUser/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('adminUserInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}




// Logout Action
export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/'
}


export const updateUser = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_REQUEST
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await axios.put(
        `/api/adminUser/${user._id}`, user, config
      )
  
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data
      })

    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const deleteUser = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DELETE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      await axios.delete(
        `/api/adminUser/${id}`, config
      )
  
      dispatch({
        type: USER_DELETE_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: USER_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



