
class Person {
  constructor(name='This one', age=0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hello ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Robby Bergers', 22)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())
