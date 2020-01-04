import React from 'react'
import {shallow} from 'enzyme'

import {ExpenseCreate} from '../../components/ExpenseCreate'
import expenses from '../fixtures/expenses'


test('Render ExpenseCreate', () => {
    const onSubmit = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<ExpenseCreate onSubmit={onSubmit} history={history} />)

    expect(wrapper).toMatchSnapshot()
})


test('Handle onSubmit', () => {
    const onSubmit = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<ExpenseCreate onSubmit={onSubmit} history={history} />)

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})