import { HOSPITAL_DELETE_FAIL, HOSPITAL_DELETE_REQUEST, HOSPITAL_DELETE_SUCCESS, HOSPITAL_LIST_FAIL,
     HOSPITAL_LIST_REQUEST, HOSPITAL_LIST_SUCCESS, HOSPITAL_UPDATE_FAIL, HOSPITAL_UPDATE_REQUEST,
      HOSPITAL_UPDATE_SUCCESS, HOSPITAL_UPDATE_RESET, HOSPITAL_CREATE_REQUEST, HOSPITAL_CREATE_SUCCESS, HOSPITAL_CREATE_FAIL, HOSPITAL_CREATE_RESET } from "../constants/bedConstants";



export const HospitalListReducer = ( state = { hospitals: [] }, action ) => {

    switch (action.type) {
        case HOSPITAL_LIST_REQUEST:
            return { loading: true, hospitals: [] }
        
        case HOSPITAL_LIST_SUCCESS:
            return { loading: false, 
                hospitals: action.payload.products, 
            }

        case HOSPITAL_LIST_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state; 
    }

}

export const hospitalCreateReducer = ( state = {}, action ) => {

    switch (action.type) {
        case HOSPITAL_CREATE_REQUEST:
            return { loading: true }
        case HOSPITAL_CREATE_SUCCESS:
            return { loading: false, success: true, hospital: action.payload }
        case HOSPITAL_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case HOSPITAL_CREATE_RESET:
            return { state: {} }
        default:
            return state; 
    }

}


export const hospitalDeleteReducer = ( state = {}, action ) => {

    switch (action.type) {
        case HOSPITAL_DELETE_REQUEST:
            return { loading: true }
        case HOSPITAL_DELETE_SUCCESS:
            return { loading: false, success: true }
        case HOSPITAL_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state; 
    }

}


export const hospitalUpdateReducer = ( state = { hospital: {} }, action ) => {

    switch (action.type) {
        case HOSPITAL_UPDATE_REQUEST:
            return { loading: true }
        case HOSPITAL_UPDATE_SUCCESS:
            return { loading: false, success: true, hospital: action.payload }
        case HOSPITAL_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case HOSPITAL_UPDATE_RESET:
            return { hospital: {} }
        default:
            return state; 
    }

}