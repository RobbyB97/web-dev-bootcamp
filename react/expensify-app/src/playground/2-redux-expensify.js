import {createoStore, combineReducers} from 'redux'

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

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
