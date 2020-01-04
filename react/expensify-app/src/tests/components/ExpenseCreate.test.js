import React from 'react'
import {shallow} from 'enzyme'

import {ExpenseCreate} from '../../components/ExpenseCreate'
import expenses from '../fixtures/expenses'


let onSubmit, history, wrapper

// Set up ExpenseCreate test environment
beforeEach(() => {
    onSubmit = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<ExpenseCreate onSubmit={onSubmit} history={history} />)
})


test('Render ExpenseCreate', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})