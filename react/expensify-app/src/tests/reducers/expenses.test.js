import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

import moment from 'moment'


test('Set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})


test('Remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})


test('Remove no expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-100'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('Add expense', () => {
    const expense = {
        id: '4',
        description: 'Debt',
        note: '',
        amount: 1000000,
        createdAt: moment(0).add(6, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense ])
})


test('Edit expense', () => {

})


test('Don\'t edit expense if ID is invalid', () => {

})