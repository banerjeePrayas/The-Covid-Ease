import axios from 'axios'
import { HOSPITAL_CREATE_FAIL, HOSPITAL_CREATE_REQUEST, HOSPITAL_CREATE_SUCCESS, HOSPITAL_DELETE_FAIL, HOSPITAL_DELETE_REQUEST, HOSPITAL_DELETE_SUCCESS, HOSPITAL_LIST_FAIL, HOSPITAL_LIST_REQUEST, HOSPITAL_LIST_SUCCESS, HOSPITAL_UPDATE_FAIL, HOSPITAL_UPDATE_REQUEST, HOSPITAL_UPDATE_SUCCESS } from '../constants/bedConstants';


// Action to fetch all Product List
export const listHospitals = () => async (dispatch) => {

    try {
        dispatch({ type: HOSPITAL_LIST_REQUEST })

        const { data } = await axios.get(`/api/WB-beds`);

        dispatch({
            type: HOSPITAL_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOSPITAL_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const createHospital = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOSPITAL_CREATE_REQUEST,
    })

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.post(
      `/api/WB-beds/`, {}, config
    )

    dispatch({
      type: HOSPITAL_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: HOSPITAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const deleteHospital = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOSPITAL_DELETE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      await axios.delete(
        `/api/WB-beds/${id}`, config
      )
  
      dispatch({
        type: HOSPITAL_DELETE_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: HOSPITAL_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  export const updateHospital = (hospital) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOSPITAL_UPDATE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      const { data } = await axios.put(
        `/api/WB-beds/${hospital._id}`, hospital, config
      )
  
      dispatch({
        type: HOSPITAL_UPDATE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: HOSPITAL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
