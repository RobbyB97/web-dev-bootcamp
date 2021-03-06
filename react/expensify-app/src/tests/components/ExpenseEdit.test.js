import React from 'react'
import {shallow} from 'enzyme'

import {ExpenseEdit} from '../../components/ExpenseEdit'
import expenses from '../fixtures/expenses'

let removeExpense, editExpense, history, wrapper

// Set up ExpenseEdit test environment
beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(
        <ExpenseEdit 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history}
            expense={expenses[1]} 
        />
    )
})


test('Render ExpenseEdit', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Handle editExpense', () => {
    let edit = {
        ...expenses[1],
        'note': 'test'
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(edit)
    
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, edit)
})


test('Handle removeExpense', () => {
    wrapper.find('button').simulate('click')

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({"id": expenses[1].id})
})