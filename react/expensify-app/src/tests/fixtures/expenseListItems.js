import moment from 'moment'


export default [{
    id: '1',
    description: 'Food',
    amount: '20',
    createdAt: moment(0).valueOf()
}, {
    id: '2',
    description: 'Water',
    amount: '10',
    createdAt: moment(0).subtract(3, 'days').valueOf()
}
]