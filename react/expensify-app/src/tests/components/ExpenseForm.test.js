import React from 'react'
import moment from 'moment'
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


test('Render error on invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('Set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'New description'
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })

    expect(wrapper.state('description')).toBe(value)
})


test('Set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'New note'
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    })

    expect(wrapper.state('note')).toBe(value)
})


test('Set amount with valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '23.50'
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })

    expect(wrapper.state('amount')).toBe(value)
})


test('Don\'t set amount with invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '12.a122'
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
})


test('Call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt
    })
})


test('Set new date onDateChange', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    
    expect(wrapper.state('createdAt')).toEqual(moment())
})


test('Should set calendarFocus', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')(true);
    
    expect(wrapper.state('focusCalendar')).toEqual(true)
})