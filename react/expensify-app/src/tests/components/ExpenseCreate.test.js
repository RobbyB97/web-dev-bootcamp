import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseCreate} from '../../components/ExpenseCreate'


test('Render ExpenseCreate', () => {
    const onSubmit = jest.fn()
    const history = {push: jest.fn()}
    const wrapper = shallow(<ExpenseCreate onSubmit={onSubmit} history={history} />)

    expect(wrapper).toMatchSnapshot()
})

