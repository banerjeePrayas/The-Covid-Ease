import axios from 'axios'
import { 
    DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS, DOCTOR_LIST_FAIL, DOCTOR_DELETE_REQUEST, DOCTOR_DELETE_SUCCESS, DOCTOR_DELETE_FAIL, DOCTOR_UPDATE_REQUEST, DOCTOR_UPDATE_SUCCESS, DOCTOR_UPDATE_FAIL, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_SUCCESS, DOCTOR_CREATE_FAIL
 } from '../constants/doctorConstants.js';




// Action to fetch all Product List
export const listDoctors = () => async (dispatch) => {

    try {
        dispatch({ type: DOCTOR_LIST_REQUEST })

        console.log('Hello');
        const { data } = await axios.get(`/api/doctors-consultancy`);
        console.log(data);

        dispatch({
            type: DOCTOR_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCTOR_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const createDoctor = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: DOCTOR_CREATE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await axios.post(
        `/api/doctors-consultancy/`, {}, config
      )
  
      dispatch({
        type: DOCTOR_CREATE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: DOCTOR_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



export const deleteDoctor = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DOCTOR_DELETE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      await axios.delete(
        `/api/doctors-consultancy/${id}`, config
      )
  
      dispatch({
        type: DOCTOR_DELETE_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: DOCTOR_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  export const updateDoctor = (doctor) => async (dispatch, getState) => {
    try {
      dispatch({
        type: DOCTOR_UPDATE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      const { data } = await axios.put(
        `/api/doctors-consultancy/${doctor._id}`, doctor, config
      )
  
      dispatch({
        type: DOCTOR_UPDATE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: DOCTOR_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
