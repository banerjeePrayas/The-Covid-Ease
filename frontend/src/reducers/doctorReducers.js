import { 
    DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS, DOCTOR_LIST_FAIL, DOCTOR_DELETE_REQUEST, 
    DOCTOR_DELETE_SUCCESS, DOCTOR_DELETE_FAIL, DOCTOR_UPDATE_REQUEST, DOCTOR_UPDATE_SUCCESS, 
    DOCTOR_UPDATE_FAIL, DOCTOR_UPDATE_RESET, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_SUCCESS, 
    DOCTOR_CREATE_FAIL, DOCTOR_CREATE_RESET
 } from '../constants/doctorConstants.js';



 export const doctorListReducer = ( state = { doctors: [] }, action ) => {

    switch (action.type) {
        case DOCTOR_LIST_REQUEST:
            return { loading: true, doctors: [] }
        
        case DOCTOR_LIST_SUCCESS:
            return { loading: false, 
                doctors: action.payload.doctors, 
            }

        case DOCTOR_LIST_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state; 
    }

}


export const doctorCreateReducer = ( state = {}, action ) => {

    switch (action.type) {
        case DOCTOR_CREATE_REQUEST:
            return { loading: true }
        case DOCTOR_CREATE_SUCCESS:
            return { loading: false, success: true, doctor: action.payload }
        case DOCTOR_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_CREATE_RESET:
            return { state: {} }
        default:
            return state; 
    }

}



export const doctorDeleteReducer = ( state = {}, action ) => {

    switch (action.type) {
        case DOCTOR_DELETE_REQUEST:
            return { loading: true }
        case DOCTOR_DELETE_SUCCESS:
            return { loading: false, success: true }
        case DOCTOR_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state; 
    }

}


export const doctorUpdateReducer = ( state = { doctor: {} }, action ) => {

    switch (action.type) {
        case DOCTOR_UPDATE_REQUEST:
            return { loading: true }
        case DOCTOR_UPDATE_SUCCESS:
            return { loading: false, success: true, doctor: action.payload }
        case DOCTOR_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_UPDATE_RESET:
            return { doctor: {} }
        default:
            return state; 
    }

}