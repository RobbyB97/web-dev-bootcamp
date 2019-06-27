const {calculateTip} = require('../src/math')

test('Should calculate total plus tip', () => {
    const total = calculateTip(10, 0.3)
    if (total !== 13) {
        throw new Error('Total tip should be 13. Got ' + total)
    }
}) 