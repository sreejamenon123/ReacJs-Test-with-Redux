
export let actions = {
    SET_PROVIDERS: 'SET_PROVIDERS',
    FETCH_PROVIDERS_ERROR: 'FETCH_PROVIDERS_ERROR',
    PROVIDERS_FETCHING_IN_PROGRESS: 'PROVIDERS_FETCHING_IN_PROGRESS'
}

export function setProviders(providers) {
    return {
        type: actions.SET_PROVIDERS,
        payload: providers
    }
}

export function fetchProvidersError() {
    return {
        type: actions.FETCH_PROVIDERS_ERROR
    }
}

export function fetchProvidersInProgress() {
    return {
        type: actions.PROVIDERS_FETCHING_IN_PROGRESS
    }
}