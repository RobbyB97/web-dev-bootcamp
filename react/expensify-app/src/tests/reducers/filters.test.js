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
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: 'abc'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('abc')
})


test('Set start date filter', () => {
    const action = {
        type: 'SET_START_DATE', 
        startDate: moment(0).valueOf()
    }
     const state = filtersReducer(undefined, action)
     expect(state.startDate).toEqual(moment(0).valueOf())
})

test('Set end date filter', () => {
    const action = {
        type: 'SET_END_DATE', 
        endDate: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0).valueOf())
})