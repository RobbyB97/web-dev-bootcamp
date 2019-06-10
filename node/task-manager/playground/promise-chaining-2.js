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

const deleteTaskAndCount = async (_id) => {
  const task = await Task.findByIdAndDelete(_id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('5cfa9673e0aee41adf04fc2e').then((count) => {
  console.log('count:', count)
}).catch((e) => {
  console.log('e:', e)
})
