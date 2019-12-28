import {
    setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount
} from '../../actions/filters'

import moment from 'moment'


test('Generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})


test('Generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
