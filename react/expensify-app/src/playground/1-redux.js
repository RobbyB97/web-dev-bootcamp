import {createStore} from 'redux'


// Action generators   (if object exists) (if not)
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({number}) => ({
  type: 'SET',
  number
})

const resetCount = () => ({
  type: 'RESET'
})


// Reducers
const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }

    case 'RESET':
      return {
        count: 0
      }

    case 'SET':
      return {
        count: action.number
      }

    default:
      console.log('running')
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(decrementCount({decrementBy: 8000}))
store.dispatch(decrementCount())
store.dispatch(resetCount())
store.dispatch(setCount({number: 800}))
