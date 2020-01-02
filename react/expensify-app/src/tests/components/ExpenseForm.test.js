import React from 'react'
import {shallow} from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('Render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test('Render ExpenseForm with expenses', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})
