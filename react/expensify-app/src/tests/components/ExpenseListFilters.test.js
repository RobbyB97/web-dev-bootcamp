import React from 'react'
import {shallow} from 'enzyme'

import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
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
    const e = {
        target: {
            value: 'test'
        }
    }
    wrapper.find('input').simulate('change', e)
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value)
})