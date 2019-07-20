// User tracking functions
const users = []

const addUser = ({id, username, room}) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required!'
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: `Username '${username}' already exists in ${room}`
    }
  }

  // Store user
  const user = {id, username, room}
  users.push(user)
  return {user}
}

const removeUser = (id) => {
  // Find user
  const index = users.findIndex((user) => user.id === id)

  // Remove user (if exists)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}

// Test functions
const test = () => {
  // addUser tests
  addUser({
    id: 22,
    username: 'Robby',
    room: 'CT'
  })
  const copy = addUser({
    id: 22,
    username: 'Robby',
    room: 'CT'
  })
  const empty = addUser({
    id: 23,
    username: '',
    room: ''
  })
  console.log(copy) // Return error
  console.log(empty)  // Return error
  console.log(users)  // Return 1 object in array

  // removeUser test
  removeUser(22)
  console.log(users)  // Return empty array

  // getUser test
  addUser({
    id: 22,
    username: 'Robby',
    room: 'CT'
  })
  addUser({
    id: 23,
    username: 'Roby',
    room: 'CT'
  })
  addUser({
    id: 24,
    username: 'Robdby',
    room: 'CZ'
  })
  const gotUser = getUser(23)  // Return object with an id of 23
  console.log(`gotUser = ${gotUser.username}`)  // Return 'Roby'

  // getUsersInRoom test
  console.log(`getUsersInRoom = ${getUsersInRoom('CT').length}`)  // Return 2
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
