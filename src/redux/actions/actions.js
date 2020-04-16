import {MINUS, PLUS, RESET, CHANGE, CHANGENUMBER, ONPLUSVALUE} from './actionTypes'

export function minus() {
    return {
        type: MINUS
    }
}
export function plus() {
    return {
        type: PLUS
    }
}

export function reset() {
    return {
        type: RESET
    }
}
export function change(value) {
    return {
        type: CHANGE,
        payload: value
    }
}
export function changenumber(value) {
    return {
        type: CHANGENUMBER,
        payload: value
    }
}
export function onplusvalue(value) {
    return {
        type: ONPLUSVALUE,
        payload: value
    }
}
export function asyncplusvalue(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(onplusvalue(number))
        }, 3000)
    }
}
