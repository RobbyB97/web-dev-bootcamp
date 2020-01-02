import React from 'react'
import {shallow} from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'

test('Render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})