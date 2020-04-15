const redux = require('redux')
const initialState = {
    counter: 0
}
//Reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'MINUS') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }
    return state
}
//Store
const store = redux.createStore(reducer)
//console.log('1',store.getState())
//Actions
const addCounter = {
    type: 'ADD'
}
store.subscribe(() => {
    console.log('subscribe', store.getState()) // subscribe следит за изменением стора
})
store.dispatch(addCounter)
//console.log('2', store.getState())
store.dispatch({type: 'MINUS'})
//console.log('3', store.getState())
store.dispatch({type: 'ADD_NUMBER', value: 20})
//console.log('4', store.getState())
