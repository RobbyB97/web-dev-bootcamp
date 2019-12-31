import filtersReducer from '../../reducers/filters'
import moment from 'moment'


test('Filters reducer default state', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


test('Set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})


test('Set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})


test('Set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'abc'})
    expect(state.text).toBe('abc')
})


test('Set start date filter', () => {
     const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).valueOf()})
     expect(state.startDate).toBe(moment(0).valueOf())
})

test('Set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).valueOf()})
    expect(state.endDate).toBe(moment(0).valueOf())
})