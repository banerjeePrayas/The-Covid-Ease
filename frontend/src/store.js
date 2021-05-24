// createStore --> Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
// combineReducers --> The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// applyMiddleware --> https://redux.js.org/api/applymiddleware 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { doctorListReducer } from './reducers/doctorReducers.js';
import { userLoginReducer } from './reducers/userReducers.js';
import { HospitalListReducer, hospitalDeleteReducer, hospitalUpdateReducer } from './reducers/bedReducers.js';

const reducer = combineReducers({
    doctorList: doctorListReducer,
    userLogin: userLoginReducer,
    hospitalList: HospitalListReducer,
    hospitalDelete: hospitalDeleteReducer,
    hospitalUpdate: hospitalUpdateReducer
});


const userInfoFromStorage = localStorage.getItem('userInfoMySite') ? JSON.parse(localStorage.getItem('userInfoMySite')) : null;



const initialState = {
    userLogIn: { userInfoMySite: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;