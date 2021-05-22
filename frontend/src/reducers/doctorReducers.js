import { 
    DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS, DOCTOR_LIST_FAIL
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