const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit} = require('../src/math')

test('Should calculate total plus tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
}) 

test('Should calculate total using default tip', () => {
    const total = calculateTip(20)
    expect(total).toBe(25)
})

test('Should convert 32F to 0C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0C to 32F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})