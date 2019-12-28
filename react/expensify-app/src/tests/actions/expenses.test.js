import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Remove expense action object', () => {
    const action = removeExpense({id: 'abc123'})
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})


test('Edit expense action object', () => {
    const action = editExpense('qwerty', {description: 'Bill'})
    
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'qwerty',
        updates: {
            description: 'Bill'
        }
    })
})


test('Add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was my money, now it\'s not'
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('Add expense action object with default values', () => {
    const action = addExpense()
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }

    })
})
