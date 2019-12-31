import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


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