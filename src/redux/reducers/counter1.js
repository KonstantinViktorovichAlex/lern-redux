import {CHANGE, MINUS, ONPLUSVALUE, PLUS, RESET} from "../actions/actionTypes";

const initialState = {
    counter: 0,
    text: 'test'
}

export default function counter1(state = initialState, action) {

    switch (action.type) {
        case PLUS:
            return {
                counter: state.counter + 1
            }
        case MINUS:
            return {
                counter: state.counter - 1
            }
        case RESET:
            return {
                counter: state.counter = 0
            }
        case CHANGE:
            return {
                text: state.text = action.payload
            }
        case ONPLUSVALUE:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}