require('../src/db/mongoose.js')
const Task = require('../src/models/task')

// Task id: 5cf96a999c7b695427cfd1a5
Task.findByIdAndDelete('5cf96ad2ca97df5448d7fac1').then(() => {
  console.log('Task deleted')
  return Task.countDocuments({completed: false})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})
