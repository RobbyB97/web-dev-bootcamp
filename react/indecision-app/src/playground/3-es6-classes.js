
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

class Student extends Person {
  constructor(name, age, major) {
    super()
    this.major = major
  }
  getDescription() {
    let description = super.getDescription()
    description += this.hasMajor() ? ` ${this.major} major.`:' Undeclared major.'
    return description
  }
  hasMajor() {
    return !!this.major
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super()
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    greeting += this.homeLocation ? ` I'm visiting from ${this.homeLocation}`:''
    return greeting
  }
  hasLocation() {
    return !!this.homeLocation
  }
}


const me = new Traveler('Robby Bergers', 22, 'Connecticut')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())
