import {createStore} from 'redux'

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }

    case 'DECREMENT':
      return {
        count: state.count - 1
      }

    case 'RESET':
      return {
        count: 0
      }

    default:
      console.log('running')
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'DECREMENT'
})

unsubscribe()

store.dispatch({
  type: 'RESET'
})
