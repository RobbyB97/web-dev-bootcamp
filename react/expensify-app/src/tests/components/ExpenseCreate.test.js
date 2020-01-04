import React from 'react'
import {shallow} from 'enzyme'

import {ExpenseCreate} from '../../components/ExpenseCreate'
import expenses from '../fixtures/expenses'


let addExpense, history, wrapper

// Set up ExpenseCreate test environment
beforeEach(() => {
    addExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<ExpenseCreate addExpense={addExpense} history={history} />)
})


test('Render ExpenseCreate', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})