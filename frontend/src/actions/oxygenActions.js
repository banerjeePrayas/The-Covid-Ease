import axios from 'axios'
import { OXYGEN_DELETE_FAIL, OXYGEN_DELETE_REQUEST, OXYGEN_DELETE_SUCCESS, OXYGEN_LIST_FAIL,
    OXYGEN_LIST_REQUEST, OXYGEN_LIST_SUCCESS, OXYGEN_UPDATE_FAIL, OXYGEN_UPDATE_REQUEST,
     OXYGEN_UPDATE_SUCCESS,  OXYGEN_CREATE_REQUEST, OXYGEN_CREATE_SUCCESS, OXYGEN_CREATE_FAIL, OXYGEN_CREATE_RESET } from "../constants/bedConstants";



// Action to fetch all Product List
export const listOxygens = () => async (dispatch) => {

    try {
        dispatch({ type: OXYGEN_LIST_REQUEST })

        const { data } = await axios.get(`/api/oxygen-cylinder`);

        dispatch({
            type: OXYGEN_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OXYGEN_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const createOxygen = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: OXYGEN_CREATE_REQUEST,
    })

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.post(
      `/api/oxygen-cylinder/`, {}, config
    )

    dispatch({
      type: OXYGEN_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: OXYGEN_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const deleteOxygen = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: OXYGEN_DELETE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      await axios.delete(
        `/api/oxygen-cylinder/${id}`, config
      )
  
      dispatch({
        type: OXYGEN_DELETE_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: OXYGEN_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  export const updateOxygen = (oxygen) => async (dispatch, getState) => {
    try {
      dispatch({
        type: OXYGEN_UPDATE_REQUEST,
      })
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      const { data } = await axios.put(
        `/api/oxygen-cylinder/${oxygen._id}`, oxygen, config
      )
  
      dispatch({
        type: OXYGEN_UPDATE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: OXYGEN_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
