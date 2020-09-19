import {
    SHOW_ALERT,
    HIDDEN_ALERT
} from '../types'

// diplay alert 
export function displayAlert(alert) {
    return (dispatch) => {
        dispatch( createAlert(alert) )
    }
}

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

// hidden alert 
export function hiddenAlertAction() {
    return (dispatch) => {
        dispatch( hiddenAlert() )
    }
}

const hiddenAlert = alert => ({
    type: HIDDEN_ALERT,
    payload: null
})