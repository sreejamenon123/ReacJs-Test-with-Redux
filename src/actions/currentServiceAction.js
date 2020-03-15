
export const actions = {
    SET_CURRENT_SERVICE: 'SET_CURRENT_SERVICE'
}

export function setCurrentService(currentService) {
    return {
        type: actions.SET_CURRENT_SERVICE,
        payload: currentService
    }
}