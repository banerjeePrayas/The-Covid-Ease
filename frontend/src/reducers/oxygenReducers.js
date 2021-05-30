import { OXYGEN_DELETE_FAIL, OXYGEN_DELETE_REQUEST, OXYGEN_DELETE_SUCCESS, OXYGEN_LIST_FAIL,
    OXYGEN_LIST_REQUEST, OXYGEN_LIST_SUCCESS, OXYGEN_UPDATE_FAIL, OXYGEN_UPDATE_REQUEST,
     OXYGEN_UPDATE_SUCCESS, OXYGEN_UPDATE_RESET, OXYGEN_CREATE_REQUEST, OXYGEN_CREATE_SUCCESS, OXYGEN_CREATE_FAIL, OXYGEN_CREATE_RESET } from "../constants/oxygenConstants";



export const oxygenListReducer = ( state = { oxygens: [] }, action ) => {

   switch (action.type) {
       case OXYGEN_LIST_REQUEST:
           return { loading: true, oxygens: [] }
       
       case OXYGEN_LIST_SUCCESS:
           return { loading: false, 
            oxygens: action.payload.products, 
           }

       case OXYGEN_LIST_FAIL:
           return { loading: false, error: action.payload }
   
       default:
           return state; 
   }

}

export const oxygenCreateReducer = ( state = {}, action ) => {

   switch (action.type) {
       case OXYGEN_CREATE_REQUEST:
           return { loading: true }
       case OXYGEN_CREATE_SUCCESS:
           return { loading: false, success: true, oxygen: action.payload }
       case OXYGEN_CREATE_FAIL:
           return { loading: false, error: action.payload }
       case OXYGEN_CREATE_RESET:
           return { state: {} }
       default:
           return state; 
   }

}


export const oxygenDeleteReducer = ( state = {}, action ) => {

   switch (action.type) {
       case OXYGEN_DELETE_REQUEST:
           return { loading: true }
       case OXYGEN_DELETE_SUCCESS:
           return { loading: false, success: true }
       case OXYGEN_DELETE_FAIL:
           return { loading: false, error: action.payload }
       default:
           return state; 
   }

}


export const oxygenUpdateReducer = ( state = { oxygen: {} }, action ) => {

   switch (action.type) {
       case OXYGEN_UPDATE_REQUEST:
           return { loading: true }
       case OXYGEN_UPDATE_SUCCESS:
           return { loading: false, success: true, oxygen: action.payload }
       case OXYGEN_UPDATE_FAIL:
           return { loading: false, error: action.payload }
       case OXYGEN_UPDATE_RESET:
           return { oxygen: {} }
       default:
           return state; 
   }

}