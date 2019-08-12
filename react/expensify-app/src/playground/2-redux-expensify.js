import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'


// Action generators
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

const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const setStartDate = (startDate) => {
  if (startDate) {
    return {
      type: 'SET_START_DATE',
      startDate
    }
  }
  return {
    type: 'SET_START_DATE',
    startDate: undefined
  }
}

const setEndDate = (endDate) => {
  if (endDate) {
    return {
      type: 'SET_END_DATE',
      endDate
    }
  }
  return {
    type: 'SET_END_DATE',
    endDate: undefined
  }
}

const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
}
)
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})


// Reducers
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]

    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
          return action.id !== expense.id
      })

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })

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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }

    default:
      return state
  }
}


// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = true

    return startDateMatch && endDateMatch && textMatch
  })
}


// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)


store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Rent', amount: 10, createdAt: 100}))
store.dispatch(addExpense({description: 'Other thing', amount: 80000, createdAt: 200}))
store.dispatch(setStartDate(150))

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
