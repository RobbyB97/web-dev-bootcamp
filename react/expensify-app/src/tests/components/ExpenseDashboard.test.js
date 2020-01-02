import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboard from '../../components/ExpenseDashboard'


test('Render ExpenseDashboard', () => {
    const wrapper = shallow(<ExpenseDashboard />)
    expect(wrapper).toMatchSnapshot()
})