import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Remove expense action object', () => {
    const action = removeExpense({id: 'abc123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('Edit expense action object', () => {
    const action = editExpense('qwerty', {})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'qwerty',
        updates: {}
    })
})