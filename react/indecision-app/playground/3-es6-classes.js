
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
  constructor(name, age, major="Undecided") {
    super()
    this.major = major
  }
  getDescription() {
    return `${this.name} is a ${this.age} year old ${this.major} student.`
  }
}

const me = new Student('Robby Bergers', 22, 'Computer Science')
console.log(me.getDescription())

const other = new Student()
console.log(other)
