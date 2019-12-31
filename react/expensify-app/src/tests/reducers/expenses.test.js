import expensesReducer from '../../reducers/expenses'


test('Set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})