import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'

import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, 
    setEndDate, wrapper, onFocusChange

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    onFocusChange = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onFocusChange={onFocusChange}
        />
    )
})


test('Render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    })

    expect(wrapper).toMatchSnapshot()
})


test('Handle onTextChange', () => {
    let e = {
        target: {
            value: 'test'
        }
    }
    wrapper.find('input').simulate('change', e)
    
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value)
})


test('Handle sortByAmount', () => {
    let e = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').simulate('change', e)

    expect(sortByAmount).toHaveBeenCalled()
})


test('Handle sortByDate', () => {
    wrapper.setProps({
        filters: altFilters
    })
    let e = {
        target: {
            value: 'date'
        }
    }
    wrapper.find('select').simulate('change', e)

    expect(sortByDate).toHaveBeenCalled()
})


test('Handle onDatesChange', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: startDate,
        endDate: endDate
    })

    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})