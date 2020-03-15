import { actions as providersAction } from '../actions/providersActions';

const providerReducer = (state = { providers: null, isFetching: false }, action) => {
    switch (action.type) {
        case providersAction.SET_PROVIDERS:
            return {
                providers: action.payload,
                isFetching: false
            }
        case providersAction.PROVIDERS_FETCHING_IN_PROGRESS:
            return {
                providers: null,
                isFetching: true
            }
        default:
            return state;
    }
}


export default providerReducer;