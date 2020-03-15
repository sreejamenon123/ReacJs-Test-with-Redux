import { actions as serviceActions } from "../actions/serviceActions";
import { actions as currentServiceActions } from "../actions/currentServiceAction";

const serviceReducer = (state = { services: null, isFetching: false }, action) => {
    switch (action.type) {
        case serviceActions.SET_SERVICES:
            return {
                services: action.payload,
                isFetching: false
            }
        case serviceActions.SERVICES_FETCHING_IN_PROGRESS:
            return {
                services: null,
                isFetching: true
            }
        default:
            return state;
    }
}
const currentServiceReducer = (state = 'All Services', action) => {
    switch (action.type) {
        case currentServiceActions.SET_CURRENT_SERVICE:
            return action.payload

        default:
            return state
    }
}
export default { serviceReducer, currentServiceReducer }