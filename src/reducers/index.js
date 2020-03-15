import { combineReducers } from 'redux';
import allServiceReducers from "./servicesReducer";
import providerReducer from "./providerReducer";

const allReducers = combineReducers({
    services: allServiceReducers.serviceReducer,
    providers: providerReducer,
    currentService: allServiceReducers.currentServiceReducer
})

export default allReducers