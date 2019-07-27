
class Person {
  constructor(name='This one') {
    this.name = name
  }
  getGreeting() {
    return `Hello ${this.name}!`
  }
}

const me = new Person('Robby Bergers')
console.log(me.getGreeting())

const other = new Person()
console.log(other.getGreeting())
