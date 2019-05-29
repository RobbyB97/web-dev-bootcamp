// Object Shorthand for ES6

const name = "Robby"
const age = 22

const user = {
  name,
  age,
  location: 'North Haven'
}

console.log(user)

// Destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 3.5
}

//const label = product.label
//const stock = product.stock

//const {label:productLabel, stock, rating = 5} = product
//console.log(productLabel)
//console.log(stock)
//console.log(rating)

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction('order', product)
