
const initialState = {
    counter: 0
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'PLUS':
            return {
                counter: state.counter + 1
            }
        case 'MINUS':
            return {
                counter: state.counter - 1
            }
    }

    return state
}