const add = (a, b) => a + b
const greeting = (name) => `Hello ${name}`

test('Should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('Should generate a greeting', () => {
    const result = greeting('Jeff')
    expect(result).toBe('Hello Jeff')
})