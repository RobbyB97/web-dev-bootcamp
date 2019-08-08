import {createStore, combineReducers} from 'redux'


// Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}


// Store
const store = createStore(expensesReducer)

console.log(store.getState())

const demoState = {
  expenses: [{
    id: 'fdshfgndkjgdf',
    description: 'Rent',
    note: 'Last rent payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
