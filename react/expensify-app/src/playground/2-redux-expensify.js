import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'


const addExpense = (
  {
    description = '',
    note='',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})


// Reducers
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}


// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

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
