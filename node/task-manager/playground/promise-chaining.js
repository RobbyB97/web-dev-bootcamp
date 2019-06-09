require('../src/db/mongoose')
const User = require('../src/models/user')

// User id: 5cf967353e6e1b525332bdca

User.findByIdAndUpdate('5cf96a005850aa53cf159573', {age: 47}).then((user) => {
  console.log(user)
  return User.countDocuments({age: 47})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age: age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('5cf96d733743265685729abd', 2).then((count) => {
  console.log('count', count)
}).catch((e) => {
  console.log(e)
})
