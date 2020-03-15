export let actions = {
    SET_SERVICES: 'SET_SERVICES',
    FETCH_SERVICES_ERROR: 'FETCH_SERVICES_ERROR',
    SERVICES_FETCHING_IN_PROGRESS: 'SERVICES_FETCHING_IN_PROGRESS'
}

export function setServices(services) {
    return {
        type: actions.SET_SERVICES,
        payload: services
    }
}

export function fetchServiceError() {
    return {
        type: actions.FETCH_SERVICES_ERROR
    }
}

export function fetchServicesInProgress() {
    return {
        type: actions.SERVICES_FETCHING_IN_PROGRESS
    }
}