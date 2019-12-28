import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should set remove expense action object', () => {
    const action = removeExpense({id: 'abc123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})