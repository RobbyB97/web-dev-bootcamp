import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenseListItems from '../fixtures/expenseListItems'

test('Render ExpenseListItem', () => {
    const data = {
        id: expenseListItems[0].id,
        description: expenseListItems[0].description,
        amount: expenseListItems[0].amount,
        createdAt: expenseListItems[0].createdAt
    }
    const wrapper = shallow(<ExpenseListItem {...expenseListItems[0]}/>)
    expect(wrapper).toMatchSnapshot()
})