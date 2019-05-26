//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  },{
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksToDo() {
    let answer = []
    this.tasks.forEach((task) => {
      if (task.completed === false) {
        console.log('Adding task...')
        answer = [...answer, task.text]
      } else {
        console.log('Task completed!')
      }
    })
    return answer
  }
}

console.log('to do: ' + tasks.getTasksToDo())
