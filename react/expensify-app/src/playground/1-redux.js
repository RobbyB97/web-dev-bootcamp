import {createStore} from 'redux'


// Action generators
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})


const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
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
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 80
})
store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'SET',
  number: 800
})
