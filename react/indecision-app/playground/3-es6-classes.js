
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
    return `${this.name} is a ${this.age} year old student.`
  }
  hasMajor() {
    return !!this.major
  }
}

const me = new Student('Robby Bergers', 22, 'Computer Science')
console.log(me.hasMajor())

const other = new Student()
console.log(other)
