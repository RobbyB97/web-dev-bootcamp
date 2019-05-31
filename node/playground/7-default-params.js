const greet = (name='John') => {
  console.log('Hello ' + name)
}

greet('Robby')

const transaction = (type, {label, stock=0} = {}) => {
  console.log(type, label, stock)
}
product = {
  label: 'TEST'
}

transaction('order', product)
