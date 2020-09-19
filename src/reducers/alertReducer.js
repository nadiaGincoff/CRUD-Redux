import {
    SHOW_ALERT,
    HIDDEN_ALERT
} from '../types'

// each reducer has its own state
const initialState = {
    alert: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT: 
            return {
                ...state, 
                alert: action.payload
            }
        case HIDDEN_ALERT: 
        return {
            ...state, 
            alert: null
        }
        default: 
            return state;
    }
}