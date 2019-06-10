require('../src/db/mongoose.js')
const Task = require('../src/models/task')


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
